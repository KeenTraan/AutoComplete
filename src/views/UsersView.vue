<template>
  <div class="users-layout">
    <Navbar />
    <AutoComplete
      :options="users"
      :placeholder="placeholder"
      :filtersItem="filtersItem"
      :getSelect="selectUsers"
      @searchOptions="searchOptions"
      @addChosen="addChosen"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import AutoComplete from "@/components/Autocomplete/AutoComplete";

import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";
import { PLACEHOLDER } from "@/constant";
export default {
  name: "UserView",
  components: {
    AutoComplete,
    Navbar,
  },
  data() {
    return {
      placeholder: PLACEHOLDER.USERS,
      keyWord: "",
    };
  },
  methods: {
    ...mapActions({
      fetchUsers: "fetchUsers",
      addChosenUser: "selectUsers",
      deleteUsers: "deleteUsers",
    }),

    searchOptions(keyword) {
      this.keyWord = keyword;
    },
    addChosen(item) {
      this.addChosenUser(item);
    },
    deleteItem(item) {
      this.deleteUsers(item);
    },
  },
  computed: {
    ...mapGetters({
      users: "getUsers",
      selectUsers: "getSelectUser",
    }),
    filtersItem() {
      return this.users.filter((item) => {
        return (
          this.keyWord.length &&
          item.name.toLowerCase().includes(this.keyWord.toLowerCase())
        );
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.users-layout {
  display: flex;
}
</style>

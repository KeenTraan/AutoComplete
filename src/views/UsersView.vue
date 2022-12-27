<template>
  <div class="city-layout">
    <Navbar />
    <AutoComplete 
    :options="getUsers"
    :placeholder="placeholder"
    :filtersItem="filtersItem"
    :getSelect="getSelectUser"
    @searchOptions="searchOptions"
    @addChosen ="addChosen"
    @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import AutoComplete from "@/components/Autocomplete/AutoComplete";

import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";
import { PLACEHOLDER } from "@/common";
export default {
  name: "UserView",
  components: {
    AutoComplete,
    Navbar,
  },
  data() {
    return {
      placeholder: PLACEHOLDER.USERS,
      keyword: ""
    };
  },
  methods: {
    ...mapActions({fetchUsers: "fetchUsers", addChosenUser: "selectUsers", deleteUsers: "deleteUsers" }),

    searchOptions(keyword) {
      this.keyword = keyword
    },
    addChosen(item) {
      this.addChosenUser(item);
    },
    deleteItem(item) {
      this.deleteUsers(item)
    }
  },
  computed: {
    ...mapGetters(["getUsers", "getSelectUser"]),
    filtersItem() {
      return this.getUsers.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.keyword.toLowerCase()) &&
          this.keyword.length
        );
      });
    },
  },
  created() {
    this.fetchUsers()
  },
};
</script>

<style lang="scss" scoped>
.city-layout {
  display: flex;
}
</style>

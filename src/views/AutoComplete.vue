<template>
  <div class="auto-layout">
    <Navbar />
    <div>
      <Search
        @searchItem="searchItem"
        :options="options"
        @select="selectItem"
        :placeholder="PLACEHOLDER"
      />
      <DropdownOption
        @selectItem="selectItem"
        :options="filtersItem"
        v-if="ishiden"
      />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import DropdownOption from "@/components/Autocomplete/DropdownOption.vue";
import Search from "@/components/Autocomplete/Search.vue";
import { mapGetters } from "vuex";
import { PLACEHOLDER } from "@/constant";
export default {
  name: "AutocompleteView",
  data() {
    return {
      ishiden: false,
      keyword: "",
      options: [],
      PLACEHOLDER: PLACEHOLDER.CITY,
    };
  },
  components: {
    Navbar,
    DropdownOption,
    Search,
  },
  computed: {
    ...mapGetters(["getOptions"]),
    filtersItem() {
      return this.getOptions.filter((item) => {
        return item.name.toLowerCase().includes(this.keyword.toLowerCase());
      });
    },
  },
  methods: {
    searchItem(keyword) {
        this.ishiden = true;
        this.keyword = keyword;
    },
    selectItem(options) {
      console.log(options)
      this.options.push(options.name);
      this.ishiden = false;
    },
  },
  created() {
    this.$store.dispatch("fetchOptions");
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
}
</style>

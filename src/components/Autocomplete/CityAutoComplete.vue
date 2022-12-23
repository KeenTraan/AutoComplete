<template>
  <div class="auto-layout">
    <div>
      <Search
        @searchItem="searchItem"
        :options="options"
        @select="selectItem"
        :placeholder="PLACEHOLDER" 
        :keyword="keyword"
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
import DropdownOption from "@/components/Autocomplete/DropdownOption.vue";
import Search from "@/components/Autocomplete/Search.vue";
import { mapGetters } from "vuex";
import { PLACEHOLDER } from "@/common";
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
    DropdownOption,
    Search,
  },
  methods: {
    searchItem(keyword) {
      this.ishiden = true;
      this.keyword = keyword;
    },
    selectItem(options) {
      this.options.push(options.name);
      this.ishiden = false;
      this.keyword = ""
    },
  },
  computed: {
    ...mapGetters(["getOptions"]),
    filtersItem() {
      return this.getOptions.filter((item) => {
        return item.name.toLowerCase().includes(this.keyword.toLowerCase()) && this.keyword.length;
      });
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

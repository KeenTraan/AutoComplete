<template>
  <div class="auto-layout">
    <div>
      <Search
        @searchItem="searchItem"
        :getSelect="getSelect"
        :placeholder="placeholder"
        :keyword="keyword"
        @deleteOptions="deleteOptions"
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
export default {
  name: "AutoComplete",
  data() {
    return {
      ishiden: false,
      keyword: "",
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
      this.$emit("searchOptions", this.keyword);
    },
    selectItem(item) {
      this.$emit("addChosen", item)
      this.keyword = "";
    },
    deleteOptions(item) {
      this.$emit("deleteItem", item)
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
    },
    getSelect: {
      type: Array,
      default: () => [],
    },
    filtersItem: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
}
</style>

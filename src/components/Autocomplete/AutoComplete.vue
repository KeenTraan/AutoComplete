<template>
  <div class="auto-layout">
    <div>
      <Search
        :getSelect="getSelect"
        :placeholder="placeholder"
        :keyword="keyword"
        @searchItem="searchItem"
        @deleteOptions="deleteOptions"
      />
      <DropdownOption
        v-if="ishiden"
        :options="filtersItem"
        @selectItem="selectItem"
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
    searchItem(valueInput) {
      this.keyword = valueInput;
      this.$emit("searchOptions", this.keyword);
      this.ishiden = true;
    },
    selectItem(item) {
      this.keyword = "";
      this.ishiden = false;
      this.$emit("addChosen", item)
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

<template>
  <div class="auto-layout">
    <div class="auto-completed">
      <Search
        :getSelect="getSelect"
        :placeholder="placeholder"
        :keyword="keyword"
        @searchItem="searchItem"
        @deleteOptions="deleteOptions"
      />
      <DropdownOption
        v-if="!showDropdown"
        :listOptions="filtersItem"
        :message="message"
        :keyword="keyword"
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
      keyword: "",
      message: "Not Found",
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
    },
    selectItem(item) {
      this.$emit("addChosen", item);
      this.keyword = "";
    },
    deleteOptions(item) {
      this.$emit("deleteItem", item);
    },
  },
  computed: {
    showDropdown() {
      return this.keyword.length === 0;
    },
  },
  props: {
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
    limited: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
  flex-direction: column;
  .auto-completed {
    position: relative;
  }
}
</style>

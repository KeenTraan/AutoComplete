<template>
  <div class="auto-layout">
      <Search
        :getSelect="getSelect"
        :placeholder="placeholder"
        :keyword="keyword"
        @searchItem="searchItem"
        @deleteOptions="deleteOptions"
      />
      <DropdownOption
        v-if="isHiden"
        :listOptions="filtersItem"
        :message="message"
        :keyword="keyword"
        @selectItem="selectItem"
      />
  </div>
</template>

<script>
import DropdownOption from "@/components/Autocomplete/DropdownOption.vue";
import Search from "@/components/Autocomplete/Search.vue";
export default {
  name: "AutoComplete",
  data() {
    return {
      isHiden: false,
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
      this.isHiden = true;
      this.$emit("searchOptions", this.keyword);
    },
    selectItem(item) {
        this.$emit("addChosen", item)
        this.keyword = "";
        this.isHiden = false;
    },
    deleteOptions(item) {
      this.$emit("deleteItem", item)
    }
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
      require: true
    }
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="search-layout">
    <p class="description">{{ description }}</p>
    <AutoComplete
      :filtersItem="data"
      :placeholder="placeholder"
      :getSelect="selected"
      @searchOptions="searchOptions"
      @addChosen="addChosen"
      @deleteItem="deletedItem"
    />
  </div>
</template>

<script>
import AutoComplete from "@/components/Autocomplete/AutoComplete.vue";
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  components: {
    AutoComplete,
  },
  methods: {
    searchOptions(keyword) {
      this.$emit("handleSearch", keyword);
    },
    addChosen(item) {
      this.$emit('handelAddItem', item);
    },
    deletedItem(item) {
      this.$emit('handelDeleteItem', item);
    }
  },
};
</script>

<style scoped lang="scss">
.search-layout {
  width: 528px;
  .description {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #666666;
  }
}
::v-deep .input-layout {
  width: 528px;
  padding: 1px 11px;
  input {
    height: 40px;
  }
}
</style>
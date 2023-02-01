<template>
  <div class="position-layout">
    <div>
      <p class="input-text">{{ label }}</p>
      <p class="input-text-description">{{ description }}</p>
      <AutoComplete
        :placeholder="placeholder"
        :getSelect="selected"
        :filtersItem="filtersItem"
        @searchOptions="searchOptions"
        @addChosen="addChosen"
        @deleteItem="deleteItem"
      />
    </div>
  </div>
</template>

<script>
import { PLACEHOLDER } from "@/constant/Form";
import AutoComplete from "@/components/Autocomplete/AutoComplete.vue";
export default {
  data() {
    return {
      placeholder: PLACEHOLDER.JOB_POSITION,
    };
  },
  components: {
    AutoComplete,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: false,
    },
    filtersItem: {
      type: Array,
      required: true,
    },
    selected: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addChosen(item) {
      this.$emit("handleAddItem", item);
    },
    deleteItem(item) {
      this.$emit("handleDeleteItem", item);
    },
    searchOptions(keyword) {
      this.$emit("handleSearch", keyword);
    },
  },
};
</script>

<style scoped lang="scss">
.position-layout {
  width: 528px;
  .input-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
    &-description {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #666666;
    }
  }
}
::v-deep .input-layout {
  width: 528px;
  padding: 1px 11px;
  input {
    width: 476px;
    height: 40px;
  }
}
</style>
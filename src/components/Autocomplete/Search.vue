<template>
  <div>
    <div class="input-layout">
      <img src="@/assets/search.png" alt="#" />
      <div v-for="item in getSelect" :key="item.code" class="option-items">
        <div class="item">{{ item.name }}</div>
        <img
          src="@/assets/icons/X.png"
          @click="handleDelete(item)"
          class="icons"
        />
      </div>
      <div>
        <input
          type="text"
          :placeholder="placeholder"
          :value="valueInput"
          @input="handleSearch"
          multiple
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItem",
  data() {
    return {
      valueInput: "",
    };
  },
  props: {
    getSelect: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
    keyword: {
      type: String,
      required: true,
    },
  },
  watch: {
    keyword(value) {
      this.valueInput = value;
    },
  },
  methods: {
    handleSearch(e) {
      this.valueInput = e.target.value;
      this.$emit("searchItem", this.valueInput);
      this.$emit("onChangeInput", this.valueInput);
    },
    handleDelete(item) {
      this.$emit("deleteOptions", item);
    },
  },
};
</script>

<style scoped lang="scss">
.input-layout {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 528px;
  padding: 8px 10px;
  gap: 4px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
input {
  width: max-content;
  height: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #bfbfbf;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  flex: none;
  order: 1;
  flex-grow: 1;
}
.option-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 8px;
  width: max-content;
  height: 32px;
  background-color: #f0f4f8;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  flex: none;
  flex-grow: 0;
  margin-right: 3px;
  .icons {
    cursor: pointer;
  }
  .item {
    height: 20px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #627d98;
    display: flex;
    align-items: center;
  }
}
.input-layout:focus-within {
  border: 1px solid skyblue;
}
</style>

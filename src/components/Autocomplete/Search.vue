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
          v-model="valueInput"
          @input="handleSearch"
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
      valueInput: ""
    }
  },
  props: {
    getSelect: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "",
    },
    // keyword: {
    //   type: String,
    // }
  },
  // watch: {
  //   keyword: {
  //     handler(value) {
  //       this.valueInput = value;
  //     }
  //   }
  // },
  methods: {
    handleSearch() {
      this.$emit("searchItem", this.valueInput);
    },
    handleDelete(item) {
      this.$emit('deleteOptions', item)
    },
  },
};
</script>

<style scoped lang="scss">
.input-layout {
  margin: 10px 0 2px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  min-height: 49px;
  padding: 8px 10px;
  gap: 4px;
  background: rgba(230, 249, 255, 0.2);
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
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
  // border: 1px solid red;
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
  background: #f0f4f8;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  flex: none;
  flex-grow: 0;
  margin-right: 3px;
  // border: 1px solid red;
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

<template>
  <div>
    <div class="input-layout">
        <img src="@/assets/search.png" alt="" />
        <input type="text" placeholder="Nhập tên thành phố tìm kiếm..." v-model="keyword" @input="handleSearch"/>
      </div>
  </div>
</template>

<script>
export default {
name: 'SearchItem',
data() {
  return {
    keyword: ''
  }
},
methods: {
  handleSearch() {
   this.$emit("searchCity", this.keyword)
  }
}
}
</script>

<style scoped lang="scss">
 .input-layout {
    margin: 10px 0 2px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    height: 49px;
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
    width: 352px;
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
.input-layout:focus-within{
  border: 1px solid skyblue;
}
</style>
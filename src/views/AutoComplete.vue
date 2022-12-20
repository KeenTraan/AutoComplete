<template>
  <div class="auto-layout">
    <Navbar />
    <div class="input-layout">
      <img src="@/assets/search.png" alt="" />
      <input type="search" placeholder="Nhập tên thành phố tìm kiếm..." />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AutocompleteView",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
  .input-layout {
    margin: 10px;
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
}
</style>

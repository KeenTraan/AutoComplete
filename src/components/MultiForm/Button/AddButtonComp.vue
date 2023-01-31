<template>
  <div class="add-btn-layout" @click="handleClick">
    <div>
      <img src="@/assets/icons/Plus.png" alt="#" class="add-icon" />
    </div>
    <button class="add-btn">Thêm công ty</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("hey");
    },
  },
};
</script>

<style lang="scss" scoped>
.add-btn-layout {
  margin-top: 20px;
  width: 151px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  cursor: pointer;
  padding: 4px;
  .add-icon {
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }
  .add-btn {
    cursor: pointer;
    background: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    color: #48647f;
  }
}
</style>
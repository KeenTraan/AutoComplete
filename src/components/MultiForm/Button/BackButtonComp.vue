``<template>
  <button class="btn-layout" @click="handleClick">Quay lại</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-layout {
  width: 102px;
  height: 40px;
  margin-left: 26px;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #666666;
}
</style>
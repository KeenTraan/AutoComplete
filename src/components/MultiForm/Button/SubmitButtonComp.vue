<template>
  <button v-if="currentStep === 2" class="btn">Hoàn Thành</button>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  margin-top: 24px;
  width: 142px;
  height: 40px;
  background: #627d98;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
</style>
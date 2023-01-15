<template>
  <div class="input-date-layout">
    <div v-for="input, index in currentForm" :key="index">
      <div v-if="input.type === 'datetime'">
        <p class="form-label">{{input.label }}</p>
        <input type="date" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentForm: Array,
  },
};
</script>

<style scoped lang="scss">
.input-date-layout {
  width: 118px;
  height: 66px;
  // border: 1px solid red;
  .form-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
}
</style>

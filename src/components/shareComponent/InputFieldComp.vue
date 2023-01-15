<template>
  <div class="input-field-layout">
    <div v-for="input, index in currentForm" :key="index">
      <div v-if="input.type === 'text'">
        <p class="form-label">{{ input.label }}</p>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentForm: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.input-field-layout {
  width: 528px;
  height: 66px;
  // border: 1px solid red;
  .form-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  input {
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
  }
  input:focus {
    border: none;
    outline: 2px solid skyblue;
  }
}
</style>

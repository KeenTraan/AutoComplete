<template>
  <div class="input-date-layout">
    <div>
      <div class="title">
        <CheckrequireComp />
        <p class="form-label">{{ form.label }}</p>
      </div>
      <input type="date" />
    </div>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";
export default {
  components: { CheckrequireComp },
  props: {
    form: Object,
  },
};
</script>

<style scoped lang="scss">
.input-date-layout {
  width: 118px;
  height: 66px;
  .title {
    display: flex;
    margin-bottom: 6px;
  }
  .form-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  input[type="date"] {
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 118px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 2px;
  }
  input::-webkit-calendar-picker-indicator {
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
}
</style>

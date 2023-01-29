<template>
  <div class="select-layout">
    <div>
      <p class="input-text">{{ label }}</p>
      <select class="select-input">
        <option v-for="cities in data" :key="cities.code">
          {{ cities.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    data: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.select-layout {
  width: 528px;
  height: 64px;
  .input-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 71px;
    height: 20px;
    margin-bottom: 4px;
  }
  .select-input {
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 8px;
    outline: none;
    cursor: pointer;
  }
}
</style>
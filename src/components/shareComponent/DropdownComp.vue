<template>
  <div class="drop-layout">
    <div>
      <p class="input-text">{{ form.label }}</p>
      <select class="drop-input">
        <option v-for="cities in cities" :key="cities.code">
          {{ cities.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
    },
    cities: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.drop-layout {
  width: 528px;
  height: 64px;
  .input-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 71px;
    height: 20px;
    margin-bottom: 6px;
  }
  .drop-input {
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 8px 10px;
    outline: none;
    cursor: pointer;
  }
}
</style>
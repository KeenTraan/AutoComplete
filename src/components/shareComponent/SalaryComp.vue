<template>
  <div class="salary-layout">
    <div class="title">
      <CheckrequireComp v-if="required" />
      <p>{{ label }}</p>
    </div>
    <div class="content">
      <input type="number" @input="handleInput" :value="inputValue" />
      <p>{{ currency }}</p>
    </div>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    currency: {
      type: String,
      required: true,
    },
    inputValue: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.$emit("handleInput", { value: value, name: this.name });
    },
  },
  components: { CheckrequireComp },
};
</script>

<style scoped lang="scss">
.salary-layout {
  .title {
    display: flex;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .content {
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    height: 40px;
    padding: 10px 8px;
  }
  input {
    background: #ffffff;
    border: none;
    margin-right: 10px;
  }
}
input:focus {
  outline: 1px solid skyblue;
  border-radius: 2px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
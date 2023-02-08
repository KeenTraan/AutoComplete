<template>
  <div class="salary-layout">
    <div class="content" :class="{ 'err-valid': err }">
      <input type="number" @input="handleInput" :value="inputValue" />
      <p class="currency">{{ currency }}</p>
    </div>
    <p :class="{ 'err-msg': err }">{{ err }}</p>
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      required: false,
    },
    inputValue: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    err: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.$emit("handleInputSalary", { value: value, id: this.id });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 119px;
  height: 40px;
  padding: 10px 8px;
}
input {
  background: #ffffff;
  border: none;
  outline: none;
  margin-right: 10px;
  width: 63px;
  height: 20px;
}
.currency {
  font-weight: 400;
  font-size: 14px;
}
.content:focus {
  outline: 1px solid skyblue;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.err-msg {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: red;
}
.err-valid {
  border: 1px solid red;
}
</style>
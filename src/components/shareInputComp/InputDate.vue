<template>
  <div class="input-date-layout">
    <input
      :class="{ 'err-valid': err }"
      type="date"
      :value="inputValue"
      :max="today"
      @input="onChange"
    />
    <br />
    <P :class="{ 'err-msg': err }">{{ err }}</P>
  </div>
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      require: false,
    },
    today: {
      type: String,
      required: false,
    },
    err: {
      type: String,
      default: "",
    },
  },
  methods: {
    onChange(e) {
      const value = e.target.value;
      this.$emit("onChangeInputDate", { value: value, id: this.id });
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  width: 118px;
  height: 66px;
  padding: 6px;
  font-weight: 400;
  font-size: 14px;
}
input {
  outline: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 118px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
}
input::-webkit-calendar-picker-indicator {
  background-color: #ffffff;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
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
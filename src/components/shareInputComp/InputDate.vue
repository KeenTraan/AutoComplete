<template>
  <div class="input-date-layout">
    <input type="date" :value="inputValue" :max="today" @input="onChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: new Date().toISOString().split("T")[0],
    };
  },
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
</style>
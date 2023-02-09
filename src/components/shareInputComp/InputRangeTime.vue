<template>
  <div class="input-layout">
    <div class="date-time">
      <input
        class="input-date"
        type="date"
        :class="{ 'err-valid': err }"
        :max="today"
        :value="inputValue.from"
        @input="handleInputStart"
      />
      <p class="line">-</p>
      <input
        class="input-date"
        type="date"
        :class="{ 'err-valid': err }"
        :max="today"
        :value="inputValue.to"
        @input="handleInputEnd"
      />
    </div>
    <p :class="{ 'err-msg': err }">{{ err }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    inputValue: {
      type: Object,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
    },
    err: {
      type: String,
      default: "",
    },
    today: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleInputStart(e) {
      const value = e.target.value;
      this.$emit("handleInput", {
        value: { from: value, to: this.inputValue.to },
        id: this.id,
      });
    },
    handleInputEnd(e) {
      const value = e.target.value;
      this.$emit("handleInput", {
        value: { from: this.inputValue.from, to: value },
        id: this.id,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.input-layout {
  margin-top: 14px;
  .date-time {
    display: flex;
    gap: 18px;
    align-items: center;
    width: 284px;
    height: 40px;
    .input-date {
      padding: 4px;
      height: 40px;
      border: 1px solid #dcdcdc;
      text-align: center;
      border-radius: 2px;
      font-weight: 400;
      font-size: 14px;
    }
    .line {
      color: #bfbfbf;
    }
    .err-valid {
      border: 1px solid red;
    }
  }
  .err-msg {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: red;
  }
}
</style>
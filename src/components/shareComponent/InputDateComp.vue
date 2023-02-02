<template>
  <div class="input-date-layout">
    <div>
      <div class="title">
        <CheckrequireComp />
        <p>{{ label }}</p>
      </div>
      <input
        class="input-date"
        type="date"
        value="inputValue"
        @input="handleInputDate"
      />
    </div>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";
export default {
  components: { CheckrequireComp },
  props: {
    label: {
      type: String,
      default: "",
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
      required: true,
    },
  },
  methods: {
    handleInputDate(e) {
      this.$emit("handleInput", { value: e.target.value, name: this.name });
    },
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
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  .input-date {
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
}
</style>

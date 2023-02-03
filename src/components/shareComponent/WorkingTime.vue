<template>
  <div class="working-time-layout">
    <div class="title">
      <CheckrequireComp />
      <p>{{ label }}</p>
    </div>
    <div class="date-time">
      <input
        class="input-date"
        type="date"
        :value="inputValue.from"
        @input="handleInputStart"
      />
      <p class="line">-</p>
      <input
        class="input-date"
        type="date"
        :value="inputValue.to"
        @input="handleInputEnd"
      />
    </div>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    inputValue: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInputStart(e) {
      const value = e.target.value;
      this.$emit("handleInput", {
        value: { from: value, to: this.inputValue.to },
        name: this.name,
      });
    },
    handleInputEnd(e) {
      const value = e.target.value;
      this.$emit("handleInput", {
        value: { from: this.inputValue.from, to: value },
        name: this.name,
      });
    },
  },
  components: { CheckrequireComp },
};
</script>

<style scoped lang="scss">
.working-time-layout {
  margin-top: 24px;
  .title {
    display: flex;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .date-time {
    display: flex;
    gap: 18px;
    align-items: center;
    width: 284px;
    height: 40px;
    .input-date {
      padding: 4px;
      width: 118px;
      height: 40px;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      font-weight: 400;
      font-size: 14px;
    }
    .line {
      color: #bfbfbf;
    }
  }
}
</style>
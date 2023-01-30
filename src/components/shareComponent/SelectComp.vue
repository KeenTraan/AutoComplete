<template>
  <div class="select-layout">
    <div>
      <p class="input-text">{{ label }}</p>
      <select class="select-input" @change="onChange">
        <option v-for="item in data" :key="item.code || item.id" :value="value">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: {
    label: {
      type: String,
    },
    data: {
      type: Array,
      default: () => [],
    },
    inputValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
  },
  watch: {
    inputValue: {
      handler(value) {
        this.value = value;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    onChange(e) {
      var value = e.target.options[e.target.options.selectedIndex].text;
      this.$emit("handleSelect", { id: this.id, value: value });
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
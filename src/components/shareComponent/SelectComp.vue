<template>
  <div class="select-layout">
    <div class="title">
      <CheckrequireComp v-if="required" />
      <p class="text-label">{{ label }}</p>
    </div>
    <select class="select-input" @input="onChange">
      <option
        v-for="item in data"
        :key="item.code || item.id"
        :value="item.name"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";

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
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
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
  components: { CheckrequireComp },
};
</script>

<style scoped lang="scss">
.select-layout {
  width: 528px;
  height: 64px;
  .title {
    display: flex;
  }
  .text-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 71px;
    height: 20px;
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
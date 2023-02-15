<template>
  <div class="selected-layout">
    <select class="selected-input" @input="onChange" :value="inputValue">
      <option
        v-for="item in inputData"
        :key="item.code || item.id"
        :value="item.name"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    inputData: {
      type: Array,
      required: true,
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
      required: false,
    },
  },
  methods: {
    onChange(e) {
      const value = e.target.options[e.target.options.selectedIndex].text;
      this.$emit("onChangeInputSelected", { value: value, id: this.id });
    },
  },
};
</script>

<style scoped lang="scss">
.selected-input {
  padding: 8px 10px;
  width: 528px;
  height: 64px;
  width: 528px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  cursor: pointer;
}
</style>

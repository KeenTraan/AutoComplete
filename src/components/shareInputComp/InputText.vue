<template>
  <div class="input-text-layout">
    <input type="text" :value="inputValue" @input="onChange" />
  </div>
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
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
      const value = e.target.value;
      this.$emit("handleInputText", { value: value, id: this.id });
    },
  },
};
</script>

<style scoped lang="scss">
.input-text-layout {
  width: 528px;
  margin-top: 14px;
  input {
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
  }
  input:focus {
    outline: none;
  }
}
</style>
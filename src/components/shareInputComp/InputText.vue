<template>
  <div class="input-text-layout">
    <input
      :class="{ 'err-valid': errMsg }"
      type="text"
      :value="inputValue"
      @input="onChange"
    />
    <p :class="{ 'err-msg': errMsg }">{{ errMsg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errMsg: "",
    };
  },
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
    err: {
      type: String,
      default: "",
    },
  },
  watch: {
    err: {
      handler(value) {
        this.errMsg = value;
      },
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
  .err-msg {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: red;
  }
  .err-valid {
    border: 1px solid red;
  }
}
</style>
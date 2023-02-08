<template>
  <div class="textarea-layout">
    <textarea
      :class="{ 'err-valid': errMsg }"
      class="text-content"
      cols="30"
      rows="10"
      :value="inputValue"
      @input="onChange"
    ></textarea>
    <p class="character">{{ `${inputValue.length}/${character}` }}</p>
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
    character: {
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
      this.$emit("handleInputTextarea", { value: value, id: this.id });
    },
  },
};
</script>

<style scoped lang="scss">
.textarea-layout {
  .text-content {
    width: 528px;
    height: 152px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
    resize: none;
    overflow: auto;
  }
  .text-content:focus {
    outline: none;
  }
  .text-content::-webkit-scrollbar {
    width: 5px;
    height: 0;
  }
  .text-content::-webkit-scrollbar-thumb {
    border-radius: 100rem;
    background-color: rgb(141, 141, 141, 0.5);
  }
  .text-content::-webkit-scrollbar-track {
    border-radius: 100rem;
    background-color: white;
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
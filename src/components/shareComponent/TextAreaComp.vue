<template>
  <div class="description">
    <div class="title">
      <CheckrequireComp v-if="required === true" />
      <p class="text-label">{{ label }}</p>
    </div>
    <textarea
      cols="30"
      rows="10"
      class="text-content"
      value="inputValue"
      :class="{ 'error-valid': valid }"
      @input="handleInput"
    ></textarea>
    <p class="error-message">{{ errorMessage }}</p>
    <p class="character">{{ `${word}/${character}` }}</p>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";

export default {
  data() {
    return {
      errorMessage: "",
      word: 0,
    };
  },
  computed: {
    valid() {
      return this.inputValue.length > this.maxLength;
    },
  },
  methods: {
    handleInput(e) {
      if (this.inputValue.length > this.maxLength) {
        this.errorMessage = "Invalid input";
      }
      if (this.inputValue.length > this.maxLength) {
        this.word--;
      }
      this.$emit("handleInput", { value: e.target.value, id: this.id });
      this.word++;
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    character: {
      type: Number,
      required: false,
    },
    inputValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    maxLength: {
      type: Number,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  components: { CheckrequireComp },
};
</script>

<style scoped lang="scss">
.description {
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
  }
  .text-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    align-items: center;
    margin-bottom: 6px;
  }
  .text-content {
    width: 528px;
    height: 152px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
    outline: none;
    resize: none;
  }
  .text-content:focus {
    // border: none;
    border: 1px solid skyblue;
  }
  .character {
    margin-top: 10px;
  }
  .error-message {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: red;
  }
  .error-valid {
    border: 1px solid red;
  }
}
</style>

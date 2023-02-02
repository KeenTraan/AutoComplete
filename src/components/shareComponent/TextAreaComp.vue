<template>
  <div class="description" :id="this.name">
    <div class="title">
      <CheckrequireComp v-if="required" />
      <p class="text-label">{{ label }}</p>
    </div>
    <textarea
      cols="30"
      rows="10"
      class="text-content"
      :value="inputValue"
      :class="{ 'error-valid': valid }"
      @input="handleInput"
    ></textarea>
    <p class="error-message">{{ errorMessage }}</p>
    <p class="character">{{ `${inputValue.length}/${character}` }}</p>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";

export default {
  data() {
    return {
      errorMessage: "",
    };
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
    name: {
      type: String,
      required: true,
    },
    maxLength: {
      type: Number,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  components: { CheckrequireComp },
  computed: {
    valid() {
      return this.inputValue.length > this.maxLength;
    },
  },
  methods: {
    handleInput(e) {
      if (this.inputValue.length > this.maxLength) {
        this.$emit('handleValidation',true)
        this.errorMessage = "Invalid input";
      } 
      if(this.inputValue.length < this.maxLength) {
        this.$emit('handleValidation',false)
        this.errorMessage = "";
      }
      this.$emit("handleInput", { value: e.target.value, name: this.name });
    },
  },
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
    resize: none;
    overflow: auto;
  }
  .text-content:focus {
    outline: none;
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
    background: rgb(255, 0, 0, 0.1);
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
}
</style>

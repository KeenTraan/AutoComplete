<template>
  <div class="input-text-layout">
    <div>
      <div class="title">
        <CheckrequireComp v-if="required" />
        <p>{{ label }}</p>
      </div>
      <input type="text" :value="inputValue" @input="handleInput" />
      <p class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import CheckrequireComp from "@/components/shareComponent/CheckrequireComp.vue";
export default {
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    handleInput(e) {
      if (this.inputValue.length > this.maxLength) {
        this.errorMessage = "Invalid input";
      }
      if (
        this.inputValue.length < this.maxLength ||
        this.inputValue.length == 0
      ) {
        this.errorMessage = "";
      }
      this.$emit("handleInput", {
        value: e.target.value,
        id: this.id,
      });
    },
  },
  components: {
    CheckrequireComp,
  },
  props: {
    label: {
      type: String,
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
      default: true,
    },
    maxLength: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.input-text-layout {
  width: 528px;
  margin-top: 24px;
  .title {
    display: flex;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  input {
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
  }
  input:focus {
    border: none;
    outline: 1px solid skyblue;
  }
  .error-message {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: red;
  }
}
</style>

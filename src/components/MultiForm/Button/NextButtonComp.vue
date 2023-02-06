<template>
  <button
    v-if="currentStep < 2"
    class="btn"
    @click="onClick"
  >
    Tiếp
  </button>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    isError: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    valid() {
      return this.isError;
    },
  },
  methods: {
    onClick() {
      this.$emit("handleClick");
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  margin-top: 24px;
  width: 102px;
  height: 40px;
  background: #627d98;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.btn:disabled {
  opacity: 1;
  cursor: not-allowed;
  background: #dcdcdc;
}
// .err-valid {
//   background: #c5c5c5;
//   opacity: 0.8;
//   cursor: not-allowed;
// }
</style>
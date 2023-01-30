<template>
  <button :disabled="!disabled" class="btn" @click="onClick">Tiếp</button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: true,
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
</style>
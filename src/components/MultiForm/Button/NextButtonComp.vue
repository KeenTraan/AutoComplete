<template>
  <button class="btn" @click="onClick">Tiếp</button>
</template>

<script>
export default {
  methods: {
    onClick() {
      console.log("onClick");
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
</style>
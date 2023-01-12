<template>
  <div class="wrapper-step">
    <div v-for="item in stepProgress" :key="item.id" class="step-progress">
      <div class="step-progress-item">
        <span>{{ item.num }}</span>
      </div>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepProgress: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper-step {
  display: flex;
  // border: 1px solid red;
  .step-progress {
    display: flex;
    flex-direction: column;
    &-item {
      background-color: #617d98;
      border-radius: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 6px 12px;
      width: 40px;
      height: 40px;
      color: white;
    }
  }
}
</style>
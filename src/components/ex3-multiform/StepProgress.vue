<template>
  <div class="wrapper-stepper">
    <div class="stepper-progress" :style="widthProgess">
      <div class="stepper-progress-bar"></div>
      <div class="stepper-progress-bar"></div>
    </div>
    <div class="stepper">
      <div
        v-for="step in data"
        :key="step.step"
        class="stepper-item"
        @click="onClick(step.step)"
      >
        <div class="stepper-item-counter" :class="{ active: step.isActive }">
          <span class="stepper-number">{{ step.step }}</span>
        </div>
        <span class="stepper-title">{{ step.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
    },
  },
  computed: {
    widthProgess() {
      return {
        width: ((this.data.length - 1) / this.data.length) * 100 + "%",
      };
    },
  },
  methods: {
    onClick(step) {
      // console.log(index);
      this.$emit("handleStep", step);
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper-stepper {
  background-color: #fff;
  margin: 24px;
  border-radius: 32px;
  box-shadow: rgba($color: #000000, $alpha: 0.09);
  position: relative;
  .stepper {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    &-progress {
      background-color: #c5c5c5;
      position: absolute;
      z-index: 0;
      height: 2px;
      top: 20px;
      left: 0;
      right: 0;
      margin: 0 auto;
      &-bar {
        position: absolute;
        left: 0;
        height: 100%;
        width: 0%;
        transition: all 500ms ease;
      }
    }
  }
}
.stepper-item {
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: #000000;
  padding: 0 10px;
  flex: 1;
  &-counter {
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    background-color: #c5c5c5;
    border-radius: 100%;
    position: relative;
    align-items: center;
  }
  .stepper-number {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    transition: all 500ms ease;
    color: #fff;
  }
  &-title {
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
}
.active {
  background-color: #617d98;
}
</style>
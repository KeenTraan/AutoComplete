<template>
  <div class="wrapper-stepper">
    <div class="stepper">
      <div
        v-for="(step, index) in step"
        :key="step"
        @click="onClick(index)"
        class="stepper-item-counter"
        :class="{ active: index < 1 }"
      >
        <div>
          <span class="number">
            {{ step }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepperComponent",
  props: {
    step: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick(index) {
      this.$emit("nextStep", index)
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/components/Multiform/style/Stepper.scss";
</style>

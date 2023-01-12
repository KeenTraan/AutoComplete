<template>
  <div class="wrapper-stepper">
    <div class="stepper">
      <div
        v-for="step, index in stepProgress"
        :key="step.id"
        @click="onStepChange(index)"
        class="stepper-item-counter"
        :class="{ active: index < 1 }"
      >
        <div>
          <span class="number">
            {{ step.num }}
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
    stepProgress: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    } 
  },
  methods: {
    onStepChange(index) {
      this.$emit("handleStep", index)
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/components/Multiform/style/Stepper.scss";
</style>

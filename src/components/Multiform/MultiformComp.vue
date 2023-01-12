<template>
  <div class="multiform-layout">
    <Stepper :stepProgress="stepProgress" :currentStep="currentStep" @handleStep="nextStep"/>
  </div>
</template>

<script>
import Stepper from "@/components/Multiform/StepperComp.vue";
import { stepProgress } from "@/components/Multiform/dynamicForm";
export default {
  data() {
    return {
      stepProgress,
      currentStep: 1
    }
  },
  methods: {
    nextStep(index) {
       console.log(index);
    }
  },
  components: {
    Stepper
  },
};
</script>

<style scoped lang="scss">
</style>

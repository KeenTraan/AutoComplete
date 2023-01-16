<template>
  <div class="dynamic-layout">
    <StepProgress :stepProgress="stepForm" :currentStep="1" />
    <FormCard :currentForm="getCurrentForm" />
    <NextButtonComp />
  </div>
</template>

<script>
import StepProgress from "@/components/Multiform/StepProgress.vue";
import FormCard from "@/components/Multiform/FormCard.vue";
import { stepForm } from "@/components/Multiform/form";
import NextButtonComp from "../Multiform/Button/NextButtonComp.vue";
export default {
  data() {
    return {
      stepForm,
      currentStep: 0,
    };
  },
  components: {
    StepProgress,
    FormCard,
    NextButtonComp,
  },
  computed: {
    getCurrentForm() {
      return this.stepForm[this.currentStep];
    },
  },
};
</script>

<style scoped lang="scss">
.dynamic-layout {
  width: 500px;
  height: 88px;
}
</style>

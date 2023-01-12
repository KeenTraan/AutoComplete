<template>
  <div class="dynamic-layout">
    <StepProgress :stepProgress="stepForm" :currentStep="2" />
    <FormCard :currentForm="getCurrentForm" />
  </div>
</template>

<script>
import StepProgress from "@/components/Multiform/StepProgress.vue";
import FormCard from "@/components/Multiform/FormCard.vue";
import { stepForm } from "@/components/Multiform/form";
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
  width: 294px;
  height: 88px;
}
</style>
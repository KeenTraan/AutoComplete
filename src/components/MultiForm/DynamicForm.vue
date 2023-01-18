<template>
  <div class="dynamic-layout">
    <StepProgress :stepProgress="stepForm" :currentStep="1" />
    <FormCard :currentForm="getCurrentForm" />
    <NextButtonComp />
  </div>
</template>

<script>
import StepProgress from "@/components/MultiForm/StepProgress.vue";
import FormCard from "@/components/MultiForm/FormCard.vue";
import { stepForm } from "@/components/MultiForm/form";
import NextButtonComp from "@/components/MultiForm/button/NextButtonComp.vue";
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

<template>
  <div class="dynamic-layout">
    <StepProgress :stepProgress="stepForm" :currentStep="currentStep" />
    <FormCard :dataForm="stepForm[0]" v-if="currentStep === 1" />
    <!-- {{ stepForm[1] }} -->
  </div>
</template>

<script>
import StepProgress from "@/components/MultiForm/StepProgress.vue";
import FormCard from "@/components/MultiForm/FormCard.vue";
import { stepForm } from "@/components/MultiForm/form";
export default {
  data() {
    return {
      stepForm,
    };
  },
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
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
  width: 500px;
  height: 88px;
}
</style>

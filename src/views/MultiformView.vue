<template>
  <div class="mutiform-layout">
    <DynamicForm
      :currentStep="currentStep"
      @handleBtn="handleBtn"
      @handleBackBtn="handleBackBtn"
    />
  </div>
</template>

<script>
import DynamicForm from "@/components/MultiForm/DynamicForm.vue";
import { stepForm } from "@/components/MultiForm/form";

export default {
  data() {
    return {
      stepForm,
      currentStep: 1,
    };
  },
  methods: {
    handleBtn() {
      this.currentStep++;
      this.stepForm[this.currentStep - 1].isActive = true;
    },
    handleBackBtn() {
      this.currentStep--;
      this.stepForm[this.currentStep].isActive = false;
    },
  },
  components: {
    DynamicForm,
  },
};
</script>

<style>
</style>
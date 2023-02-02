<template>
  <div class="mutiform-layout">
    <DynamicForm
      :currentStep="currentStep"
      @handleProgress="nextProgress"
      @handleNextBtn="handleNextBtn"
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
      currentStep: 0,
    };
  },
  methods: {
    handleNextBtn() {
      this.currentStep++;
      this.stepForm[this.currentStep].isActive = true;
    },
    handleBackBtn() {
      this.currentStep--;
      this.stepForm[this.currentStep + 1].isActive = false;
    },
    nextProgress(index) {
      // this.stepForm[index];
      console.log(index);
    },
  },
  components: {
    DynamicForm,
  },
};
</script>

<style>
</style>
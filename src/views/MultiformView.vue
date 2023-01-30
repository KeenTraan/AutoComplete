<template>
  <div class="mutiform-layout">
    <DynamicForm
      :currentStep="currentStep"
      @handleBtn="handleBtn"
      :isDisabled="isDisabled"
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
      isDisabled: true,
    };
  },
  methods: {
    handleBtn() {
      if (this.currentStep > 2) {
        this.isDisabled = false;
      } else {
        this.currentStep++;
        this.stepForm[this.currentStep - 1].isActive = true;
      }
    },
  },
  components: {
    DynamicForm,
  },
};
</script>

<style>
</style>
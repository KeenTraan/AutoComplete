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
export default {
  data() {
    return {
      currentStep: 1,
      isDisabled: true,
    };
  },
  methods: {
    handleBtn() {
      if (this.currentStep === 2) {
        this.isDisabled = false;
      }
      this.currentStep++;
    },
  },
  components: {
    DynamicForm,
  },
};
</script>

<style>
</style>
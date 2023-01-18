<template>
  <div class="mutiform-layout">
    <DynamicForm :currentStep="currentStep" />
  </div>
</template>

<script>
import DynamicForm from "@/components/MultiForm/DynamicForm.vue";
export default {
  data() {
    return {
      currentStep: 1,
    };
  },
  components: {
    DynamicForm,
  },
};
</script>

<style>
</style>
<template>
  <div class="mutiform-layout">
    <DynamicForm :currentStep="currentStep"  @handleBtn="handleBtn"/>
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
  methods: {
    handleBtn() {
      this.currentStep ++;
    }
  },
  components: {
    DynamicForm,
  },
};
</script>

<style>
</style>
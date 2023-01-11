<template>
  <div class="multiform-layout">
    <FirstformComponent :dynamicForm="dynamicForm"/>
    <DynamicForm :dynamicForm="dynamicForm"/>
  </div>
</template>

<script>
import FirstformComponent from "@/components/Multiform/FirtformComponent.vue";
import { dynamicForm } from "@/components/Multiform/dynamicForm";
export default {
  name: "MultiformComponent",
  data() {
    return {
      dynamicForm
    }
  },
  components: {
    FirstformComponent,
  },
};
</script>

<style scoped lang="scss">
</style>

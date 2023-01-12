<template>
  <div class="mutiform-layout">
      <Navbar />
      <DynamicForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import DynamicForm from "@/components/MultiForm/DynamicForm.vue";
export default {
components: {
    Navbar,
    DynamicForm
}
}
</script>

<style scoped lang="scss">
.mutiform-layout {
    display: flex;
}
</style>>
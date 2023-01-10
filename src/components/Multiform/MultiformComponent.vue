<template>
  <div class="multiform-layout">
    <FirstformComponent />
  </div>
</template>

<script>
import FirstformComponent from "@/components/Multiform/FirtformComponent";
export default {
  name: "MultiformComponent",
  components: {
    FirstformComponent,
  },
};
</script>

<style scoped lang="scss">
.multiform-layout {
  border: 1px solid red;
  width: 100%;
}
</style>

<template>
  <div class="user-view">
    <Navbar />
    <UsersComponent />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import UsersComponent from "@/components/UsersComponent.vue";
export default {
  components: {
    UsersComponent,
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.user-view {
  display: flex;
}
</style>
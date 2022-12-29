<template>
  <div class="dropzone-layout">
    <Navbar />
    <DropzoneComponent />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
export default {
  components: {
    Navbar,
    DropzoneComponent,
  },
};
</script>

<style lang="scss" scoped>
.dropzone-layout {
  display: flex;
}
</style>

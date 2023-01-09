<template>
  <div class="dropzone-layout">
    <Navbar />
    <DropzoneComponent :maxSize="maxSize" :limitedFile="limitedFile" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
export default {
  data() {
    return {
      maxSize: 1024 * 1024 * 10,
      limitedFile: 3,
    };
  },
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

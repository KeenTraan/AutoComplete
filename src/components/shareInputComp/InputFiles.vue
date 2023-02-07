<template>
  <div class="dropzone-layout">
    <Dropzone :limitedFile="5" :maxSize="maxSize" />
  </div>
</template>

<script>
import Dropzone from "@/components/Dropzone/DropzoneComponent.vue";
import { MAXSIZE } from "@/constant/Dropzone";
export default {
  data() {
    return {
      maxSize: MAXSIZE,
    };
  },
  props: {
    required: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Dropzone,
  },
};
</script>

<style scoped lang="scss">
.dropzone-layout {
  width: 844px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
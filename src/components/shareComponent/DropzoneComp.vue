<template>
  <div class="dropzone-layout">
    <div>
      <p class="input-label">{{ form.label }}</p>
      <DropzoneComponent :limitedFile="3" :maxSize="maxsize" />
    </div>
  </div>
</template>

<script>
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
import { MAXSIZE } from "@/constant/Dropzone";
export default {
  data() {
    return {
      maxsize: MAXSIZE,
    };
  },
  components: {
    DropzoneComponent,
  },
  props: {
    form: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.dropzone-layout {
  width: 844px;
  margin-top: 24px;
  .input-label {
    margin-bottom: 8px;
  }
}
</style>
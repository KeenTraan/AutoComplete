<template>
  <div class="dropzone-layout">
    <Dropzone
      :limitedFile="5"
      :maxSize="maxSize"
      @dropFiles="handleDropFiles"
    />
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
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Dropzone,
  },
  methods: {
    handleDropFiles(newDataFile) {
      this.$emit("dropFiles", { value: newDataFile, id: this.id });
    },
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
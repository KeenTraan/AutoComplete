<template>
  <div class="dropzone-layout">
    <CheckrequireComp v-if="required" />
    <DropzoneComponent :limitedFile="3" :maxSize="maxsize" />
  </div>
</template>

<script>
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
import { MAXSIZE } from "@/constant/Dropzone";
import CheckrequireComp from "./CheckrequireComp.vue";
export default {
  data() {
    return {
      maxsize: MAXSIZE,
    };
  },
  components: {
    DropzoneComponent,
    CheckrequireComp,
  },
  props: {
    form: {
      type: Object,
      default: () => {},
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="scss">
.dropzone-layout {
  width: 844px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
<template>
  <div class="dropzone-layout">
    <DropzoneComponent
      :limitedFile="limitedFile"
      :maxSize="maxSize"
      :show="show"
      @uploadFile="uploadFile"
    />
  </div>
</template>

<script>
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
import { storage } from "@/configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { MAXSIZE } from "@/constant/Dropzone";
export default {
  data() {
    return {
      maxSize: MAXSIZE,
      limitedFile: 3,
      show: true,
    };
  },
  components: {
    DropzoneComponent,
  },
  methods: {
    uploadFile(fileList) {
      let files = fileList;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let storageRef = ref(storage, "Files/" + file.name);
        uploadBytes(storageRef, file);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.dropzone-layout {
  padding-top: 20px;
  width: 844px;
  height: 192px;
}
</style>

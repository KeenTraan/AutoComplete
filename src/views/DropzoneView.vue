<template>
  <div class="dropzone-layout">
    <DropzoneComponent :limitedFile="limitedFile" :maxSize="maxSize" @uploadFile="uploadFile"/>
  </div>
</template>

<script>
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
import { storage } from "@/configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
export default {
  data() {
    return {
      maxSize: 10000000,
      limitedFile: 3,
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
        uploadBytes(storageRef, file)
      }
    }
  }
};
</script>

<style>
</style>

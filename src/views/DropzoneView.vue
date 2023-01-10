<template>
  <div class="dropzone-layout">
    <Navbar />
    <DropzoneComponent :maxSize="maxSize" :limitedFile="limitedFile" @uploadFile="uploadFile"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
import { storage } from "@/configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
export default {
  data() {
    return {
      // maxSize: 1024 * 1024 * 10,
      maxSize: 10000000,
      limitedFile: 3,
    };
  },
  components: {
    Navbar,
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

<style lang="scss" scoped>
.dropzone-layout {
  display: flex;
}
</style>

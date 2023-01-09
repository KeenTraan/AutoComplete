<template>
  <div>
    <button class="btn-upload" @click="onUploadFile">Upload</button>
  </div>
</template>

<script>
import { storage } from "@/configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
export default {
  props: {
    fileList: {
        type: Array,
        default: () => []
    }
  },
  methods: {
    onUploadFile() {
      let files = this.fileList;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let storageRef = ref(storage, "Files/" + file.name);
        uploadBytes(storageRef, file)
      }
      this.$emit("uploadFile", files);
    },
  },
};
</script>

<style scoped lang="scss">
.btn-upload {
  margin-top: 10px;
  border: none;
  width: 80px;
  height: 40px;
  font-size: 14px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
}
.btn-upload:hover {
  color: green;
}
</style>
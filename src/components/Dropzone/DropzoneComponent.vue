<template>
  <div class="drop-zone">
    <InputComponent
      @addFile="addNewFile"
      :class="{ 'error-vali': valid, 'success-vali': success }"
    />
    <div class="error-message">
      {{ errorMessage }}
    </div>
    <div class="success-message">
      {{ successMessage }}
    </div>
    <FileList :fileList="fileList" @deleteFile="deleteFile" />
    <button v-if="!isHiden" class="btn-upload" @click="uploadFile">
      Upload
    </button>
  </div>
</template>

<script>
import { MESSAGE, LIMITED_FILE, MAX_SIZE } from "@/constant/Dopzone";
import { storage } from "@/configs/firebase";
import { ref, uploadBytes } from "firebase/storage";
import FileList from "@/components/Dropzone/FileListComponent.vue";
import InputComponent from "./InputComponent.vue";
export default {
  data() {
    return {
      fileList: [],
      limitedFile: LIMITED_FILE,
      isValid: true,
      errorMessage: "",
      successMessage: "",
    };
  },
  components: {
    FileList,
    InputComponent,
  },
  methods: {
    addNewFile(dataFile) {
      const newDataFile = [...this.fileList, ...dataFile];
      this.isValid = true;
      this.errorMessage = "";
      newDataFile.forEach((item) => {
        if (item.size / 1024 > MAX_SIZE) {
          this.isValid = false;
          this.errorMessage = MESSAGE.SIZE_ERROR;
        }
      });
      if (newDataFile.length > this.limitedFile) {
        this.isValid = false;
        this.errorMessage = MESSAGE.LIMITED_ERROR;
      }
      if (this.isValid) {
        this.fileList = newDataFile;
      }
      setTimeout(() => (this.errorMessage = ""), 2000);
    },
    deleteFile(index) {
      // this.fileList = this.fileList.filter((file) => {
      //   return file.lastModified !== lastModified;
      // });
      this.fileList.splice(this.fileList.indexOf(index), 1);
    },
    uploadFile() {
      let files = this.fileList;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let storageRef = ref(storage, "Files/" + file.name);
        uploadBytes(storageRef, file)
          .then(() => {
            this.successMessage = MESSAGE.SUCCESSFULLY;
          })
          .catch((error) => {
            console.log(error);
          });
        this.fileList = [];
        setTimeout(() => (this.successMessage = ""), 2000);
      }
    },
  },
  computed: {
    valid() {
      return this.errorMessage.length > 0;
    },
    success() {
      return this.successMessage.length > 0;
    },
    isHiden() {
      return this.fileList.length === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-zone {
  margin-top: 10px;
}
.error-message {
  color: red;
  margin-top: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.success-message {
  color: green;
  margin-top: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.error-vali {
  border: 1px solid red;
  border-radius: 7px;
}
.success-vali {
  border-radius: 7px;
  border: 1px solid green;
}
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

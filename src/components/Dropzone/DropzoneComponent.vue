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
    <UploadFileComponent
      v-if="!isHiden"
      :fileList="fileList"
      @uploadFile="submitFile"
    />
  </div>
</template>

<script>
import { MESSAGE, LIMITED_FILE, MAX_SIZE } from "@/constant/Dropzone";
import FileList from "@/components/Dropzone/FileListComponent.vue";
import InputComponent from "./InputComponent.vue";
import UploadFileComponent from "./UploadFileComponent.vue";
import formatBytes from "@/utils/FormatFileSize";
export default {
  data() {
    return {
      fileList: [],
      isValid: true,
      errorMessage: "",
      successMessage: "",
    };
  },
  components: {
    FileList,
    InputComponent,
    UploadFileComponent,
  },
  props: {
    maxSize: {
      type: Number,
      default: MAX_SIZE,
    },
    limitedFile: {
      type: Number,
      default: LIMITED_FILE,
    },
  },
  methods: {
    addNewFile(dataFile) {
      const newDataFile = [...this.fileList, ...dataFile];
      const isDuplicate = this.fileList.find((item) => item.lastModified === dataFile[0].lastModified);
      this.isValid = true;
      this.errorMessage = "";
      this.successMessage = "";
      newDataFile.forEach((item) => {
        if (item.size > this.maxSize) {
          this.isValid = false;
          this.errorMessage = MESSAGE.SIZE_ERROR + formatBytes(this.maxSize);
        }
      });
      if(isDuplicate && this.fileList.length !== 0) {
        this.isValid = false;
        this.errorMessage = MESSAGE.DUPLICATE_ERROR;
      }
      if (newDataFile.length > this.limitedFile) {
        this.isValid = false;
        this.errorMessage = MESSAGE.LIMITED_ERROR + this.limitedFile;
      }
      if (this.isValid) {
        this.fileList = newDataFile;
      }
    },

    deleteFile(lastModified) {
      this.fileList = this.fileList.filter((file) => {
        return file.lastModified !== lastModified;
      });
      // this.fileList.splice(this.fileList.indexOf(index), 1);
      this.errorMessage = "";
    },
    submitFile(files) {
      this.fileList = files;
      this.successMessage = MESSAGE.SUCCESSFULLY;
      this.errorMessage = "";
      this.fileList = [];
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
</style>

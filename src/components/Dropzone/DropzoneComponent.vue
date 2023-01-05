<template>
  <div>
    <div
      class="dropzone"
      :class="{ 'error-vali': valid }"
      @dragover="dragFiles"
      @dragleave="dragLeave"
      @drop="dropFiles"
    >
      <label for="input-file" class="label-input">
        <img src="@/assets/icons/upload 2.png" alt="#" class="upload-icon" />
        <h3 v-if="isDragging">Drop files here</h3>
        <h3 v-else>Drag and drop files</h3>
        <p class="input-add-file">Browser files</p>
      </label>
      <input
        type="file"
        id="input-file"
        @change="addNewFile"
        ref="file"
        multiple
      />
    </div>
    <div class="error-message">
      {{ errorMessage }}
    </div>
    <FileList 
      :fileList="fileList"
      @deleteFile="deleteFile" 
     />
     <button class="btn-upload" @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import { ERROR_MESSAGE, LIMITED_FILE, MAX_SIZE} from "@/constant/Dopzone";
import FileList from "@/components/Dropzone/FileListComponent.vue";
export default {
  data() {
    return {
      fileList: [],
      limitedFile: LIMITED_FILE,
      isValid: true,
      isDragging: false,
      isDuplicate: true,
      errorMessage: "",
    };
  },
  components: {
    FileList,
  },
  methods: {
    addNewFile() {
      const dataFile = this.$refs.file.files;
      const newFileList = Array.from(dataFile);
      const newDataFile = [...this.fileList, ...newFileList];
      this.isValid = true;
      this.errorMessage = "";
      newDataFile.forEach((item) => {
        if (item.size / 1024 > MAX_SIZE) {
          this.isValid = false;
          this.errorMessage = ERROR_MESSAGE.SIZE_ERROR;
        }
      });

      if (newDataFile.length > this.limitedFile) {
        this.isValid = false;
        this.errorMessage = ERROR_MESSAGE.LIMITED_ERROR;
      }
      if (this.isValid) {
        this.fileList = newDataFile;
      }
    },
    dragFiles(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragLeave() {
      this.isDragging = false;
    },
    dropFiles(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.addNewFile();
      this.isDragging = false;
    },
    deleteFile(lastModified) {
      this.fileList = this.fileList.filter((file) => {
        return file.lastModified !== lastModified;
      });
    },
    uploadFile() {
      console.log("let do dit");
    }
  },
  computed: {
    valid() {
      return this.errorMessage.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  margin-top: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  width: 842px;
  height: 232px;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  justify-content: center;
  .label-input {
    cursor: pointer;
  }
  .upload-icon {
    margin-bottom: 13px;
  }
  .input-add-file {
    text-decoration: underline gray;
  }
  #input-file {
    display: none;
  }
}
.label-input:hover {
  color: green;
}
.error-message {
  color: red;
  margin-top: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.error-vali {
  border: 1px solid red;
}
.btn-upload {
  margin-top: 10px;
  border: 1px solid;
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

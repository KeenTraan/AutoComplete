<template>
  <div>
    <div
      class="add-file"
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
        @change="onChange"
        ref="file"
        multiple
      />
    </div>
    <div class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import { MAX_SIZE, NUMBER_BYTES } from "@/constant/Dopzone";
export default {
  name: "add-file",
  data() {
    return {
      isValid: true,
      isDragging: false,
      errorMessage: "",
    };
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    valid() {
      return this.errorMessage.length > 0;
    },
  },
  methods: {
    onChange() {
      const dataFile = this.$refs.file.files;
      const newFileList = Array.from(dataFile);
      this.isValid = true;
      this.errorMessage = "";
      newFileList.forEach((item) => {
        if (item.size / NUMBER_BYTES > MAX_SIZE) {
          this.isValid = false;
          this.errorMessage = "File size must be less than 10MB";
        }
      });
      if (this.isValid) {
        this.$emit("addFile", newFileList);
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
      this.onChange();
      this.isDragging = false;
    },
  },
};
</script>

<style scoped lang="scss">
.add-file {
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
.error-vali {
  border: 1px solid red;
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
</style>

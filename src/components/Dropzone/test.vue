<template>
  <div>
    <div
      class="dropzone"
      :class="{ 'error-vali': valid, 'success-vali': success }"
      @dragover.prevent
      @drop.prevent="dropFiles"
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
        @change="dropFiles"
        ref="file"
        multiple
      />
    </div>
    <div class="error-message">
      {{ errorMessage }}
    </div>
    <div class="success-message">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataFile: null,
      isValid: true,
      errorMessage: "",
      successMessage: "",
      limitedFile: LIMITED_FILE,
    };
  },
  methods: {
    dropFiles(e) {
      this.dataFile = e.dataTransfer.files;
      this.isValid = true;
      this.errorMessage = "";
      this.dataFile.forEach((item) => {
        if (item.size / 1024 > MAX_SIZE) {
          this.isValid = false;
          this.errorMessage = MESSAGE.SIZE_ERROR;
        }
      });
      if (this.dataFile.length > this.limitedFile) {
        this.isValid = false;
        this.errorMessage = MESSAGE.LIMITED_ERROR;
      }
      this.successMessage = "";
      const newFileList = Array.from(this.dataFile);
      this.$emit("addFile", newFileList);
    },
  },
};
</script>

<style>
</style>
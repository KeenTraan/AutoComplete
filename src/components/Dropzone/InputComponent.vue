<template>
  <div>
    <label
      for="input-file"
      class="input-label"
      @dragover="dragFiles"
      @dragleave="dragLeave"
      @drop="dropFiles"
    >
      <img src="@/assets/icons/upload 2.png" alt="#" class="upload-icon" />
      <h3>Drag and drop files</h3>
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
</template>

<script>
export default {
  data() {
    return {
      dataFile: null,
      isDragging: false,
    };
  },
  methods: {
    onChange() {
      this.dataFile = this.$refs.file.files;
      const newFileList = Array.from(this.dataFile);
      this.$refs.file.value = [];
      this.$emit("addFile", newFileList);
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
.input-label {
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  // width: 842px;
  height: 232px;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  justify-content: center;
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

.input-label:hover {
  color: green;
}
</style>
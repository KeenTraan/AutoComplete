<template>
    <div class="add-file" @dragover="dragFiles" @dragleave="dragLeave" @drop="dropFiles">
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
</template>

<script>
export default {
  name: "add-file",
  data() {
    return {
      isDragging: false,
    }
  },
  props: {
    files:{
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChange() {
      const dataFile = this.$refs.file.files[0]
      if (dataFile) {
        this.$emit("addFile", dataFile);
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
.add-file:hover {
  color: green;
}
</style>

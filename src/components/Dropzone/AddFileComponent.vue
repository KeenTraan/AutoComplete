<template>
  <label for="input-file" class="add-file">
    <img src="@/assets/icons/upload 2.png" alt="#" class="upload-icon" />
    <h3>Drag and drop files</h3>
    <p class="input-add-file">Browser files</p>
    <input type="file" id="input-file" @change="handledata" multiple />
  </label>
</template>

<script>
export default {
  name: "add-file",
  methods: {
    handledata(e) {
      const dataFile = e.target.files[0];
      if(dataFile) {
        this.$emit("addFile", dataFile);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-file {
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
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

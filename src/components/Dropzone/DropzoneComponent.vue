<template>
  <div>
    <div class="dropzone">
      <AddFile :fileList="fileList" @addFile="addNewFile" />
    </div>
    <FileList :fileList="fileList" @handleDelete="deleteFile" />
  </div>
</template>

<script>
import AddFile from "@/components/Dropzone/AddFileComponent.vue";
import FileList from "@/components/Dropzone/FileListComponent.vue";
export default {
  data() {
    return {
      fileList: [],
      maximumFile: 3,
    };
  },
  components: {
    AddFile,
    FileList,
  },
  methods: {
    addNewFile(dataFile) {
      let newDataFile = [...this.fileList, ...dataFile];
      if (newDataFile.length > this.maximumFile) {
        console.log('hehe');
      } else {
        this.fileList = newDataFile;
      }
    },
    deleteFile(lastModify) {
      this.fileList = this.fileList.filter((file) => {
        return file.lastModified !== lastModify;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  margin-top: 10px;
}
</style>

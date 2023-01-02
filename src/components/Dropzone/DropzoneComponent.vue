<template>
  <div>
    <div class="dropzone">
      <AddFile
        :files="fileList"
        @addFile="addNewFile"
      />
    </div>
    <FileList 
    :fileList="fileList" 
    @handleDelete="deleteFile" 
    />
  </div>
</template>

<script>
import AddFile from "@/components/Dropzone/AddFileComponent.vue";
import FileList from "@/components/Dropzone/FileListComponent.vue";
export default {
  data() {
    return {
      fileList: [],
    };
  },
  components: {
    AddFile,
    FileList,
  },
  methods: {
    addNewFile(dataFile) {
      console.log(this.fileList);
      return this.fileList.push(dataFile);
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

<template>
  <div>
    <div class="dropzone">
      <AddFile @addFile="addNewFile" />
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
    };
  },
  components: {
    AddFile,
    FileList,
  },
  watch: {
      fileList(val) {
        this.fileList = val;
        console.log(this.fileList)
      },
  },  
  methods: {
    addNewFile(dataFile) {
      console.log(dataFile);
      this.fileList.map((item) => {
        // if(!item.lastModified) {
        //   // return item.push(dataFile);
        // }
        console.log(item)
      })
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
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  width: 842px;
  height: 232px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

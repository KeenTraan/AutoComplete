<template>
  <div>
    <div class="dropzone">
      <AddFile 
        @addFile="addNewFile"
      />
    </div>
    <FileList 
      :fileList="fileList"
    />
    <!-- {{ fileList }} -->
  </div>
</template>

<script>
import AddFile from "@/components/Dropzone/AddFileComponent.vue";
import FileList from "@/components/Dropzone/FileListComponent.vue"
export default {
  data() {
    return {
      fileList: [
        // {id: 1, name: "fileOne", type: "img"},
        // {id: 2, name: "fileTwo", type: "img"},
        // {id: 3, name: "fileThree", type: "img"}
      ] 
    }
  },
  components: {
    AddFile,
    FileList
  },
  methods: {
    addNewFile(data) {
      console.log(this.fileList)
      return this.fileList.push(data)
    }
  }
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

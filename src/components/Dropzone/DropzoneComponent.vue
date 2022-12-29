<template>
  <div>
    <div class="dropzone">
      <AddFile 
        @addfile="addNewFile"
      />
    </div>
    <FileList 
      :fileList="fileList"
    />
  </div>
</template>

<script>
import AddFile from "@/components/Dropzone/AddFileComponent.vue";
import FileList from "@/components/Dropzone/FileListComponent.vue"
export default {
  data() {
    return {
      fileList: [] 
    }
  },
  components: {
    AddFile,
    FileList
  },
  methods: {
    addNewFile(file) {
      console.log(file)
      return this.fileList.push(file)
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

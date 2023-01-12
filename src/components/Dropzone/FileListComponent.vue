<template>
    <div class="files-layout">
      <FileItemComponentVue
        v-for="file in fileList"
        :key="file.lastModified "
        :fileItem="file"
        @handleOnClick="onDelete"
      />
    </div>
</template>

<script>
import FileItemComponentVue from "./FileItemComponent.vue";
export default {
  props: {
    fileList: {
      type: Array,
      required: true,
    },
  },
  components: {
    FileItemComponentVue,
  },
  methods: {
    onDelete(lastModified) {
      this.$emit("deleteFile", lastModified);
    },
  },
};
</script>

<style lang="scss" scoped>
.files-layout {
  width: 842px;
  display: flex;
  gap: 17px;
  margin-top: 33px;
  // border: 1px solid green;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: scroll;
}
.files-layout::-webkit-scrollbar {
  height: 5px;
}
.files-layout::-webkit-scrollbar-thumb {
  border-radius: 100rem;
  background-color: rgb(141, 141, 141, 0.5);
}
.files-layout::-webkit-scrollbar-track {
  border-radius: 100rem;
  background-color: white;
}
</style>
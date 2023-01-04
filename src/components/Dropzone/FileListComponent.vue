<template>
  <div class="file-layout">
    <div v-for="file in fileList" :key="file.lastModified" class="file-list">
      <div class="file">
        <img src="@/assets/card/empty.png" alt="#" class="card-icon"/>
        <div class="text-file">
          <p class="file-name">{{ file.name.toLowerCase() }}</p>
          <p class="file-size">{{ formatBytes(file.size) }}</p>
        </div>
        <img
          src="@/assets/icons/close-circle.png"
          alt="#"
          class="delete-icon"
          @click="handleClick(file.lastModified)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import formatBytes from "@/utils/FormatFileSize";
import { TYPE_FILE } from "@/constant/Dopzone";
export default {
  data() {
    return {
      formatBytes,
      TYPE_FILE: TYPE_FILE
    };
  },
  props: {
    fileList: {
      type: Array,
      require: true,
    },
  },
  methods: {
    handleClick(lastModified) {
      const lastModify = lastModified;
      this.$emit("handleDelete", lastModify);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-layout {
  width: 842px;
  display: flex;
  gap: 17px;
  margin-top: 33px;
  // border: 1px solid green;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: scroll;
  .file-list {
    background: #ffffff;
    // width: 244px;
    // height: 48px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    display: flex;
  }
  .file {
    width: 244px;
    height: 48px;
    display: flex;
    align-items: center;
    padding-right: 8px;
    // border: 1px solid blue;
    .card-icon {
      width: 32px;
      height: 32px;
      margin: 8px;
    }
    .text-file {
      width: 125px;
      display: flex;
      flex-direction: column;
      // border: 1px solid red;
      .file-name {
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .file-size {
        display: flex;
        justify-items: center;
        width: 85px;
        height: 16px;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
      }
    }
    .delete-icon {
      cursor: pointer;
      width: 16px;
      height: 16px;
      margin-left: 40px;
    }
  }
}
.file-layout::-webkit-scrollbar {
  height: 5px;
}
.file-layout::-webkit-scrollbar-thumb {
  border-radius: 100rem;
  background-color: rgb(141, 141, 141, 0.5);
}
.file-layout::-webkit-scrollbar-track {
  border-radius: 100rem;
  background-color: white;
}
</style>
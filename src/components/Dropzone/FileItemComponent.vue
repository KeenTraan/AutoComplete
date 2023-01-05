<template>
  <div class="file-item">
    <img class="card-icon" src="@/assets/card/empty.png" alt="" />
    <div class="file-content">
      <p class="file-name">{{ fileItem.name.toLowerCase() }}</p>
      <p class="file-size">{{ formatBytes(fileItem.size) }}</p>
    </div>
    <img
      class="delete-icon"
      src="@/assets//icons/close-circle.png"
      alt="#"
      @click="handleClick(fileItem.lastModified)"
    />
  </div>
</template>

<script>
import { TYPE_FILE } from "@/constant/Dopzone";
import formatBytes from "@/utils/FormatFileSize";
export default {
  name: "FileItemComponentVue",
  data() {
    return {
      TYPE_FILE: TYPE_FILE,
      formatBytes,
    };
  },
  props: {
    fileItem: {
      type: [Object, File],
      default: () => {},
    },
  },
  methods: {
    handleClick(lastModified) {
      this.$emit("handleOnClick", lastModified);
    },
  },
};
</script>

<style scoped lang="scss">
.file-item {
  display: flex;
  align-items: center;
  width: 244px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  padding: 8px;
  .file-name {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    width: 125px;
    height: 16px;
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .file-size {
    width: 85px;
    height: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  }
  .card-icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    // padding: 4px;
  }
  .delete-icon {
    display: flex;
    margin: 0 16px 0 47px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>
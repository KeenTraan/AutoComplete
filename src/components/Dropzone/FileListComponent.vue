<template>
  <div class="file-layout">
    <div v-for="file in fileList" :key="file.lastModified" class="file-list">
      <div class="file">
        <img src="@/assets/card/excel.png" alt="#" class="card-icon" />
        <div class="text-file">
          <p class="file-name">{{ file.name.toLowerCase() }}</p>
          <p class="file-size">kb</p>
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
export default {
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
  width: 244px;
  height: 48px;
  display: flex;
  gap: 17px;
  margin-top: 33px;
  .file-list {
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
  }
  .file {
    display: flex;
    align-items: center;
    padding: 8px 17px 7px 12px;
    .card-icon {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
    .text-file {
      width: 150px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .file-name {
        height: 16px;
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
    }
  }
}
</style>
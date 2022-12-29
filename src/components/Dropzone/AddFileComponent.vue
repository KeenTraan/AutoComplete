<template>
  <div class="add-file">
    <strong>Drag and drop file</strong>
    <input class="input-add-file" type="file">
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.add-file {
  display: flex;
  // align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  .input-add-file {
    border: none;
    background-color: none;
  }
}
</style>

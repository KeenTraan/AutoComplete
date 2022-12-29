<template>
  <div class="add-file">
    <h3>Drag and drop file</h3>
    <label for="input-file" class="input-add-file">Browser file</label>
    <input type="file" id="input-file" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.add-file {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-family: "Noto Sans";
  font-style: normal;
  // font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  .input-add-file {
    text-decoration: underline;
    cursor: pointer;
  }
  #input-file {
    display: none;
  }
}
</style>

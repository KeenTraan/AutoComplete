<template>
  <div class="dropzone">
    <AddFile />
  </div>
</template>

<script>
import AddFile from "@/components/Dropzone/AddFileComponent.vue";
export default {
  components: {
    AddFile,
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  border: 1px solid red;
  width: 842px;
  height: 232px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

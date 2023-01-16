<template>
  <div class="dropzone-layout">
    <div>
      <p class="input-label">{{ form.label }}</p>
      <InputComponent />
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/Dropzone/InputComponent.vue";
export default {
  components: {
    InputComponent,
  },
  props: {
    form: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.dropzone-layout {
  width: 844px;
  height: 216px;
  margin-top: 24px;
  .input-label {
    margin-bottom: 8px;
  }
}
</style>
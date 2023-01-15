<template>
  <div class="form-card-layout">
    <InputFiedComp
      :currentForm="currentForm.layout"
    />
    <InputdateComp
      :currentForm="currentForm.layout"
    />
  </div>
</template>

<script>
import InputFiedComp from "@/components/shareComponent/InputFieldComp.vue";
import InputdateComp from "@/components/shareComponent/InputDateComp.vue";
export default {
  props: {
    currentForm: {
      type: Object,
    },
  },
  components: {
    InputFiedComp,
    InputdateComp,
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.form-card-layout {
  width: 926px;
  height: 849px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 24px;
  gap: 10px;
}
</style>

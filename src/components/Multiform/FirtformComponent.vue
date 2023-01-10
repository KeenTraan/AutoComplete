<template>
  <div>
    <p class="text-form">Đơn Ứng Tuyển</p>
    <PassingInputComponent />
  </div>
</template>

<script>
import PassingInputComponent from "@/components/Multiform/components/PassingInputComponent.vue";
export default {
  name: "FirstformComponent",
  components: {
    PassingInputComponent,
  },
};
</script>

<style scoped lang="scss">
.text-form {
  width: 164px;
  height: 36px;
  color: #333333;
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
}
</style>

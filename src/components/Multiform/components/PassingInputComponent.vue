<template>
  <div class="passing-input">
    <div v-for="step in stepForm" :key="step.id" class="step-form">
      <p class="step-btn">{{ step.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassingInputComponent",
  data() {
    return {
      stepForm: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.passing-input {
  display: flex;
  .step-form {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DBDBDB;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: #FFFFFF;
    padding: 6px;
    margin: 18px 78px 14px 14px;
  }
}
</style>

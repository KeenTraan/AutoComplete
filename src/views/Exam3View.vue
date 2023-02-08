<template>
  <div class="multiform-layout">
    <div class="form-header">
      <StepProgress
        :data="stepForm"
        :currenStep="currentStep"
        @handleStep="handleStep"
      />
    </div>
    <div class="form-body">
      <DynamicForm :data="dataForm.layout" />
    </div>
    <button
      class="btn-next"
      v-show="currentStep >= 1 && currentStep < 3"
      @click="handleNext"
    >
      Next
    </button>
    <button
      class="btn-back"
      @click="handleBack"
      v-show="currentStep > 1 && currentStep < 3"
    >
      Back
    </button>
    <button class="btn-submit" @click="handleSubmit" v-show="currentStep === 3">
      Submit
    </button>
  </div>
</template>

<script>
import { stepForm } from "@/components/ex3-multiform/form";
import StepProgress from "@/components/ex3-multiform/StepProgress.vue";
import DynamicForm from "@/components/ex3-multiform/DynamicForm.vue";
export default {
  data() {
    return {
      stepForm,
      currentStep: 1,
    };
  },
  components: { StepProgress, DynamicForm },
  computed: {
    dataForm() {
      return this.stepForm.find((item) => item.step === this.currentStep);
    },
  },
  methods: {
    validate() {
      let isValid = false;
      const data = this.dataForm.layout;
      data.forEach((item) => {
        if (item.value.length > item.maxLength) {
          item.err = `${item.label} phải nhỏ hơn ${item.maxLength} kí tự`;
          isValid = true;
        }
        if (item.required) {
          if (!item.value) {
            // console.log("active here");
            item.err = `${item.label} không được để trống`;
            isValid = true;
          }
        }
      });
      return isValid;
    },
    handleNext() {
      // console.log("active");
      if (!this.validate()) {
        this.currentStep++;
        this.stepForm[this.currentStep - 1].isActive = true;
      }
    },
    handleBack() {
      this.currentStep--;
      this.stepForm[this.currentStep].isActive = false;
      this.validate();
    },
    handleSubmit() {
      alert("Hoan thanh");
    },
    handleStep(step) {
      this.currentStep = step;
      this.stepForm[this.currentStep - 1].isActive = true;
    },
  },
};
</script>

<style scoped lang="scss">
.multiform-layout {
  .form-header {
    width: 528px;
  }
  .form-body {
    width: max-content;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 32px 24px;
    margin-bottom: 24px;
  }
  .btn-next {
    cursor: pointer;
    width: 102px;
    height: 40px;
    margin-right: 10px;
    background-color: #617d98;
    border: none;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    color: white;
  }
  .btn-back {
    cursor: pointer;
    width: 102px;
    height: 40px;
    background-color: #dcdcdc;
    border: none;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    color: white;
  }
  .btn-submit {
    cursor: pointer;
    width: 102px;
    height: 40px;
    margin-right: 10px;
    background-color: #617d98;
    border: none;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    color: white;
  }
}
</style>
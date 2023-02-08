<template>
  <div class="multiform-layout">
    <div class="form-header">
      <StepProgress
        :data="stepForm"
        :currenStep="currentStep"
        @handleStep="handleNext"
      />
    </div>
    <div class="form-body">
      <DynamicForm :data="dataForm.layout" />
    </div>
    <div class="btn-add" v-show="currentStep === 2">
      <img src="@/assets/icons/Plus.png" alt="" />
      <button class="btn-add-item">Thêm Công Ty</button>
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
            item.err = `${item.label} không được để trống`;
            isValid = true;
          }
          if (item.value.length > item.maxLength) {
            item.err = `${item.label} phải nhỏ hơn ${item.maxLength} kí tự`;
            isValid = true;
          }
        }
      });
      return isValid;
    },
    handleNext() {
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
  .btn-add {
    cursor: pointer;
    width: 151px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 24px;
    &-item {
      cursor: pointer;
      background: #ffffff;
      border: none;
      color: #48647f;
      font-weight: 400;
      font-size: 16px;
    }
  }
}
</style>
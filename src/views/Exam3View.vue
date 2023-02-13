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
      <DynamicForm
        :data="dataForm.layout"
        :today="today"
        @removeForm="handleRemove"
      />
    </div>
    <div class="btn-add" v-show="currentStep === 2" @click="handleAddItem">
      <img src="@/assets/icons/Plus.png" alt="" />
      <button class="btn-add-item">Thêm Công Ty</button>
    </div>
    <button
      class="btn-next"
      v-show="currentStep >= 1 && currentStep < 3"
      @click="handleNext"
    >
      Tiếp
    </button>
    <button
      class="btn-back"
      @click="handleBack"
      v-show="currentStep > 1 && currentStep < 3"
    >
      Quay Lại
    </button>
    <button class="btn-submit" @click="handleSubmit" v-show="currentStep === 3">
      Hoàn Thành
    </button>
  </div>
</template>

<script>
import { layoutDefault, stepForm } from "@/components/ex3-multiform/form";
import StepProgress from "@/components/ex3-multiform/StepProgress.vue";
import DynamicForm from "@/components/ex3-multiform/DynamicForm.vue";
import { uuidv4 } from "@firebase/util";
export default {
  data() {
    return {
      stepForm,
      layoutDefault,
      currentStep: 1,
      today: new Date().toISOString().split("T")[0],
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
      let filterDate = data.filter((item) => item.key === "range_time");
      for (let i = 0; i < filterDate.length; i++) {
        for (let j = 1; j < filterDate.length; j++) {
          let itemI = filterDate[i];
          let itemJ = filterDate[j];
          if (itemI.value.from && itemJ.value.from !== "" && i < j) {
            if (
              new Date(itemI.value.from) <= new Date(itemJ.value.to) &&
              new Date(itemJ.value.from) <= new Date(itemI.value.to)
            ) {
              itemI.err = "Khoảng thời gian bị trùng nhau vui lòng chọn lại";
              itemJ.err = "Khoảng thời gian bị trùng nhau vui lòng chọn lại";
              isValid = true;
            } else {
              itemI.err = "";
              itemJ.err = "";
            }
          }
        }
      }
      data.forEach((item) => {
        if (item.value.length > item.maxLength) {
          item.err = `${item.label} phải nhỏ hơn ${item.maxLength} kí tự`;
          isValid = true;
        }
        if (item.key === "company") {
          if (!item.value) {
            item.err = "Nhấp chọn tên công ty";
            isValid = true;
          }
        }
        if (item.required) {
          const from = item.value.from;
          const to = item.value.to;
          if (!item.value) {
            item.err = `${item.label} không được để trống`;
            isValid = true;
          }
          if (item.value.length > item.maxLength) {
            item.err = `${item.label} phải nhỏ hơn ${item.maxLength} kí tự`;
            isValid = true;
          }
          if (from >= to) {
            item.err = "thời gian bắt đàu phải nhỏ hơn thời gian kết thúc";
            isValid = true;
          }
          if (from === "" || to === "") {
            item.err = `${item.label} không được để trống`;
            isValid = true;
          }
        }
      });
      this.$nextTick(() => {
        this.scrollToElement();
      });
      return isValid;
    },
    handleRemove(index) {
      this.dataForm.layout.splice(index, 4);
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
    },
    handleSubmit() {
      if (!this.validate()) {
        const exportdata = {};
        this.stepForm.forEach((item) => {
          item.layout.forEach((elements) => {
            exportdata[elements.key] = elements.value;
          });
        });
        console.log(exportdata);
      }
    },
    handleStep(step) {
      if (!this.validate()) {
        this.currentStep = step;
        this.stepForm[this.currentStep - 1].isActive = true;
      }
    },
    handleAddItem() {
      let formSecond = this.stepForm.find((item) => item.step === 2);
      const formLayout = JSON.parse(JSON.stringify(layoutDefault));
      formLayout.forEach((item) => {
        item.id = uuidv4();
        formSecond.layout.push(item);
      });
    },
    scrollToElement() {
      let errorMsgElement = document.querySelector(".err-msg");
      if (errorMsgElement) {
        const inputWrapElement = errorMsgElement.closest(".input-block");
        inputWrapElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
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
    width: 142px;
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
<template>
  <div>
    <div class="form-card-layout">
      <div v-for="form in dataForm.layout" :key="form.id">
        <InputText
          v-if="form.type === 'text'"
          :label="form.label"
          :id="form.key"
          :inputValue="form.value"
          :required="form.required"
          @onChangeInput="onChangeInput"
        />
        <InputdateComp
          v-if="form.type === 'datetime'"
          :label="form.label"
          :inputValue="form.value"
          :id="form.key"
          :required="form.required"
          @onChangeInput="onChangeInput"
        />
        <WorkingTime
          v-if="form.type === 'input_range_time'"
          :label="form.label"
          :id="form.key"
          :inputValue="form.value"
          @handleInput="onChangeInput"
        />
        <SelectComp
          v-if="form.type === 'select'"
          :inputValue="form.value"
          :id="form.key"
          :label="form.label"
          :data="data"
          @handleSelect="onChangeInput"
        />
        <SearchComp
          v-if="form.type === 'input_search'"
          :label="form.label"
          :description="form.description"
        />
        <TextAreaComp
          v-if="form.type === 'textarea'"
          :required="form.required"
          :label="form.label"
          :inputValue="form.value"
          :character="form.wordLimit"
          :id="form.key"
          @onChangeInput="onChangeInput"
        />
        <DropzoneComp :form="form" v-if="form.type === 'input_multi_file'" />
        <SalaryComp
          v-if="form.type === 'salary'"
          :label="form.label"
          :inputValue="form.value"
          :id="form.key"
          :currency="CURRENCY.VND"
        />
      </div>
    </div>
    <AddButtonComp v-if="currentStep === 2" />
  </div>
</template>

<script>
import InputText from "@/components/shareComponent/InputText.vue";
import InputdateComp from "@/components/shareComponent/InputDateComp.vue";
import SearchComp from "../shareComponent/SeachComp.vue";
import SelectComp from "@/components/shareComponent/SelectComp.vue";
import TextAreaComp from "../shareComponent/TextAreaComp.vue";
import DropzoneComp from "../shareComponent/DropzoneComp.vue";
import WorkingTime from "../shareComponent/WorkingTime.vue";
import SalaryComp from "../shareComponent/SalaryComp.vue";
import { CURRENCY } from "@/constant/Form";
import AddButtonComp from "./button/AddButtonComp.vue";
export default {
  data() {
    return {
      CURRENCY: CURRENCY,
    };
  },
  name: "FormCard",
  props: {
    dataForm: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Array,
      default: () => [],
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
  components: {
    InputText,
    InputdateComp,
    SelectComp,
    SearchComp,
    TextAreaComp,
    DropzoneComp,
    WorkingTime,
    SalaryComp,
    AddButtonComp,
  },
  methods: {
    onChangeInput({ value, id }) {
      const data = this.dataForm.layout.find((item) => item.key === id);
      data.value = value;
    },
  },
};
</script>

<style scoped lang="scss">
.form-card-layout {
  width: 926px;
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

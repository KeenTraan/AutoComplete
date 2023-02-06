<template>
  <div>
    <div class="form-card-layout">
      <div v-for="form in dataForm.layout" :key="form.id">
        <InputText
          v-if="form.type === 'text'"
          :label="form.label"
          :name="form.key"
          :maxLength="form.maxLength"
          :inputValue="form.value"
          :required="form.required"
          :validate="validate"
          @handleInput="onChangeInput"
          @handleValidation="validation"
        />
        <InputdateComp
          v-if="form.type === 'datetime'"
          :label="form.label"
          :inputValue="form.value"
          :name="form.key"
          :required="form.required"
          @handleInput="onChangeInput"
        />
        <WorkingTime
          v-if="form.type === 'input_range_time'"
          :label="form.label"
          :name="form.key"
          :inputValue="form.value"
          @handleInput="onChangeInput"
        />
        <SelectComp
          v-if="form.type === 'select'"
          :inputValue="form.value"
          :name="form.key"
          :label="form.label"
          :data="data"
          :selected="selected"
          :required="form.required"
          @handleSelect="onChangeInput"
        />
        <SearchComp
          v-if="form.type === 'input_search'"
          :label="form.label"
          :description="form.description"
          :filtersItem="filtersItem"
          :selected="selected"
          :required="form.required"
          @handleAddItem="handleAddItem"
          @handleDeleteItem="handleDeleteItem"
          @handleSearch="handleSearch"
        />
        <TextAreaComp
          v-if="form.type === 'textarea'"
          :required="form.required"
          :label="form.label"
          :inputValue="form.value"
          :character="form.wordLimit"
          :name="form.key"
          :maxLength="form.wordLimit"
          @handleInput="onChangeInput"
          @handleValidation="validation"
        />
        <DropzoneComp
          v-if="form.type === 'input_multi_file'"
          :form="form"
          :required="form.required"
        />
        <SalaryComp
          v-if="form.type === 'salary'"
          :label="form.label"
          :inputValue="form.value"
          :name="form.key"
          :required="form.required"
          :currency="CURRENCY.VND"
          @handleInput="onChangeInput"
        />
        <InputChosenComp
          v-if="form.type === 'chosen'"
          :data="nameCompany"
          :inputValue="form.value"
          :name="form.key"
          @handleChosen="onChangeInput"
        />
      </div>
    </div>
    <AddButtonComp v-if="currentStep === 1" />
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
import InputChosenComp from "../shareComponent/InputChosenComp.vue";
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
    position: {
      type: Array,
      default: () => [],
    },
    filtersItem: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Array,
      default: () => [],
    },
    nameCompany: {
      type: Array,
      default: () => [],
    },
    validate: {
      type: Boolean,
      required: true,
    }
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
    InputChosenComp,
  },
  methods: {
    onChangeInput({ value, name }) {
      const data = this.dataForm.layout.find((item) => item.key === name);
      data.value = value;
    },
    validation(name) {
      this.$emit("changeValidation", name);
    },
    handleAddItem(item) {
      this.$emit("addItem", item);
    },
    handleDeleteItem(item) {
      this.$emit("deleteItem", item);
    },
    handleSearch(keyword) {
      this.$emit("searchItem", keyword);
    },
  },
};
</script>

<style scoped lang="scss">
.form-card-layout {
  width: max-content;
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

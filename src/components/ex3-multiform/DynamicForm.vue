<template>
  <div class="form-layout">
    <div v-for="form in data" :key="form.id">
      <div class="form-header">
        <CheckRequireComp v-show="form.required" />
        <div class="form-title">{{ form.label }}</div>
      </div>
      <InputText
        v-if="form.type === 'text'"
        :id="form.id"
        :inputValue="form.value"
        :required="form.required"
        :maxlength="form.maxLength"
        :err="form.err"
        @handleInputText="onchangeInput"
      />
      <InputDate
        v-if="form.type === 'datetime'"
        :id="form.id"
        :inputValue="form.value"
        :required="form.required"
        :err="form.err"
        :today="today"
        @onChangeInputDate="onchangeInput"
      />
      <InputSelected
        v-if="form.type === 'select'"
        :inputValue="form.value"
        :id="form.id"
        :required="form.required"
        :inputData="cities"
        @onChangeInputSelected="onchangeInput"
      />
      <InputSearch
        v-if="form.type === 'search'"
        :description="form.description"
        :id="form.id"
        :inputValue="form.value"
        :required="form.required"
        :placeholder="placeholder"
        :data="filtersItem"
        :selected="selected"
        @handleSearch="search"
        @handelAddItem="addItem"
        @handelDeleteItem="deleteItem"
      />
      <InputTextarea
        v-if="form.type === 'textarea'"
        :inputValue="form.value"
        :id="form.id"
        :reruired="form.required"
        :character="form.maxLength"
        :err="form.err"
        @handleInputTextarea="onchangeInput"
      />
      <InputChosen
        v-if="form.type === 'chosen'"
        :data="company"
        :inputValue="form.value"
        :id="form.id"
        :required="form.required"
        @handleChosen="onchangeInput"
      />
      <InputRangeTime
        v-if="form.type === 'input_range_time'"
        :id="form.id"
        :inputValue="form.value"
        :required="form.required"
        :err="form.err"
        :today="today"
        @handleInput="onchangeInput"
      />
      <InputSalary
        v-if="form.type === 'salary'"
        :inputValue="form.value"
        :id="form.id"
        :currency="currency"
        :required="form.required"
        :err="form.err"
        @handleInputSalary="onchangeInput"
      />
      <InputFiles
        v-if="form.type === 'input_multi_file'"
        :required="form.required"
      />
      <!-- {{ data }} -->
    </div>
  </div>
</template>

<script>
import InputText from "@/components/shareInputComp/InputText.vue";
import InputDate from "@/components/shareInputComp/InputDate.vue";
import InputSelected from "@/components/shareInputComp/InputSelected.vue";
import InputSearch from "@/components/shareInputComp/InputSearch.vue";
import InputTextarea from "@/components/shareInputComp/InputTextarea.vue";
import InputFiles from "@/components/shareInputComp/InputFiles.vue";
import InputChosen from "@/components/shareInputComp/InputChosen.vue";
import InputRangeTime from "@/components/shareInputComp/InputRangeTime.vue";
import InputSalary from "@/components/shareInputComp/InputSalary.vue";
import CheckRequireComp from "@/components/shareInputComp/CheckRequireComp.vue";
import { mapActions, mapGetters } from "vuex";
import { CURRENCY, PLACEHOLDER } from "@/constant/Form";
export default {
  data() {
    return {
      currency: CURRENCY.VND,
      keyWord: "",
      placeholder: PLACEHOLDER.JOB_POSITION,
      today: new Date().toISOString().split("T")[0],
    };
  },
  components: {
    InputText,
    InputDate,
    InputSelected,
    InputSearch,
    InputTextarea,
    InputFiles,
    InputChosen,
    InputRangeTime,
    InputSalary,
    CheckRequireComp,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters("form", {
      cities: "getCities",
      company: "getNameCompany",
      position: "getPosition",
      selected: "getSelected",
    }),
    filtersItem() {
      return this.position.filter((item) => {
        return item.name.toLowerCase().includes(this.keyWord.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions("form", {
      fetchCities: "fetchCities",
      selectedItem: "selected",
      deletedItem: "deleted",
    }),
    onchangeInput({ value, id }) {
      const data = this.data.find((item) => item.id === id);
      data.err = "";
      data.value = value;
    },
    search(keyword) {
      this.keyWord = keyword.trim();
    },
    addItem(item) {
      this.selectedItem(item);
      this.keyWord = "";
    },
    deleteItem(item) {
      this.deletedItem(item);
    },
  },
  created() {
    this.fetchCities();
  },
};
</script>

<style scoped lang="scss">
.form-layout {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .form-header {
    display: flex;
    margin-bottom: 6px;
    .form-title {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #333333;
    }
  }
}
</style>

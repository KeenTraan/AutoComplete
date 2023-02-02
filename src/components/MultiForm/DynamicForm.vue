<template>
  <div class="dynamic-layout">
    <StepProgress
      v-if="currentStep < 3"
      :stepProgress="stepForm"
      :currentStep="currentStep"
      @handleClick="handleClick"
    />
    <FormCard
      v-if="currentStep === 0"
      :dataForm="stepForm[0]"
      :data="cities"
      :position="jobPosition"
      :filtersItem="filtersItem"
      :selected="selected"
      :currentStep="currentStep"
      @addItem="addItem"
      @deleteItem="deleteItem"
      @searchItem="searchItem"
      @changeValidation="changeValidation"
    />
    <FormCard
      v-if="currentStep === 1"
      :dataForm="stepForm[1]"
      :data="selected"
      :currentStep="currentStep"
    />
    <FormCard
      v-if="currentStep === 2"
      :dataForm="stepForm[2]"
      :currentStep="currentStep"
    />
    <NextButtonComp @handleClick="handleClick" :currentStep="currentStep" />
    <BackButtonComp @onClick="handleBackBtn" :currentStep="currentStep" />
    <SubmitButtonComp :currentStep="currentStep" />
  </div>
</template>

<script>
import StepProgress from "@/components/MultiForm/StepProgress.vue";
import FormCard from "@/components/MultiForm/FormCard.vue";
import NextButtonComp from "@/components/MultiForm/button/NextButtonComp.vue";
import { mapActions, mapGetters } from "vuex";
import SubmitButtonComp from "./button/SubmitButtonComp.vue";
import BackButtonComp from "./button/BackButtonComp.vue";
export default {
  data() {
    return {
      keyWord: "",
      isError: true,
    };
  },
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    stepForm: {
      type: Array,
      required: true,
    },
  },
  components: {
    StepProgress,
    FormCard,
    NextButtonComp,
    SubmitButtonComp,
    BackButtonComp,
  },
  computed: {
    ...mapGetters("form", {
      cities: "getCities",
      jobPosition: "getPosition",
      selected: "getSelected",
    }),
    filtersItem() {
      return this.jobPosition.filter((item) => {
        return item.name.toLowerCase().includes(this.keyWord.toLowerCase());
      });
    },
    getCurrentForm() {
      return this.stepForm[this.currentStep];
    },
  },
  methods: {
    ...mapActions("form", {
      fetchCities: "fetchCities",
      selectedItem: "selected",
      deletedItem: "deleted",
    }),
    handleClick() {
      if(this.isError){ 
        return
      }else {
        this.$emit("handleNextBtn");
      }
    },
    changeValidation(name) {
      this.isError = name;
    },
    handleBackBtn() {
      this.$emit("handleBackBtn");
    },
    addItem(item) {
      this.selectedItem(item);
      this.keyWord = "";
    },
    deleteItem(item) {
      this.deletedItem(item);
    },
    searchItem(keyword) {
      this.keyWord = keyword.trim();
    },
  },
  created() {
    this.fetchCities();
  },
};
</script>

<style scoped lang="scss">
.dynamic-layout {
  width: 500px;
  height: 88px;
}
</style>

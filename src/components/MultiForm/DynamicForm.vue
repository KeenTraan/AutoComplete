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
    />
    <FormCard
      v-if="currentStep === 1"
      :dataForm="stepForm[1]"
      :data="jobPosition"
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
import { stepForm } from "@/components/MultiForm/form";
import { mapActions, mapGetters } from "vuex";
import SubmitButtonComp from "./button/SubmitButtonComp.vue";
import BackButtonComp from "./button/BackButtonComp.vue";
export default {
  data() {
    return {
      stepForm,
      keyWord: "",
    };
  },
  props: {
    currentStep: {
      type: Number,
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
      this.$emit("handleNextBtn");
    },
    // nextProgress(index) {
    //   if (this.currentStep === index) {
    //     this.$emit("handleProgress", this.stepForm[index]);
    //   }
    // },
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

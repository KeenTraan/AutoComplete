<template>
  <div class="dynamic-layout">
    <StepProgress :stepProgress="stepForm" :currentStep="currentStep" />
    <FormCard
      :dataForm="stepForm[0]"
      v-if="currentStep === 1"
      :data="cities"
      :currentStep="currentStep"
    />
    <FormCard
      :dataForm="stepForm[1]"
      v-if="currentStep === 2"
      :data="jobPosition"
      :currentStep="currentStep"
    />
    <FormCard
      :dataForm="stepForm[2]"
      v-if="currentStep === 3"
      :currentStep="currentStep"
    />
    <NextButtonComp @handleClick="handleClick" v-if="currentStep < 3" />
    <BackButtonComp
      v-if="currentStep > 1 && currentStep < 3"
      @onClick="handleBackBtn"
    />
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
    };
  },
  methods: {
    ...mapActions("form", ["fetchCities"]),
    handleClick() {
      this.$emit("handleBtn");
    },
    handleBackBtn() {
      this.$emit("handleBackBtn");
    },
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
    ...mapGetters("form", { cities: "getCities", jobPosition: "getPosition" }),
    getCurrentForm() {
      return this.stepForm[this.currentStep];
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

<template>
  <div class="dynamic-layout">
    <StepProgress :stepProgress="stepForm" :currentStep="currentStep" />
    <FormCard :dataForm="stepForm[0]" v-if="currentStep === 1" :data="cities" />
    <FormCard :dataForm="stepForm[1]" v-if="currentStep === 2" />
    <FormCard :dataForm="stepForm[2]" v-if="currentStep === 3" />
    <NextButtonComp @handleClick="handleClick" :disabled="isDisabled" />
  </div>
</template>

<script>
import StepProgress from "@/components/MultiForm/StepProgress.vue";
import FormCard from "@/components/MultiForm/FormCard.vue";
import NextButtonComp from "@/components/MultiForm/button/NextButtonComp.vue";
import { stepForm } from "@/components/MultiForm/form";
import { mapActions, mapGetters } from "vuex";
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
  },
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    StepProgress,
    FormCard,
    NextButtonComp,
  },
  computed: {
    ...mapGetters("form", { cities: "getCities" }),
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

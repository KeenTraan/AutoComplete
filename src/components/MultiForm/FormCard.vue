<template>
  <div class="form-card-layout">
    <div v-for="(form, index) in currentForm.layout" :key="index">
      <InputFiedComp
        :currentForm="currentForm"
        :form="form"
        v-if="form.type === 'text'"
      />
      <InputdateComp :form="form" v-if="form.type === 'datetime'" />
      <DropdownComp
        :form="form"
        :cities="cities"
        v-if="form.type === 'dropdown'"
      />
      <JobPositionComp :form="form" v-if="form.type === 'position'" />
      <DescriptionComp
        :form="form"
        :character="1000"
        v-if="form.type === 'textarea'"
      />
      <DropzoneComp :form="form" v-if="form.type === 'Drop_and_Drag'" />
    </div>
  </div>
</template>

<script>
import InputFiedComp from "@/components/shareComponent/InputFieldComp.vue";
import InputdateComp from "@/components/shareComponent/InputDateComp.vue";
import JobPositionComp from "../shareComponent/JobPositionComp.vue";
import DropdownComp from "@/components/shareComponent/DropdownComp.vue";
import DescriptionComp from "../shareComponent/DescriptionComp.vue";
import DropzoneComp from "../shareComponent/DropzoneComp.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    currentForm: {
      type: Object,
    },
  },
  components: {
    InputFiedComp,
    InputdateComp,
    DropdownComp,
    JobPositionComp,
    DescriptionComp,
    DropzoneComp,
  },
  computed: {
    ...mapGetters("form", { cities: "getCities" }),
  },
  methods: {
    ...mapActions("form", ["fetchCities"]),
  },
  created() {
    this.fetchCities();
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

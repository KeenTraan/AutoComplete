<template>
  <div>
    <div class="form-card-layout">
      <div v-for="form in dataForm.layout" :key="form.id">
        <InputText
          :label="form.label"
          :id="form.key"
          :inputValue="form.value"
          :required="form.required"
          v-if="form.type === 'text'"
          @onChangeInput="onChangeInput"
        />
        <InputdateComp
          :form="form"
          v-if="form.type === 'datetime'"
          :inputValue="form.value"
        />
        <DropdownComp
          :form="form"
          :data="cities"
          v-if="form.type === 'dropdown'"
        />
        <JobPositionComp :form="form" v-if="form.type === 'position'" />
        <TextAreaComp
          :form="form"
          :character="1000"
          v-if="form.type === 'textarea'"
        />
        <DropzoneComp :form="form" v-if="form.type === 'Drop_and_Drag'" />
      </div>
    </div>
    <div>
      <NextButtonComp />
    </div>
  </div>
</template>

<script>
import InputText from "@/components/shareComponent/InputText.vue";
import InputdateComp from "@/components/shareComponent/InputDateComp.vue";
import JobPositionComp from "../shareComponent/JobPositionComp.vue";
import DropdownComp from "@/components/shareComponent/DropdownComp.vue";
import TextAreaComp from "../shareComponent/TextAreaComp.vue";
import DropzoneComp from "../shareComponent/DropzoneComp.vue";
import { mapGetters, mapActions } from "vuex";
import NextButtonComp from "./button/NextButtonComp.vue";
export default {
  props: {
    dataForm: {
      type: Object,
    },
  },
  components: {
    InputText,
    InputdateComp,
    DropdownComp,
    JobPositionComp,
    TextAreaComp,
    DropzoneComp,
    NextButtonComp,
  },
  computed: {
    ...mapGetters("form", { cities: "getCities" }),
  },
  methods: {
    ...mapActions("form", ["fetchCities"]),
    onChangeInput({ value, id }) {
      const data = this.dataForm.layout.find((item) => item.key === id);
      data.value = value;
    },
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

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
        <SelectComp
          v-if="form.type === 'dropdown'"
          :label="form.label"
          :data="cities"
        />
        <JobPositionComp
          v-if="form.type === 'position'"
          :label="form.label"
          :description="form.description"
        />
        <TextAreaComp
          v-if="form.type === 'textarea'"
          :label="form.label"
          :inputValue="form.value"
          :character="1000"
          :id="form.key"
          @onChangeInput="onChangeInput"
        />
        <DropzoneComp :form="form" v-if="form.type === 'Drop_and_Drag'" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "@/components/shareComponent/InputText.vue";
import InputdateComp from "@/components/shareComponent/InputDateComp.vue";
import JobPositionComp from "../shareComponent/JobPositionComp.vue";
import SelectComp from "@/components/shareComponent/SelectComp.vue";
import TextAreaComp from "../shareComponent/TextAreaComp.vue";
import DropzoneComp from "../shareComponent/DropzoneComp.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FormCard",
  props: {
    dataForm: {
      type: Object,
    },
  },
  components: {
    InputText,
    InputdateComp,
    SelectComp,
    JobPositionComp,
    TextAreaComp,
    DropzoneComp,
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

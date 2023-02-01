<template>
  <div class="position-layout">
    <div>
      <p class="input-text">{{ label }}</p>
      <p class="input-text-description">{{ description }}</p>
      <AutoComplete
        :placeholder="placeholder"
        :getSelect="selected"
        :filtersItem="filtersItem"
      />
    </div>
  </div>
</template>

<script>
import { PLACEHOLDER } from "@/constant/Form";
import AutoComplete from "@/components/Autocomplete/AutoComplete.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      placeholder: PLACEHOLDER.JOB_POSITION,
      keywords: "",
    };
  },
  components: {
    AutoComplete,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters("form", { position: "getPosition", selected: "getSelected" }),
    filtersItem() {
      return this.position.filter((item) => {
        return item.name.toLowerCase().includes(this.keywords.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions({}),
  },
};
</script>

<style scoped lang="scss">
.position-layout {
  width: 528px;
  .input-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
    &-description {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #666666;
    }
  }
}
::v-deep .input-layout {
  width: 528px;
  height: 40px;
  padding: 1px 11px;
  input {
    width: 476px;
    height: 20px;
  }
}
</style>
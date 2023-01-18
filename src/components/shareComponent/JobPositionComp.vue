<template>
  <div class="position-layout">
    <div>
      <p class="input-text">{{ form.label }}</p>
      <p class="input-text-description">{{ form.description }}</p>
      <AutoComplete :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
import { PLACEHOLDER } from "@/constant/Form";
import AutoComplete from "@/components/Autocomplete/AutoComplete.vue";
export default {
  data() {
    return {
      placeholder: PLACEHOLDER.JOB_POSITION,
    };
  },
  components: {
    // Search,
    AutoComplete,
  },
  props: {
    form: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.position-layout {
  width: 528px;
  height: 88px;
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
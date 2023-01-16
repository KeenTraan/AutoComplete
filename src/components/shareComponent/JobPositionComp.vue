<template>
  <div class="position-layout">
    <div>
      <p class="input-text">{{ form.label }}</p>
      <p class="input-text-description">{{ form.description }}</p>
      <Search :placeholder="placeholder" :keyword="''" />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Autocomplete/Search.vue";
import { PLACEHOLDER } from "@/constant/Form";
export default {
  data() {
    return {
      placeholder: PLACEHOLDER.JOB_POSITION,
    };
  },
  components: {
    Search,
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
</style>
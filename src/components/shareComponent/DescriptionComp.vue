<template>
  <div class="description-layout">
    <div class="description">
      <p class="text-label">{{ form.label }}</p>
      <textarea cols="30" rows="10" class="text-description"></textarea>
      <p class="character">0/{{ character }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
    },
    character: {
      type: Number,
    },
  },
};
</script>

<style scoped lang="scss">
.description-layout {
  .description {
    display: flex;
    flex-direction: column;
  }
  .text-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    align-items: center;
    margin-bottom: 6px;
  }
  .text-description {
    width: 528px;
    height: 152px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
    outline: none;
    resize: none;
  }
  .character {
    margin-top: 10px;
  }
}
</style>
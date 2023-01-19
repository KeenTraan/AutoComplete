<template>
  <div class="description-layout">
    <div class="description">
      <p class="text-label">{{ label }}</p>
      <textarea
        cols="30"
        rows="10"
        class="text-content"
        value="inputValue"
        @input="handleInput"
      ></textarea>
      <p class="character">0/{{ character }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleInput(e) {
      console.log(e.target.value);
      this.$emit("onChangeInput", { value: e.target.value, id: this.id });
    },
  },
  props: {
    label: {
      type: String,
    },
    character: {
      type: Number,
    },
    inputValue: {
      type: String,
    },
    id: {
      type: String,
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
  .text-content {
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

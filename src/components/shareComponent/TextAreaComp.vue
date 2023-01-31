<template>
  <div class="description">
    <div class="title">
      <CheckrequireComp v-if="required === true" />
      <p class="text-label">{{ label }}</p>
    </div>
    <textarea
      cols="30"
      rows="10"
      class="text-content"
      value="inputValue"
      @input="handleInput"
    ></textarea>
    <p class="character">0/{{ character }}</p>
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";

export default {
  methods: {
    handleInput(e) {
      this.$emit("onChangeInput", { value: e.target.value, id: this.id });
    },
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    character: {
      type: Number,
      required: false,
    },
    inputValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  components: { CheckrequireComp },
};
</script>

<style scoped lang="scss">
.description {
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
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
  .text-content:focus {
    border: none;
    outline: 1px solid skyblue;
  }
  .character {
    margin-top: 10px;
  }
}
</style>

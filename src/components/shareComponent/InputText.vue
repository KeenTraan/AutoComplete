<template>
  <div class="input-text-layout">
    <div>
      <div class="title">
        <CheckrequireComp />
        <p>{{ label }}</p>
      </div>
      <input type="text" :value="inputValue" @input="handleInput" />
    </div>
  </div>
</template>

<script>
import CheckrequireComp from "@/components/shareComponent/CheckrequireComp.vue";
export default {
  methods: {
    handleInput(e) {
      this.$emit("onChangeInput", {
        value: e.target.value,
        id: this.id,
      });
    },
  },
  components: {
    CheckrequireComp,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    inputValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
    required: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.input-text-layout {
  width: 528px;
  height: 66px;
  margin-top: 24px;
  .title {
    display: flex;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
  }
  input {
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 8px 10px;
  }
  input:focus {
    border: none;
    outline: 1px solid skyblue;
  }
}
</style>

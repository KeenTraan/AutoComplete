<template>
  <div class="working-time-layout">
    <div class="title">
      <CheckrequireComp />
      <p>{{ label }}</p>
    </div>
    <div class="date-time">
      <input
        class="input-date"
        type="date"
        :value="inputValue.from"
        @input="handleInput"
      />
      <p class="line">-</p>
      <input
        class="input-date"
        type="date"
        :value="inputValue.to"
        @input="handleInput"
      />
    </div>
    <!-- {{ show }} -->
  </div>
</template>

<script>
import CheckrequireComp from "./CheckrequireComp.vue";
export default {
  data() {
    return {
      value: {
        from: "",
        to: "",
      },
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    inputValue: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(e) {
      this.value.from = e.target.value;
      this.value.to = e.target.value;
      console.log(this.value);
      // this.$emit("onChangeInput", { value: value, id: this.id });
    },
    // handleInputTo(e) {
    //   this.value.to = e.target.value;
    //   console.log(this.value);
    // },
  },
  // computed: {
  //   show() {
  //     return console.log(this.value);
  //   },
  // },
  components: { CheckrequireComp },
};
</script>

<style scoped lang="scss">
.working-time-layout {
  margin-top: 24px;
  .title {
    display: flex;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .date-time {
    display: flex;
    gap: 18px;
    align-items: center;
    width: 284px;
    height: 40px;
    .input-date {
      padding: 4px;
      width: 118px;
      height: 40px;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      font-weight: 400;
      font-size: 14px;
    }
    .line {
      color: #bfbfbf;
    }
  }
}
</style>
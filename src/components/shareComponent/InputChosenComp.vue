<template>
  <div>
    <div class="chosen-layout">
      <select class="chosen-input" @input="onChange">
        <option v-for="item in data" :key="item.code || item.id">
          {{ item.name }}
        </option>
      </select>
      <img
        src="@/assets/icons/Trash.png"
        alt="#"
        class="icons"
        @click="deletedItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChange() {
      console.log("onChange");
    },
    deletedItem() {
      console.log("deletedItem");
    },
  },
};
</script>

<style scoped lang="scss">
.chosen-layout {
  width: 978px;
  height: 60px;
  background: #f8f8f8;
  border-radius: 4px;
  padding: 10px 16px;
  background: #f8f8f8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  .chosen-input {
    width: 898px;
    height: 40px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 8px 10px;
    outline: none;
  }
  .icons {
    width: 32px;
    height: 32px;
    margin: 14px 0 14px 16px;
  }
}
</style>
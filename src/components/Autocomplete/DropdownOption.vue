<template>
  <div class="list-item">
    <div v-for="item in listOptions" :key="item.code">
      <div class="item" @click="selectItem(item)">
        {{ item.name }}
      </div>
    </div>
    <div v-if="!listOptions.length && keyword" class="item-massage">
      <div>
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listOptions: {
      type: Array,
      default: () => [],
    },
    message: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectItem(item) {
      this.$emit("selectItem", item);
    },
  },
};
</script>

<style scoped lang="scss">
.list-item {
  position: absolute;
  z-index: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 528px;
  height: 128px;
  align-items: flex-start;
  padding: 0px;
  border-radius: 4px;
}
.item {
  cursor: pointer;
  background-color: #f1f5f8;
  padding: 10px;
  width: 528px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #486581;
  transition: 0.3s;
}
.item-massage {
  background-color: #f1f5f8;
  padding: 10px;
  width: 528px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #486581;
  li {
    list-style: none;
  }
}
.list-item::-webkit-scrollbar {
  width: 5px;
  height: 0;
}
.list-item::-webkit-scrollbar-thumb {
  border-radius: 100rem;
  background-color: rgb(141, 141, 141, 0.5);
}
.list-item::-webkit-scrollbar-track {
  border-radius: 100rem;
  background-color: white;
}
.item:hover {
  background-color: #617d98;
  color: #ffffff;
}
</style>

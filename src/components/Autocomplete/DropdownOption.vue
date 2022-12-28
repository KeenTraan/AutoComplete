<template>
  <div class="list-item">
    <div v-for="item in options" :key="item.code">
      <ul>
        <li class="item" @click="selectItem(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div v-if="!options.length && keyword" class="item-massage">
      <ul>
        <li>
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
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
    }
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
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 128px;
  align-items: flex-start;
  padding: 0px;
  border-radius: 4px;
}
.list-item::-webkit-scrollbar {
  width: 7px;
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
.item {
  cursor: pointer;
  background-color: #f1f5f8;
  padding: 10px;
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #486581;
  transition: 0.5s;
}
.item:hover {
  background-color: #617d98;
  color: #ffffff;
}
.item-massage {
  background-color: #f1f5f8;
  padding: 10px;
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #486581;
  transition: 0.5s;
}
</style>

<template>
  <div class="list-item">
    <div v-for="city in city" :key="city.code">
      <ul>
        <li class="item" @click="choiceItem(city)">
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CitiesAutoComplete",
  props: {
    city: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {};
  },
  methods: {
    choiceItem(city) {
      this.$emit("selectItem", city);
    }
  },
};
</script>

<style>
.list-item {
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 128px;
  align-items: flex-start;
  padding: 0px;
  border-radius: 4px;
  cursor: grabbing;
}
.list-item::-webkit-scrollbar {
  width: 5px;
  height: 0;
}
.list-item::-webkit-scrollbar-thumb {
  border-radius: 100rem;
  background-color: grey;
  height: 30px;
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
}
.item:hover {
  background-color: #617d98;
  transition: 0.8s;
  color: #FFFFFF;
}
</style>

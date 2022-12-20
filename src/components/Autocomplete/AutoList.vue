<template>
  <div class="list-item">
    <div v-for="city in getCity" :key="city.code">
      <ul>
        <li class="item" @click="choiceItem">
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AutoList",
  methods: {
    choiceItem() {
      console.log("click me");
    },
  },
  created() {
    this.$store.dispatch("fetchCity");
  },
  computed: {
    ...mapGetters(["getCity"]),
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
  height: 50px;
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
}
.item:hover {
  background-color: #617D98;
  transition: 1s;
}
</style>

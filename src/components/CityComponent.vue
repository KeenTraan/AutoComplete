<template>
  <div class="city-layout">
    <AutoComplete
      :getSelect="selectedCities"
      :placeholder="placeholder"
      :filtersItem="filtersItem"
      :limited="limited"
      @searchOptions="searchOptions"
      @addChosen="addChosen"
      @deleteItem="deleteItem"
    />
  </div>
</template>
  
  <script>
import AutoComplete from "@/components/Autocomplete/AutoComplete";
import { mapActions, mapGetters } from "vuex";
import { PLACEHOLDER } from "@/constant/Autocomplete";
export default {
  data() {
    return {
      placeholder: PLACEHOLDER.CITY,
      keyWord: "",
      limited: 3,
    };
  },
  components: {
    AutoComplete,
  },
  methods: {
    ...mapActions({
      fetchCity: "fetchCity",
      addChosenCity: "selectCity",
      deleteCity: "deleteCity",
    }),
    searchOptions(keyword) {
      this.keyWord = keyword.trim();
    },
    addChosen(item) {
      this.addChosenCity(item);
      this.keyWord = "";
    },
    deleteItem(item) {
      this.deleteCity(item);
    },
  },
  computed: {
    ...mapGetters({
      cities: "getCity",
      selectedCities: "getSelect",
    }),
    filtersItem() {
      return this.cities.filter((item) => {
        return (
          this.keyWord.length &&
          item.name.toLowerCase().includes(this.keyWord.toLowerCase())
        );
      });
    },
  },
  created() {
    this.fetchCity();
  },
};
</script>
  
  <style lang="scss" scoped>
.city-layout {
  display: flex;
}
</style>
  
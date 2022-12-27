<template>
  <div class="city-layout">
    <Navbar />
    <AutoComplete
    :options="cities"
    :getSelect="selectedCities"
    :placeholder="placeholder"
    :filtersItem="filtersItem"
    @searchOptions="searchOptions"
    @addChosen="addChosen"
    @deleteItem="deleteItem"
    />
  </div>
</template>

<script>
import AutoComplete from "@/components/Autocomplete/AutoComplete";
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from 'vuex';
import { PLACEHOLDER } from "@/constant";
export default {
  data(){
    return {
      placeholder: PLACEHOLDER.CITY,
      keyWord: ""
    }      
  },
  components: {
    AutoComplete,
    Navbar,
  },
  methods: {
    ...mapActions({ fetchCity: "fetchCity", addChosenCity: "selectCity", deleteCity: "deleteCity"}),
    searchOptions(keyword) {
      this.keyWord = keyword.trim()
    },
    addChosen(item) {
     this.addChosenCity(item)
     this.keyWord = ""
    },
    deleteItem(item) {
      this.deleteCity(item)
    }
  },
  computed: {
    ...mapGetters({
      cities: "getCity", 
      selectedCities: "getSelect"
    }),
    filtersItem() {
      return this.cities.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.keyWord.toLowerCase())
          && this.keyWord.length
        );
      });
    },
  },
  created() {
   this.fetchCity();
  }
};
</script>

<style lang="scss" scoped>
.city-layout {
  display: flex;
}
</style>

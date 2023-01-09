<template>
  <div class="auto-layout">
    <Navbar />
    <div>
      <Search @searchCity="searchCity"/>
      <CitiesAutoComplete />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CitiesAutoComplete from "@/components/Autocomplete/CitiesAutoComplete.vue";
import Search from "@/components/Autocomplete/Search.vue";
export default {
  name: "AutocompleteView",
  data() {
    return {
      ishiden: false
    };
  },
  components: {
    Navbar,
    CitiesAutoComplete,
    Search
  },
  methods: {
    searchCity(value) {
      console.log(value);
  }
}
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
}
</style>

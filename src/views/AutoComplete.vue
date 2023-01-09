<template>
  <div class="auto-layout">
    <Navbar />
    <div>
      <Search @searchCity="searchCity" :city="city" />
      <CitiesAutoComplete @selectItem="selectItem" :city="getCity" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CitiesAutoComplete from "@/components/Autocomplete/CitiesAutoComplete.vue";
import Search from "@/components/Autocomplete/Search.vue";
import { mapGetters } from "vuex";
export default {
  name: "AutocompleteView",
  data() {
    return {
      ishiden: false,
      city: [],
    };
  },
  components: {
    Navbar,
    CitiesAutoComplete,
    Search,
  },
  methods: {
    searchCity(value) {
      console.log(value);
    },
    selectItem(city) {
      this.city.push(city.name);
      console.log(city);
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

<style lang="scss" scoped>
.auto-layout {
  display: flex;
}
</style>

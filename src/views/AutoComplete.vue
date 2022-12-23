<template>
  <div class="city-layout">
    <Navbar />
    <CityAutoComplete />
  </div>
</template>

<script>
import CityAutoComplete from '@/components/Autocomplete/CityAutoComplete.vue';
import Navbar from '@/components/Navbar.vue';
export default {
components: {
  CityAutoComplete,
  Navbar
}
}
</script>

<style lang="scss" scoped>
.city-layout {
  display: flex;
}
</style>
<template>
  <div class="city-view">
    <Navbar/>
    <CityComponent />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import CityComponent from '@/components/CityComponent.vue';
export default {
components: {
  CityComponent,
  Navbar
}
}
</script>

<style scoped lang="scss">
.city-view {
  display: flex;
}
</style>
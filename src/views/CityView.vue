<template>
  <div class="city-layout">
    <Navbar />
    <AutoComplete />
  </div>
</template>

<script>
import AutoComplete from '@/components/Autocomplete/AutoComplete.vue';
import Navbar from '@/components/Navbar.vue';
export default {
components: {
  AutoComplete,
  Navbar
}
}
</script>

<style lang="scss" scoped>
.city-layout {
  display: flex;
}
</style>
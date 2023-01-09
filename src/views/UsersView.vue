<template>
  <div class="city-layout">
    <Navbar />
    <SearchUsers />
  </div>
</template>

<script>
import SearchUsers from "@/components/Autocomplete/SearchUsers.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "SearchUserAutocomplete",
  components: {
    SearchUsers,
    Navbar
  },
};
</script>

<style lang="scss" scoped>
.city-layout {
  display: flex;
}
</style>

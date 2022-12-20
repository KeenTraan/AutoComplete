<template>
  <div class="auto-layout">
    <Navbar />
    <div>
      <Search />
      <AutoList />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AutoList from "@/components/Autocomplete/AutoList.vue";
import Search from "@/components/Autocomplete/Search.vue";
export default {
  name: "AutocompleteView",
  data() {
    return {};
  },
  components: {
    Navbar,
    AutoList,
    Search
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
}
</style>

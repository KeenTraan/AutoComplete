<template>
  <div class="home">
    <NavbarComponent/>
    <h1>Home page</h1>
  </div>
</template>

<script>
import NavbarComponent from '@/components/Navbar.vue'
export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
}
</style>

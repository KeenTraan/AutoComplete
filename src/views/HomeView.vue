<template>
  <div class="home">
    <NavbarComponent/>
    <!-- <h1>Home page</h1> -->
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
  // background-image: url(https://wallpaperaccess.com/full/158931.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

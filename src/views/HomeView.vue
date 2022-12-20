<template>
  <div class="home">
    <NavbarComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
  }
}
</script>

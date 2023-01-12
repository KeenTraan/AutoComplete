<template>
  <div id="app">
    <Navbar />
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
components: {
    Navbar,
}
}
</script>
<style scoped lang="scss">
#app {
  display: flex;
}
.main{
  width: calc(100% - 270px)
}
</style>
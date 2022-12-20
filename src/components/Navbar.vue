<template>
  <div class="nav-bar">
    <h2 style="color:aliceblue">Tranning Intern</h2>
    <nav >
      <router-link v-for="link in navlink" :key="link.id" :to="link.path">
        <strong class="header"> {{ link.name }}</strong>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      navlink: [
        {id: 1, name: "Home", path: "/" },
        {id: 2, name: "Auto Complete", path: "/autocomplete" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.nav-bar{
  background-color: black;
  width: 200px;
  height: 100vh;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  a{
    text-decoration: none;
    color: white;
    &.router-link-exact-active {
        color: skyblue;;
      }
  }
}


</style>

<template>
  <div class="nav-bar">
    <h2 class="text">Tranning Intern</h2>
    <nav>
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
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "City", path: "/city" },
        { id: 3, name: "User", path: "/users" },
        { id: 4, name: "Dropzone", path: "/dropzone" },
        { id: 5, name: "Multi Form", path: "/multiform" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.nav-bar {
  background-color:  rgb(211,211,211);
  width: calc(300px - 50px);
  height: 1200px;
  margin-right: 20px;
  .text {
    padding: 0 10px;
    margin: 20px 0 0 20px;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    a {
      text-decoration: none;
      color: #666666;;
      padding: 10px;
      font-size: large;
      &.router-link-exact-active {
        color: black;
      }
    }
    a:hover {
      background-color: skyblue;
      transition: 0.8s;
    }
  }
}
</style>

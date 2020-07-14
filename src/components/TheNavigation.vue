<template>
  <nav id="nav">
    <p class="logo">Agência de viagens - Já vai tarde</p>
      <ul class="nav-link">
        <li class="links">
          <router-link to="/">Home</router-link>
        </li>
        <li v-for="destination in destinations" :key="destination.name" class="links">
          <router-link
            :to="{name: 'DestinationDetails', params:{slug:destination.slug}}"
          >{{destination.name}}</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
import store from "@/store/index";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#nav {
  display: flex;
}
#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
#nav a.vue-active-class {
  color: #ab26ab;
}
.nav-links {
  display: flex;
}
.links{
  padding-right: 20px;
  list-style: none;
  display: inline;
}
.links:hover{
  text-decoration: underline;
}
.logo{
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
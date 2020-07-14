<template>
  <div id="app">
    <TheNavigation />
    <transition name="slide" mode="out-in">
    <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>

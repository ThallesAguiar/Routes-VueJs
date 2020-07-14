import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store/index"

Vue.use(VueRouter)

linkExactActiveClass: "vue-active-class";

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: "/destinations/:slug",
    name: "DestinationDetails",
    props: true,
    component: () => import( /* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails"),

    beforeEnter: (to, from, next) => {
      const exist = store.destinations.find(
        destination => destination.slug === to.params.slug
        );
        if(exist){
          next();
        }else{
          next({name: "NotFound"});
        }
    }
  },
  {
    path: "/pageNotFound",
    alias: "*",
    name: "NotFound",
    component: () => import( /* webpackChunkName: "NotFound"*/ "../views/NotFound")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
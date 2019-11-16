<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieDetail from "./components/MovieDetail.vue";
import MovieEdit from "./components/MovieEdit.vue";
import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/list", component: MovieList },
  { path: "/detail", component: MovieDetail },
  { path: "/edit", component: MovieEdit }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use(VueRouter);

export default {
  name: "app",
  router,
  components: {}
};
</script>
<style src="./assets/css/style.css"></style>

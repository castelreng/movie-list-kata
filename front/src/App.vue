<template>
  <div id="app">
    <nav-bar title="Movies" />
    <div class="px-5 pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieDetail from "./components/MovieDetail.vue";
import MovieEdit from "./components/MovieEdit.vue";
import NavBar from "./components/NavBar.vue";

import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
const routes = [
  { path: "*", component: MovieList },
  { path: "/list", component: MovieList, name: "list" },
  { path: "/detail/:id", component: MovieDetail, name: "detail" },
  { path: "/edit/:id", component: MovieEdit, name: "edit" },
  { path: "/edit", component: MovieEdit, name: "add" }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
export default {
  name: "app",
  router,
  components: {
    NavBar
  }
};
</script>
<style src="./assets/css/style.css"></style>
<style src="../node_modules/@fortawesome/fontawesome-free/css/all.min.css"></style>
<style>
html,
body {
  background-color: #edf2f7;
}
</style>
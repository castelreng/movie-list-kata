<template>
  <div id="app">
    <nav-bar title="Movies" />
    <div class="px-3 pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MovieList from "./views/MovieList.vue";
import MovieDetail from "./views/MovieDetail.vue";
import MovieEdit from "./views/MovieEdit.vue";
import NavBar from "./components/NavBar.vue";
import FabButton from "./components/FabButton.vue";

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
Vue.component("fab-button", FabButton);
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
<style src="../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"></style>
<style>
html,
body {
  background-color: #edf2f7;
}
</style>
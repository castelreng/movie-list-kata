<template>
  <div id="app" class="bg-gray-200">
    <router-link
      to="/list"
      class="w-full bg-purple-500 font-semibold text-xl text-white px-3 py-2 fixed shadow-md"
    >Movies</router-link>
    <div class="px-5 pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MovieList from "./components/MovieList.vue";
import MovieDetail from "./components/MovieDetail.vue";
import MovieEdit from "./components/MovieEdit.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
const routes = [
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
  components: {}
};
</script>
<style src="./assets/css/style.css"></style>
<style src="../node_modules/@fortawesome/fontawesome-free/css/all.min.css"></style>
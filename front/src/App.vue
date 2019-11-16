<template>
  <div id="app" class="bg-gray-200 px-5">
    <router-view></router-view>
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
  { path: "/edit", component: MovieEdit, name: "edit" }
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
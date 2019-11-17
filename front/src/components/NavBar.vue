<template>
  <div class="w-full bg-purple-500 font-semibold text-xl text-white px-3 py-2 fixed shadow-md">
    <router-link to="/list">{{title}}</router-link>
    <div class="float-right mr-4 cursor-pointer" v-if="isDetailMovie()" v-on:click="deleteMovie()">
      <i class="far fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: String
  },
  methods: {
    isDetailMovie: function() {
      return this.$route.name == "detail";
    },
    deleteMovie: function() {
      if (confirm("Do you really want to delete this movie ?")) {
        this.axios
          .delete(
            "http://localhost:3000/deleteMovie/".concat(this.$route.params.id)
          )
          .then(() => {
            this.$router.push({
              name: "list"
            });
          });
      }
    }
  }
};
</script>

<style>
</style>

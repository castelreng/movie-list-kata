<template>
  <div>
    <h3>MOVIE LIST</h3>
    <div
      class="rounded-lg bg-white mb-5 w-full sm:w-1/2 md:w-1/4 shadow-md"
      v-for="movie in movies"
      :key="movie.id"
      v-on:click="goToDetails(movie.id)"
    >
      <img :src="movie.imageUrl" class="rounded-t-lg w-full h-48 object-cover" />
      <div class="py-2 px-4">
        <p class="text-xl text-gray-800">{{ movie.title }}</p>
        <p class="text-base text-gray-700">{{ movie.directedBy }}</p>
      </div>
    </div>
    <button
      type="button"
      v-on:click="addMovie()"
      class="fixed bottom-0 right-0 mr-4 mb-4 rounded-full bg-purple-500 text-white w-12 h-12 text-lg shadow-2xl"
    >
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    msg: String
  },
  data: function() {
    return {
      movies: []
    };
  },
  methods: {
    goToDetails: function(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    },
    addMovie: function() {
      this.$router.push({ name: "add" });
    }
  },
  mounted: function() {
    this.axios.get("http://localhost:3000/getMovies").then(response => {
      this.movies = response.data;
    });
  }
};
</script>
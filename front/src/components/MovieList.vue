<template>
  <div>
    <h3>MOVIE LIST</h3>
    <div
      class="rounded-lg bg-white w-full sm:w-1/2 md:w-1/4 shadow-md"
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
    }
  },
  mounted: function() {
    this.axios.get("http://localhost:3000/getMovies").then(response => {
      this.movies = response.data;
    });
  }
};
</script>
<template>
  <div>
    <div class="row">
      <div
        class="col-12 col-md-3"
        v-for="movie in movies"
        :key="movie.id"
        v-on:click="goToDetails(movie.id)"
      >
        <div class="rounded-lg bg-white mb-3 shadow-md cursor-pointer">
          <div class="bg-gray-300 rounded-t-lg">
            <img :src="movie.imageUrl" class="w-full h-64 object-contain" alt="no image" />
          </div>
          <div class="py-3 px-4">
            <p class="text-xl font-semibold text-gray-800">{{ movie.title }}</p>
            <p class="text-base text-gray-700">{{ movie.directedBy }}</p>
          </div>
        </div>
      </div>
    </div>
    <fab-button icon="fas fa-plus" :on-click="addMovie" />
  </div>
</template>

<script>
import Movie from "../services/Movie";
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
    Movie.get().then(data => (this.movies = data));
  }
};
</script>
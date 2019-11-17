<template>
  <div class="flex flex-col sm:flex-row">
    <img :src="movie.imageUrl" class="object-contain w-full sm:w-48 h-64 rounded-lg" />
    <div class="ml-2">
      <p class="text-xl font-semibold text-gray-800">{{ movie.title }}</p>
      <p class="text-base text-gray-700">{{ movie.directedBy }}</p>
      <p class="text-sm text-gray-700">{{ movie.description }}</p>
    </div>
    <button
      type="button"
      v-on:click="editMovie()"
      class="fixed bottom-0 right-0 mr-4 mb-4 rounded-full bg-purple-500 text-white w-12 h-12 text-lg shadow-2xl"
    >
      <i class="fas fa-pencil-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  props: {
    msg: String
  },
  data: function() {
    return {
      movie: {}
    };
  },
  methods: {
    editMovie: function() {
      this.$router.push({ name: "edit", params: { id: this.movie.id } });
    }
  },
  mounted: function() {
    if (this.$route.params.id) {
      this.axios
        .get("http://localhost:3000/getMovie/".concat(this.$route.params.id))
        .then(response => {
          this.movie = response.data;
        });
    } else {
      alert("The movie id is missing");
    }
  }
};
</script>
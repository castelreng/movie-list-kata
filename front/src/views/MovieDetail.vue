<template>
  <div class="flex flex-col sm:flex-row">
    <img
      :src="movie.imageUrl"
      alt="no image"
      class="object-contain w-full sm:w-48 h-64 rounded-lg bg-gray-300"
    />
    <div class="ml-2 mt-2 sm:mt-0">
      <p class="text-xl font-semibold text-gray-800">{{ movie.title }}</p>
      <p class="text-base text-gray-700">{{ movie.directedBy }}</p>
      <p class="text-sm text-gray-700">{{ movie.description }}</p>
    </div>
    <fab-button icon="fas fa-pencil-alt" :on-click="editMovie" />
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
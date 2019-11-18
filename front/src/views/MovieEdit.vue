<template>
  <div>
    <div class="flex flex-col w-full mb-6">
      <label class="mb-2 font-bold text-gray-700">Title</label>
      <input
        type="text"
        class="py-3 px-3 rounded shadow text-gray-700 border border-gray-100 focus:border-blue-400"
        placeholder="Your movie title"
        name="title"
        required
        v-model="movie.title"
      />
    </div>
    <div class="flex flex-col w-full mb-6">
      <label class="mb-2 font-bold text-gray-700">Directed by</label>
      <input
        type="text"
        class="py-3 px-3 rounded shadow text-gray-700 border border-gray-100 focus:border-blue-400"
        placeholder="eg: Anthony Hopkins"
        name="directedBy"
        required
        v-model="movie.directedBy"
      />
    </div>
    <div class="flex flex-col w-full mb-6">
      <label class="mb-2 font-bold text-gray-700">Image URL</label>
      <input
        type="text"
        class="py-3 px-3 rounded shadow text-gray-700 border border-gray-100 focus:border-blue-400"
        placeholder="Your image url"
        name="imageUrl"
        required
        v-model="movie.imageUrl"
      />
    </div>
    <div class="flex flex-col w-full mb-6">
      <label class="mb-2 font-bold text-gray-700">Description</label>
      <textarea
        class="py-3 px-3 rounded shadow text-gray-700 border border-gray-100 focus:border-blue-400"
        placeholder="Your movie description"
        rows="5"
        name="description"
        required
        v-model="movie.description"
      ></textarea>
    </div>
    <fab-button icon="fas fa-save" :on-click="saveMovie" />
  </div>
</template>

<script>
import Movie from "../services/Movie";
export default {
  name: "MovieEdit",
  data: function() {
    return { movie: {}, insertMode: false };
  },
  methods: {
    isFormValid: function() {
      var isValid = true;
      if (!this.movie.title) {
        isValid = false;
        alert("Title required");
      }
      if (isValid && !this.movie.directedBy) {
        isValid = false;
        alert("DirectedBy required");
      }
      if (isValid && !this.movie.imageUrl) {
        isValid = false;
        alert("ImageUrl required");
      }
      if (isValid && !this.movie.description) {
        isValid = false;
        alert("Description required");
      }
      return isValid;
    },
    saveMovie: function() {
      if (!this.isFormValid()) return;
      if (this.insertMode) {
        Movie.addMovie(this.movie)
          .then(() => {
            this.$router.push({
              name: "list"
            });
          })
          .catch(error => {
            alert(error);
          });
      } else {
        Movie.editMovie(this.movie)
          .then(() => {
            this.$router.push({
              name: "detail",
              params: { id: this.movie.id }
            });
          })
          .catch(error => {
            alert(error);
          });
      }
    }
  },
  mounted: function() {
    this.insertMode = true;
    if (this.$route.params.id) {
      this.axios
        .get("http://localhost:3000/getMovie/".concat(this.$route.params.id))
        .then(response => {
          this.movie = response.data;
          this.insertMode = false;
        });
    }
  }
};
</script>
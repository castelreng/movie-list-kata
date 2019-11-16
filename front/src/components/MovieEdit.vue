<template>
  <div>
    <h3>MOVIE EDIT</h3>
    <div class="flex flex-col w-full mb-6">
      <label class="mb-2 font-bold text-gray-700">Title</label>
      <input
        type="text"
        class="py-3 px-3 rounded shadow text-gray-700 border border-gray-100 focus:border-blue-400"
        placeholder="Your movie title"
        name="title"
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
        v-model="movie.description"
      ></textarea>
    </div>
    <button
      type="button"
      v-on:click="saveMovie()"
      class="fixed bottom-0 right-0 mr-4 mb-4 rounded-full bg-purple-500 text-white w-12 h-12 text-lg shadow-2xl"
    >
      <i class="fas fa-save"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "MovieEdit",
  data: function() {
    return { movie: {}, insertMode: false };
  },
  methods: {
    saveMovie: function() {
      if (this.insertMode) {
        this.axios
          .post("http://localhost:3000/addMovie/", this.movie)
          .then(() => {
            this.$router.push({
              name: "list"
            });
          })
          .catch(error => {
            alert("Something goes wrong : ", error.message);
          });
      } else {
        this.axios
          .post("http://localhost:3000/editMovie/", this.movie)
          .then(() => {
            this.$router.push({
              name: "detail",
              params: { id: this.movie.id }
            });
          })
          .catch(error => {
            alert("Something goes wrong : ", error.message);
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
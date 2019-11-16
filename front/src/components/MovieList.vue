<template>
  <div>
    <h3>MOVIE LIST</h3>
    <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
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
      movies: [{ id: "1", title: "mala" }, { id: "2", title: "mamamam" }]
    };
  },
  mounted: function() {
    this.axios.get("http://localhost:3000/getMovies").then(response => {
      console.log(response.data);
    });
  }
};
</script>
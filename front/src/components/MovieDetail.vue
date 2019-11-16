<template>
  <h3>MOVIE DETAIL</h3>
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
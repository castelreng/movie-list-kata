<template>
  <button
    type="button"
    class="fixed bottom-0 right-0 mr-4 mb-4 rounded-full bg-purple-500 text-white w-12 h-12 text-lg shadow-2xl"
    v-on:click="onClick"
  >
    <i :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: "FabButton",
  props: {
    icon: String,
    onClick: Function
  }
};
</script>

<style>
</style>

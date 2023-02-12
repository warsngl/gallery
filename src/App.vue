<script>
import TheNavbar from "./components/TheNavbar.vue";
export default {
  components: { TheNavbar },
  created() {
    window.addEventListener("keydown", (e) => {
      e.key == "ArrowLeft" && (this.id > 1 ? --this.id : 29);
      e.key == "ArrowRight" && (this.id < 29 ? ++this.id : 1);
    });
  },
  unmounted() {
    window.removeEventListener("keydown");
  },
};
</script>

<template lang="pug">
router-link(to='/')
  img.w-12(src='./assets/gallery.svg')
.flex.flex-col.items-center.justify-center
  router-view
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #072227; */
  min-height: 100vh;
  padding: 20px;
  /* background: #d3dedc; */
}
</style>

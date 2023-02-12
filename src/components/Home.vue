<template lang="pug">
.flex.flex-wrap.justify-between
  router-link(:to="'/'+i" v-for='i in imgs')
    img.preview(:src="'./assets/a ('+i+').webp'")
</template>

<script>
export default {
  data: () => ({
    imgs: [],
  }),
  computed: {},
  methods: {
    nextpage() {
      this.id++;
    },
  },
  created() {
    this.imgs = [...Array(28)].map((e, i) => ++i);
  },
};
</script>

<style>
.preview {
  @apply w-[140px] m-2;
}
</style>

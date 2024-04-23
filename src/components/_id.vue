<template lang="pug">
div.flex(v-if='id')
  img.prev(:src="'./assets/a ('+prevID(id)+').webp'" @click='prevPage(id)')
  img.main(:src="'./assets/a ('+id+').webp'")
  img.next(:src="'./assets/a ('+nextID(id)+').webp'" @click='nextPage(id)')
</template>

<script>
export default {
  data: () => ({}),
  computed: {},
  methods: {
    prevID(id) {
      return id > 1 ? --id : 29;
    },
    nextID(id) {
      return id > 29 ? ++id : 1;
    },
  },
  created() {},
};
</script>

<style scoped>
img {
  @apply h-[90vh] rounded-lg;
}
.main {
  @apply z-20 shadow-[10px_15px_10px_5px_rgba(0,0,0,0.3)];
}
.prev,
.next {
  @apply opacity-30 absolute;
}
.prev {
  @apply left-0;
}
.next {
  @apply right-0;
}
</style>

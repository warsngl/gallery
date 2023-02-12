export default {
  computed: {
    id: {
      get() {
        return this.$route.params.id;
      },
      set(val) {
        this.$router.push('/' + val);
      },
    },
  },
  methods: {
    prevPage(val) {
      this.id = val > 1 ? --val : 29;
    },
    nextPage(val) {
      this.id = val < 29 ? ++val : 1;
    },
  },
};

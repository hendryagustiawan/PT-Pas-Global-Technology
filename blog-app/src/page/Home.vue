<template>
  <div class="container mb-5">
    <div class="row justify-content-between">
      <CardBlogs v-for="blog in blogs" :key="blog.id" :dataBlogs="blog" />
    </div>
  </div>
</template>

<script>
import CardBlogs from "../components/CardBlogs.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["blogs"]),
  },
  methods: {
    ...mapActions(["getBlogs"]),
  },
  components: {
    CardBlogs,
  },
  created() {
    this.$store.dispatch("getBlogs");
  },
};
</script>

<style></style>

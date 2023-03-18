<template>
  <div class="card mb-4 border-0" style="width: 18rem">
    <img :src="dataBlogs.imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h6 class="card-title" style="font-size: 18px">{{ dataBlogs.title }}</h6>
      <span class="fw-semibold">{{ dataBlogs.author }}</span>
      <p class="card-text" style="text-align: justify">{{ dataBlogs.description }}</p>
      <div class="d-flex justify-content-between">
        <router-link :to="`/edit/${dataBlogs.id}`">
          <button type="button" class="btn btn-success">Edit</button>
        </router-link>

        <button type="button" class="btn btn-danger" @click="handleDelete(dataBlogs.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardBlog",
  methods: {
    handleDelete(id) {
      this.$store.dispatch("deleteBlog", id);
    },
    changePage(id, dataBlogs) {
      // this.$router.push("/edit/" + id);
      this.$router.push({ path: "/edit/" + id, state: { dataBlogs } });
    },
  },
  props: { dataBlogs: Object },
};
</script>

<style></style>

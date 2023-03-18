<template>
  <div>
    <h3 class="text-center mb-3">EDIT BLOG</h3>
    <form class="container col-6 mb-5" @click.prevent="updateBlog">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Title</label>
        <input v-model="blog.title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Description</label>
        <input v-model="blog.description" type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Author</label>
        <input v-model="blog.author" type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Image</label>
        <input v-model="blog.imgUrl" type="text" class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      blog: { title: "sasa", author: "sas", imgUrl: "sa", description: "as" },
    };
  },
  methods: {
    updateBlog(event) {
      // this.$store.dispatch("updateBlog", {
      //   id: this.$route.params.id,
      //   data: this.blog,
      // });

      this.$store.dispatch("updateBlog", this.blog);
    },
    accommodationId() {
      // terima id params dari  router yang diperoleh dari card
      // console.log(this.$route.params.dataBlogs);
      // return this.$route.params;
    },
  },
  // created() {
  //   this.accommodationId();
  // },
};
</script>

<style></style>

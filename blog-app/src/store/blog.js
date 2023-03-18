import { createStore } from "vuex";
import axios from "../axios/http";

const store = createStore({
  state() {
    return {
      blogs: [],
    };
  },
  mutations: {
    setBlogs(state, payload) {
      // mutate state
      state.blogs = payload;
    },
    addNewBlog(state, payload) {
      state.blogs.push(payload);
    },
    deleteOneBlog(state, payload) {
      let index = state.blogs.findIndex((blog) => blog.id == payload);
      state.blogs.splice(index, 1);
    },
    updateBlog(state, payload) {
      Vue.set(state, "blogs", payload);
      // state.cart = state.cart.map((el) => {
      //   if (el.id == payload.id) {
      //     return payload;
      //   }

      //   return el;
      // });
    },
  },
  actions: {
    getBlogs(context) {
      axios
        .get("/")
        .then(({ data }) => {
          context.commit("setBlogs", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addBlogs(context, blog) {
      axios
        .post("/", { title: blog.title, author: blog.author, imgUrl: blog.imgUrl, description: blog.description })
        .then((response) => {
          context.commit("addNewBlog", {
            ...blog,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBlog({ commit }, id) {
      axios
        .delete("/" + id)
        .then(() => {
          commit("deleteOneBlog", id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async updateBlog({ commit }, id, blog) {
      await axios
        .put("/" + id, { title: blog.title, author: blog.author, imgUrl: blog.imgUrl, description: blog.description })
        .then((response) => {
          console.log(response);
          commit("updateBlog", response);
          this.router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export default store;

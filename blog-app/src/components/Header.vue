<template>
  <nav class="navbar navbar-expand-lg bg-light mb-5">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">BLOGWE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" style="text-decoration: none">
              <a class="nav-link fw-semibold" aria-current="page" href="#">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" style="text-decoration: none">
              <a class="nav-link fw-semibold" href="#">Post</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold" aria-current="page" href="#">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-semibold" href="#">About us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>

<template>
    <div>
      <nav class="navbar">
        <div class="container-fluid d-block">
          <div class="row">
            <div class="col-6 col-lg-2">
              <nuxt-link class="navbar-brand mx-2" to="/"><img src="../assets/img/logo.png" alt="CINEMAKUY"></nuxt-link>
            </div>
            <div class="col-6 col-lg-5">
              <form role="search" action="" method="">
                <input id="search_bar" class="form-control px-4" type="search" name="search" placeholder="Search Title / Theatre Here" aria-label="Search" v-model="searchQuery">
                <button class="btn btn-outline-success" type="submit" hidden @click.stop.prevent="goSearch()">Search</button>
              </form>
            </div>
            <div class="d-none d-lg-flex justify-content-end align-items-center col-lg-5">
              <nuxt-link to="/" class="mx-5"><img src="../assets/img/imax-logo.png" alt="IMAX"></nuxt-link>
              <nuxt-link to="/"><img src="../assets/img/dolby-atmos-logo.png" alt="DOLBY ATMOS"></nuxt-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppHeader",
    data() {
      return {
        searchQuery: "",
      }
    },
    methods: {
      goSearch() {
        this.$router.push({ path: "/s/" + this.searchQuery })
      }
    },
    created() {
      if (this.$route.params.query !== undefined) {
        this.searchQuery = this.$route.params.query
      } 
    }
  }
  </script>

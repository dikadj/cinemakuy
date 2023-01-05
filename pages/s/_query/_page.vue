<template>
    <div>
      <AppHeader />
      <div class="d-flex">
        <SideBar />
        <SearchResults />
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchPage",
    head() {
      return {
        title: "CINEMAKUY | Find movies & theatre you love",
      }
    }
  }
  </script>
  
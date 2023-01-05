<template>
    <div>
      <AppHeader />
      <div class="d-flex">
        <SideBar pageActive="/cinemakuy/coming-soon" />
        <UpcomingResults />
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  export default {
    name: "ComingSoonPage",
    head() {
      return {
        title: "CINEMAKUY | Find movies & theatre you love",
      }
    }
  }
  </script>
  
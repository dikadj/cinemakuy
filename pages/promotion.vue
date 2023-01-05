<template>
  <div>
    <AppHeader />
    <div class="d-flex">
      <SideBar pageActive="/cinemakuy/promotion" />
      <h1>This is a promotion page.</h1>
    </div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  head() {
    return {
      title: "CINEMAKUY | Find movies & theatre you love",
    }
  }
}
</script>

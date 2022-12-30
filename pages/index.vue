<template>
  <div>
    <AppHeader />
    <div class="d-flex">
      <SideBar />
      <MovResults />
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

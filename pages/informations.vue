<template>
  <div>
    <AppHeader />
    <div class="d-flex">
      <SideBar pageActive="/cinemakuy/informations" />
      <h1>This is an information page.</h1>
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

<template>
  <div>
    <AppHeader />
    <div class="d-flex">
      <SideBar pageActive="/cinemakuy/theatre" />
      <h1>This is a theatre page.</h1>
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

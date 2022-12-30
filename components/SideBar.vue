<template>
    <div class="d-none d-lg-flex sidebar">
      <nav class="d-flex flex-column w-100 my-3">
        <nuxt-link to="/now-playing" class="sidebar_active nav-link text-light d-flex align-items-center"><span class="px-4">Now Playing</span></nuxt-link>
        <nuxt-link to="/coming-soon" class="nav-link text-light d-flex align-items-center"><span class="px-4">Coming Soon</span></nuxt-link>
        <nuxt-link to="/theatre" class="nav-link text-light d-flex align-items-center"><span class="px-4">Theatre</span></nuxt-link>
        <nuxt-link to="/promotion" class="nav-link text-light d-flex align-items-center"><span class="px-4">Promotion</span></nuxt-link>
        <nuxt-link to="/informations" class="nav-link text-light d-flex align-items-center"><span class="px-4">Informations</span></nuxt-link>
      </nav>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

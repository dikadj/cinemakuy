<template>
  <div>
    <AppHeader />
    <div class="d-flex">
      <SideBar />
      <div class="movies d-flex m-5">
        <div class="movies_wrapper">
          <div class="mov_detail mb-5">
            <h3>Kimetsu No Yaiba Mugen Train (17+)</h3>
            <div class="d-flex">
              <img src="" alt="kimetsu">
              <div>
                <ul>
                  <li>Release Date: </li>
                  <li>Language: </li>
                  <li>Genre: </li>
                  <li>Cast & Crew: </li>
                  <li>Director: </li>
                  <li>Length: </li>
                </ul>
                <h3>SINOPSIS</h3>
                <P>Bahasa Indonesia</P>
                <p>Konser orkestra serial anime televisi “Demon Slayer: Kimetsu no Yaiba” membawakan secara langsung berbagai macam musik yang digunakan dalam animenya. Cuplikan-cuplikan dari anime tersebut juga akan diperlihatkan dalam sebuah layar, sehingga penonton dapat lebih menikmati dunia dalam kisahnya.</P>
                <nuxt-link class="btn btn-danger" to="/">Buy Ticket</nuxt-link>
                <button class="btn btn-danger">Watch Trailer</button>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <h3 class="mb-5">Now Playing</h3>
            <div class="row">
              <div class="col-6 col-lg-4 bg-dark mov d-flex justify-content-center align-items-center" style="height: 400px; border: 1px solid rgba(255,255,255,.5);">
                movie 1
              </div>
              <div class="col-6 col-lg-4 bg-dark mov d-flex justify-content-center align-items-center" style="height: 400px; border: 1px solid rgba(255,255,255,.5);">
                movie 2
              </div>
              <div class="col-6 col-lg-4 bg-dark mov d-flex justify-content-center align-items-center" style="height: 400px; border: 1px solid rgba(255,255,255,.5);">
                movie 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  head() {
    return {
      title: "CINEMAKUY | Find movies & theatre you love",
    }
  }
}
</script>

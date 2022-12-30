<template>
    <div class="movies d-flex">
        <div class="movies_wrapper">
            <div class="container-fluid">
                <div class="row p-5">
                    <div v-for="mov in movies" :key="mov.id" class="col-6 col-lg-4 mb-5">
                        <nuxt-link :to="'/m/' + mov.imdbID" class="text-light">
                            <div class="mov d-flex overflow-hidden mov_img mb-3" style="height: 400px;">
                                <img :src="mov.Poster" :alt="mov.Title" height="110%">
                            </div>
                            <h5 class="text-center">{{ mov.Title }}  ({{ mov.Rated ? mov.Rated.replace("TV-", "").replace("PG-", "") : mov.Rated }}+)</h5>
                        </nuxt-link>
                    </div>
                    <div class="col-6 col-lg-4 mb-5">
                        <nuxt-link :to="'/m/' + moviesNext.imdbID" class="text-light">
                            <div class="mov d-flex overflow-hidden mov_img mb-3" style="height: 400px;">
                                <img :src="moviesNext.Poster" :alt="moviesNext.Title" height="110%">
                            </div>
                            <h5 class="text-center">{{ moviesNext.Title }}  ({{ moviesNext.Rated ? moviesNext.Rated.replace("TV-", "").replace("PG-", "") : moviesNext.Rated }}+)</h5>
                        </nuxt-link>
                    </div>
                </div>
                <div class="d-flex justify-content-center my-5">
                    <nav aria-label="..." class="d-flex">
                        <nuxt-link class="mx-3 text-danger btn " :to="'/p/' + (parseInt(currentPage)-1)" :style="(parseInt(currentPage) === 1 ? 'pointer-events: none; color: rgba(255,255,255,.5)!important;' : '') ">Sebelumnya</nuxt-link>
                        <nuxt-link :class="'mx-3 text-danger btn ' + ((parseInt(currentPage) === 1) ? 'page_active' : '')" to="/p/1"><span class="px-1">1</span></nuxt-link>
                        <div :class="parseInt(currentPage) >= 3 ? 'd-none' : ''">
                            <nuxt-link :class="'mx-3 text-danger btn ' + ((parseInt(currentPage) === 2) ? 'page_active' : '')" to="/p/2">2</nuxt-link>
                            <nuxt-link :class="'mx-3 text-danger btn ' + ((parseInt(currentPage) === 3) ? 'page_active' : '')" to="/p/3">3</nuxt-link>
                        </div>
                        <span class="btn text-danger" style="pointer-events: none;">...</span>
                        <div :class="parseInt(currentPage) < 3 ? 'd-none' : ''">
                            <nuxt-link :class="'mx-3 text-danger btn ' + ((parseInt(currentPage) >= 3) && (parseInt(currentPage) < (parseInt(totalPages) - 1)) ? 'page_active' : '')" :to="'/p/' + parseInt(currentPage)">{{ parseInt(currentPage) === parseInt(totalPages) ? (parseInt(currentPage) - 2) : parseInt(currentPage) === (parseInt(totalPages) - 1) ? parseInt(currentPage) - 2 : currentPage }}</nuxt-link>
                            <nuxt-link :class="'mx-3 text-danger btn ' + (parseInt(currentPage) === (parseInt(totalPages)-1) ? 'page_active' : '')" :to="'/p/' + (parseInt(currentPage)+1)">{{ parseInt(totalPages)-1 }}</nuxt-link>
                        </div>
                        <nuxt-link :class="'mx-3 text-danger btn ' + (parseInt(currentPage) === parseInt(totalPages) ? 'page_active' : '' )" :to="'/p/' + parseInt(totalPages)">{{parseInt(totalPages)}}</nuxt-link>
                        <nuxt-link class="mx-3 text-danger btn " :to="'/p/' + (parseInt(currentPage)+1)" :style="((parseInt(currentPage) === parseInt(totalPages)) ? 'pointer-events: none; color: rgba(255,255,255,.5)!important;' : '') ">Selanjutnya</nuxt-link>
                    </nav>
                </div>
                <!-- <h1>{{ currentPage }}</h1> -->
            </div>
        </div>
      </div>
</template>

<script>
import axios from "axios"

export default {
    name: "MovResults",
    data() {
        return {
            movies: [],
            moviesNext: {},
            totalPages: 0,
            currentPage: 1,
        }
    },
    async created() {

        
        try {
            
            // Now Playing

            // const page = parseInt(this.currentPage)

            await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&page=${parseInt(this.currentPage)}`, { headers: { "Accept": "application/json" } })

            .then((res) => {
                const np = []

                res.data.results.forEach((mov) => {
                    axios.get(`https://api.themoviedb.org/3/movie/${mov.id}?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US`, { "Accept": "application/json" })
                    .then((res) => {
                        // console.log(res.data)
                        axios.get(`https://www.omdbapi.com/?apikey=271ab1b1&i=${res.data.imdb_id}`, { headers: { 'Accept': 'application/json' } })
                        .then((res) => {
                            np.push(res.data)
                        })
                    })
                })
                
                
                this.movies = np
                this.totalPages = res.data.total_pages
                // console.log(res.data)
                
            })

            // get next page
            await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&page=${(parseInt(this.currentPage)+1)}`, { headers: { "Accept": "application/json" } })

            .then((res) => {

                axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[0].id}?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US`, { "Accept": "application/json" })
                
                .then(result => {
                    axios.get(`https://www.omdbapi.com/?apikey=271ab1b1&i=${result.data.imdb_id}`, { headers: { 'Accept': 'application/json' } })
                    .then((resultA) => {
                        this.moviesNext = resultA.data
                        // console.log(resultA.data)
                    })
                    // console.log(result.data)
                })
                
            })

            this.currentPage = this.$route.params.page

            
                
        } catch (err) {
            console.log(err)
        }
    }
}
</script>

<template>
    <div class="movies d-flex">
        <div class="movies_wrapper">
            <div class="container-fluid">
                <div class="row p-5">
                    <h3 :class="totalPages === 0 ? '' : 'd-none'">No results found...</h3>
                    <div v-for="mov in movies" :key="mov.id" :class="`col-6 col-lg-4 mb-5 ${mov.imdbID === undefined ? 'd-none' : ''}`">
                        <nuxt-link :to="'/m/' + mov.imdbID" class="text-light">
                            <div class="mov d-flex overflow-hidden mov_img mb-3" style="height: 400px;">
                                <img :src="mov.Poster" :alt="mov.Title" height="110%">
                            </div>
                            <h5 class="text-center">{{ mov.Title }}  ({{ mov.Rated ? mov.Rated.replace("TV-", "").replace("PG-", "") + "+" : mov.Rated }})</h5>
                        </nuxt-link>
                    </div>
                    <div :class="`col-6 col-lg-4 mb-5 d-none ${moviesNext.imdbID === undefined ? 'd-lg-none' : 'd-lg-block'}`">
                        <nuxt-link :to="'/m/' + moviesNext.imdbID" class="text-light">
                            <div class="mov d-flex overflow-hidden mov_img mb-3" style="height: 400px;">
                                <img :src="moviesNext.Poster" :alt="moviesNext.Title" height="110%">
                            </div>
                            <h5 class="text-center">{{ moviesNext.Title }}  ({{ moviesNext.Rated ? moviesNext.Rated.replace("TV-", "").replace("PG-", "") + "+" : moviesNext.Rated }})</h5>
                        </nuxt-link>
                    </div>
                </div>
                <div class="d-flex justify-content-center my-5">
                    <nav aria-label="..." class="d-flex">
                        <button :class="'mx-2 d-flex justify-content-center align-items-center pagination_direction btn ' + (parseInt(currentPage) === 1 ? 'pagination_direction_off' : '')" @click="setCurrentPage(parseInt(currentPage) - 1)">
                            Sebelumnya
                        </button>
                        <button :class="'mx-2 d-flex justify-content-center align-items-center pagination_number btn ' + (parseInt(currentPage) === 1 ? 'current_page' : '')" @click="setCurrentPage(1)">
                            1
                        </button>
                        <div :class="'mx-2 pagination_dots ' + (currentPage <= 2 ? 'd-none' : '')">
                            <span>...</span>
                        </div>
                        <div class="d-flex">
                            <button
                            :class="'mx-2 justify-content-center align-items-center pagination_number btn ' + ((parseInt(totalPages) < 3) ? 'd-none ' : 'd-flex ') + (parseInt(currentPage) === parseInt(getCurrentPage(currentPage)) ? 'current_page' : '')" @click="setCurrentPage(getCurrentPage(currentPage))">
                                {{ getCurrentPage(currentPage) }}
                            </button>
                            <button
                            :class="'mx-2 justify-content-center align-items-center pagination_number btn ' + ((parseInt(totalPages) < 4) ? 'd-none ' : 'd-flex ') + (parseInt(currentPage) === (parseInt(getCurrentPage(currentPage)) + 1) ? 'current_page' : '')" @click="setCurrentPage(parseInt(getCurrentPage(currentPage)) + 1)">
                                {{ parseInt(getCurrentPage(currentPage)) + 1 }}
                            </button>
                            <button
                            :class="'mx-2 justify-content-center align-items-center pagination_number btn ' + ((parseInt(totalPages) < 5) ? 'd-none ' : 'd-flex ') + (parseInt(currentPage) === (parseInt(getCurrentPage(currentPage)) + 2) ? 'current_page' : '')" @click="setCurrentPage(parseInt(getCurrentPage(currentPage)) + 2)">
                                {{ parseInt(getCurrentPage(currentPage)) + 2 }}
                            </button>
                        </div>
                        <div :class="'mx-2 pagination_dots ' + (parseInt(currentPage) >= (parseInt(totalPages) - 3) ? 'd-none' : '')">
                            <span>...</span>
                        </div>
                        <button :class="'mx-2 justify-content-center align-items-center pagination_number btn ' + ((parseInt(totalPages) === 1) ? 'd-none ' : 'd-flex ') + (parseInt(currentPage) === parseInt(totalPages) ? 'current_page' : '')" @click="setCurrentPage(parseInt(totalPages))">
                            {{ totalPages }}
                        </button>
                        <button :class="'mx-2 d-flex justify-content-center align-items-center pagination_direction btn ' + (parseInt(currentPage) === parseInt(totalPages) ? 'pagination_direction_off' : '')" @click="setCurrentPage(parseInt(currentPage) + 1)">
                            Selanjutnya
                        </button>
                    </nav>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import axios from "axios"

export default {
    name: "SearchResults",
    // props: ['activePage'],
    data() {
        return {
            movies: [],
            moviesNext: {},
            totalPages: 0,
            currentPage: 1,
        }
    },
    methods: {
        getCurrentPage(page) {
            return (parseInt(page) === 1) ? '2' 
                : (parseInt(page) > 1) && (parseInt(page) < (parseInt(this.totalPages) - 3)) 
                ? page 
                : parseInt(this.totalPages) - 3
        },
        setCurrentPage(to) {
            this.currentPage = to
            this.setMovies(this.$route.params.query, to)
        },
        async setMovies(query, currentPage) {
            
            // Now Playing

            // const page = parseInt(this.currentPage)

            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&include_adult=false&query=${query}&page=${currentPage}`, { headers: { "Accept": "application/json" } })

            .then((res) => {
                const np = []
                console.log(res.data.results)

                res.data.results.forEach((mov) => {
                    axios.get(`https://api.themoviedb.org/3/movie/${mov.id}?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US`, { "Accept": "application/json" })
                    .then((res) => {
                        // console.log(res.data)
                        if (res.data.imdb_id !== null) {
                            axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&i=${res.data.imdb_id}`, { headers: { 'Accept': 'application/json' } })
                            .then((res) => {
                                np.push(res.data)
                                // console.log(res.data)
                            })
                        } else {
                            // console.log("no")
                            np.push({
                                Title: res.data.title,
                                imdbID: res.data.id,
                                Rated: "13",
                                Poster: "https://image.tmdb.org/t/p/original" + res.data.poster_path,
                                Released: res.data.release_date,
                                Language: res.data.original_language,
                                Genre: res.data.genre_ids,
                                Actors: "",
                                Writer: "",
                                Director: "",
                                Runtime: res.data.runtime + " jam",
                                Plot: res.data.overview
                            })
                        }
                    })
                })
                
                
                this.movies = np
                this.totalPages = res.data.total_pages
                // console.log(res.data)
                
            })

            // get next page
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&include_adult=false&query=${query}&page=${parseInt(currentPage) + 1}`, { headers: { "Accept": "application/json" } })

            .then((res) => {

                axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[0].id}?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US`, { "Accept": "application/json" })
                
                .then(result => {
                    axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&i=${result.data.imdb_id}`, { headers: { 'Accept': 'application/json' } })
                    .then((resultA) => {
                        this.moviesNext = resultA.data
                        // console.log(resultA.data)
                    })
                    // console.log(result.data)
                })
                
            })
            
            // console.log(this.currentPage)
            // console.log(this.movies)
            // console.log(`https://api.themoviedb.org/3/movie/now_playing?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&page=${(parseInt(this.currentPage)+1)}`)
            // console.log(this.$route.params.page)

        }
    },
    created() {

        try {   
            this.setMovies(this.$route.params.query, this.currentPage)
        } catch (err) {
            console.log(err)
        }
    }
}
</script>

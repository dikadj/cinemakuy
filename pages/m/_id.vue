<template>
    <div>
        <AppHeader />
        <div class="d-flex">
            <SideBar />
            <div class="movies d-flex m-5">
                <div class="movies_wrapper">
                <div class="mov_detail mb-5">
                    <h3 class="mb-4">{{ movie.Title }} ({{ movie.Rated ? movie.Rated.replace("TV-", "").replace("PG-", "") : movie.Rated }}+)</h3>
                    <div class="d-flex">
                        <div>
                            <div class="mov d-flex justify-content-center align-items-center overflow-hidden mov_img" style="width: 300px;">
                                <img :src="movie.Poster" :alt="movie.Title" width="330px">
                            </div>
                        </div>
                        <div class="ml-4 mr-5 d-flex flex-column justify-content-between">
                            <div>
                                <ul class="list-unstyled">
                                    <li>Release Date: {{ movie.Released }}</li>
                                    <li>Language: {{ movie.Language }}</li>
                                    <li>Genre: {{ movie.Genre }}</li>
                                    <li>Cast & Crew: {{ movie.Actors }}, {{ movie.Writer }}</li>
                                    <li>Director: {{ movie.Director }}</li>
                                    <li>Length: {{ movie.Runtime }}</li>
                                </ul>
                                <h3>SINOPSIS</h3>
                                <p>{{ synopsis }}</P>
                            </div>
                            <div>
                                <nuxt-link class="btn btn-danger py-3 px-4 mr-3 btn_action" to="/"><strong>Buy Ticket</strong></nuxt-link>
                                <button class="btn btn-danger py-3 px-4 btn_action"><strong>Watch Trailer</strong></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <h3 class="mb-5">Now Playing</h3>
                    <div class="np3 d-flex">
                        <nuxt-link class="mov d-flex justify-content-center align-items-center overflow-hidden mov_img mr-5" v-for="mov in nowPlaying" :key="mov.id" :to="mov.imdbID">
                            <img :src="mov.Poster" :alt="mov.Title" height="110%">
                        </nuxt-link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter />
    </div>
</template>  

<script>
    import axios from "axios"

    export default {
        name: "MovDetail",
        head() {
            return {
                title: "CINEMAKUY | Find movies & theatre you love"
            }
        },
        data() {
            return {
                movie: {},
                synopsis: "",
                nowPlaying: []
            }
        },
        methods: {
            handleTranslate() {
                const sourceText = this.movie.Plot
                const sourceLang = 'en'
                const targetLang = 'id'
                // console.log(this.movie);
                
                // Translate Synopsis to bahasa Indonesia
                axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(sourceText)}`, { 'Accept': 'application/json' }).then((res) => {
                    // console.log(res.data[0][0][0])
                    this.synopsis = res.data[0][0][0]
                })
            }
        },
        async created() {

            try {
                // Movie Details
                await axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&i=${this.$route.params.id}`, { headers: { 'Accept': 'application/json' } })
                .then((res) => {
                    // console.log(res.data.Response)
                    if (res.data.Response === "True") {
                        this.movie = res.data
                        // console.log(res.data)
                    } else {
                        // console.log(this.$route.params.id)
                        axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US`, { "Accept": "application/json" })
                        .then((res) => {
                            // console.log(res.data)
                            this.movie = {
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
                                Runtime: res.data.runtime,
                                Plot: res.data.overview
                            }
                            // this.synopsis = res.data.overview
                        })
                        .then(() => {
                            this.handleTranslate()
                        })
                    }
                })
                .then(() => {
                    this.handleTranslate()
                })

                // Now Playing
                await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&page=1", { headers: { "Accept": "application/json" } })

                .then((res) => {
                    const np = []

                    for (let i = 0; i < 3; i++) {
                    
                        axios.get(`https://api.themoviedb.org/3/movie/${res.data.results[i].id}?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US`, { "Accept": "application/json" })
                        .then((res) => {
                            // console.log(res.data)
                            axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&i=${res.data.imdb_id}`, { headers: { 'Accept': 'application/json' } })
                            .then((res) => {
                                np.push(res.data)
                            })
                        })
                    }
                    
                    
                    this.nowPlaying = np
                    // console.log(this.nowPlaying)
                })
                    
            } catch (err) {
                console.log(err)
            }
        }
    }
</script>
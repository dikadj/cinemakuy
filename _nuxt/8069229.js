(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,6],{337:function(t,e,n){t.exports=n.p+"img/logo.1e05fcb.png"},338:function(t,e,n){t.exports=n.p+"img/imax-logo.e87caf6.png"},339:function(t,e,n){t.exports=n.p+"img/dolby-atmos-logo.41ae6ca.png"},340:function(t,e,n){"use strict";n.r(e);var r={name:"AppHeader",data:function(){return{searchQuery:""}},methods:{inputSearch:function(t){this.searchQuery=t.target.value}},created:function(){void 0!==this.$route.params.query&&(this.searchQuery=this.$route.params.query)}},c=n(66),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container-fluid d-block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-lg-2"},[e("nuxt-link",{staticClass:"navbar-brand mx-2",attrs:{to:"/"}},[e("img",{attrs:{src:n(337),alt:"CINEMAKUY"}})])],1),t._v(" "),e("div",{staticClass:"col-6 col-lg-5"},[e("form",{attrs:{role:"search",action:"/s/"+t.searchQuery,method:"post"}},[e("input",{staticClass:"form-control px-4",attrs:{id:"search_bar",type:"search",name:"search",placeholder:"Search Title / Theatre Here","aria-label":"Search"},domProps:{value:t.searchQuery},on:{input:t.inputSearch}}),t._v(" "),e("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit",hidden:""}},[t._v("Search")])])]),t._v(" "),e("div",{staticClass:"d-none d-lg-flex justify-content-end align-items-center col-lg-5"},[e("nuxt-link",{staticClass:"mx-5",attrs:{to:"/"}},[e("img",{attrs:{src:n(338),alt:"IMAX"}})]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(339),alt:"DOLBY ATMOS"}})])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){"use strict";n.r(e);var r={name:"SideBar",props:["pageActive"]},c=n(66),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-none d-lg-flex sidebar"},[e("nav",{staticClass:"d-flex flex-column w-100 my-3"},[e("nuxt-link",{class:("/cinemakuy/"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/"}},[e("span",{staticClass:"px-4"},[t._v("Now Playing")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/coming-soon"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/coming-soon"}},[e("span",{staticClass:"px-4"},[t._v("Coming Soon")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/theatre"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/theatre"}},[e("span",{staticClass:"px-4"},[t._v("Theatre")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/promotion"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/promotion"}},[e("span",{staticClass:"px-4"},[t._v("Promotion")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/informations"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/informations"}},[e("span",{staticClass:"px-4"},[t._v("Informations")])])],1)])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);var r={name:"AppFooter"},c=n(66),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer d-flex align-items-center"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-12 col-lg-8"},[e("p",[t._v("© 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya")])])])])])}],!1,null,null,null);e.default=component.exports},343:function(t,e,n){"use strict";n.r(e);n(11),n(21);var r=n(32),c=(n(84),n(13),n(1),n(3),n(85)),o=n.n(c),l={name:"MovResults",props:["activePage"],data:function(){return{movies:[],moviesNext:{},totalPages:0,currentPage:1}},methods:{getCurrentPage:function(t){return 1===parseInt(t)?"2":parseInt(t)>1&&parseInt(t)<parseInt(this.totalPages)-3?t:parseInt(this.totalPages)-3},setCurrentPage:function(t){this.currentPage=t,this.setMovies(this.activePage,t)},setMovies:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&page=").concat(parseInt(e)),{headers:{Accept:"application/json"}}).then((function(t){var e=[];t.data.results.forEach((function(t){o.a.get("https://api.themoviedb.org/3/movie/".concat(t.id,"?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US"),{Accept:"application/json"}).then((function(t){null!==t.data.imdb_id?o.a.get("https://www.omdbapi.com/?apikey=271ab1b1&i=".concat(t.data.imdb_id),{headers:{Accept:"application/json"}}).then((function(t){e.push(t.data)})):e.push({Title:t.data.title,imdbID:t.data.id,Rated:"13",Poster:"https://image.tmdb.org/t/p/original"+t.data.poster_path,Released:t.data.release_date,Language:t.data.original_language,Genre:t.data.genre_ids,Actors:"",Writer:"",Director:"",Runtime:t.data.runtime+" jam",Plot:t.data.overview})}))})),n.movies=e,n.totalPages=t.data.total_pages}));case 2:return r.next=4,o.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US&page=").concat(parseInt(e)+1),{headers:{Accept:"application/json"}}).then((function(t){o.a.get("https://api.themoviedb.org/3/movie/".concat(t.data.results[0].id,"?api_key=d1cb8307b2e2ea609451dc1aa7ac7996&language=en-US"),{Accept:"application/json"}).then((function(t){o.a.get("https://www.omdbapi.com/?apikey=271ab1b1&i=".concat(t.data.imdb_id),{headers:{Accept:"application/json"}}).then((function(t){n.moviesNext=t.data}))}))}));case 4:case"end":return r.stop()}}),r)})))()}},created:function(){try{this.setMovies(this.activePage,this.currentPage)}catch(t){console.log(t)}}},d=n(66),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"movies d-flex"},[e("div",{staticClass:"movies_wrapper"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row p-5"},[t._l(t.movies,(function(n){return e("div",{key:n.id,class:"col-6 col-lg-4 mb-5 ".concat(void 0===n.imdbID?"d-none":"")},[e("nuxt-link",{staticClass:"text-light",attrs:{to:"/m/"+n.imdbID}},[e("div",{staticClass:"mov d-flex overflow-hidden mov_img mb-3",staticStyle:{height:"400px"}},[e("img",{attrs:{src:n.Poster,alt:n.Title,height:"110%"}})]),t._v(" "),e("h5",{staticClass:"text-center"},[t._v(t._s(n.Title)+"  ("+t._s(n.Rated?n.Rated.replace("TV-","").replace("PG-","")+"+":n.Rated)+")")])])],1)})),t._v(" "),e("div",{class:"col-6 col-lg-4 mb-5 d-none ".concat(void 0===t.moviesNext.imdbID?"d-lg-none":"d-lg-block")},[e("nuxt-link",{staticClass:"text-light",attrs:{to:"/m/"+t.moviesNext.imdbID}},[e("div",{staticClass:"mov d-flex overflow-hidden mov_img mb-3",staticStyle:{height:"400px"}},[e("img",{attrs:{src:t.moviesNext.Poster,alt:t.moviesNext.Title,height:"110%"}})]),t._v(" "),e("h5",{staticClass:"text-center"},[t._v(t._s(t.moviesNext.Title)+"  ("+t._s(t.moviesNext.Rated?t.moviesNext.Rated.replace("TV-","").replace("PG-","")+"+":t.moviesNext.Rated)+")")])])],1)],2),t._v(" "),e("div",{staticClass:"d-flex justify-content-center my-5"},[e("nav",{staticClass:"d-flex",attrs:{"aria-label":"..."}},[e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_direction btn "+(1===parseInt(t.currentPage)?"pagination_direction_off":""),on:{click:function(e){t.setCurrentPage(parseInt(t.currentPage)-1)}}},[t._v("\n                        Sebelumnya\n                    ")]),t._v(" "),e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_number btn "+(1===parseInt(t.currentPage)?"current_page":""),on:{click:function(e){return t.setCurrentPage(1)}}},[t._v("\n                        1\n                    ")]),t._v(" "),e("div",{class:"mx-2 pagination_dots "+(t.currentPage<=2?"d-none":"")},[e("span",[t._v("...")])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_number btn "+(parseInt(t.currentPage)===parseInt(t.getCurrentPage(t.currentPage))?"current_page":""),on:{click:function(e){t.setCurrentPage(t.getCurrentPage(t.currentPage))}}},[t._v("\n                            "+t._s(t.getCurrentPage(t.currentPage))+"\n                        ")]),t._v(" "),e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_number btn "+(parseInt(t.currentPage)===parseInt(t.getCurrentPage(t.currentPage))+1?"current_page":""),on:{click:function(e){t.setCurrentPage(parseInt(t.getCurrentPage(t.currentPage))+1)}}},[t._v("\n                            "+t._s(parseInt(t.getCurrentPage(t.currentPage))+1)+"\n                        ")]),t._v(" "),e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_number btn "+(parseInt(t.currentPage)===parseInt(t.getCurrentPage(t.currentPage))+2?"current_page":""),on:{click:function(e){t.setCurrentPage(parseInt(t.getCurrentPage(t.currentPage))+2)}}},[t._v("\n                            "+t._s(parseInt(t.getCurrentPage(t.currentPage))+2)+"\n                        ")])]),t._v(" "),e("div",{class:"mx-2 pagination_dots "+(parseInt(t.currentPage)>=parseInt(t.totalPages)-3?"d-none":"")},[e("span",[t._v("...")])]),t._v(" "),e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_number btn "+(parseInt(t.currentPage)===parseInt(t.totalPages)?"current_page":""),on:{click:function(e){t.setCurrentPage(parseInt(t.totalPages))}}},[t._v("\n                        "+t._s(t.totalPages)+"\n                    ")]),t._v(" "),e("button",{class:"mx-2 d-flex justify-content-center align-items-center pagination_direction btn "+(parseInt(t.currentPage)===parseInt(t.totalPages)?"pagination_direction_off":""),on:{click:function(e){t.setCurrentPage(parseInt(t.currentPage)+1)}}},[t._v("\n                        Selanjutnya\n                    ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var r={name:"HomePage",head:function(){return{title:"CINEMAKUY | Find movies & theatre you love"}}},c=n(66),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("AppHeader"),t._v(" "),e("div",{staticClass:"d-flex"},[e("SideBar",{attrs:{pageActive:"/cinemakuy/"}}),t._v(" "),e("MovResults",{attrs:{activePage:"now_playing"}})],1),t._v(" "),e("AppFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHeader:n(340).default,SideBar:n(341).default,MovResults:n(343).default,AppFooter:n(342).default})}}]);
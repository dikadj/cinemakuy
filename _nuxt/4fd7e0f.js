(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,6],{337:function(t,e,n){t.exports=n.p+"img/logo.1e05fcb.png"},338:function(t,e,n){t.exports=n.p+"img/imax-logo.e87caf6.png"},339:function(t,e,n){t.exports=n.p+"img/dolby-atmos-logo.41ae6ca.png"},340:function(t,e,n){"use strict";n.r(e);var r={name:"AppHeader",data:function(){return{searchQuery:""}},methods:{inputSearch:function(t){this.searchQuery=t.target.value}},created:function(){void 0!==this.$route.params.query&&(this.searchQuery=this.$route.params.query)}},l=n(66),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"container-fluid d-block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-lg-2"},[e("nuxt-link",{staticClass:"navbar-brand mx-2",attrs:{to:"/"}},[e("img",{attrs:{src:n(337),alt:"CINEMAKUY"}})])],1),t._v(" "),e("div",{staticClass:"col-6 col-lg-5"},[e("form",{attrs:{role:"search",action:"/s/"+t.searchQuery,method:"post"}},[e("input",{staticClass:"form-control px-4",attrs:{id:"search_bar",type:"search",name:"search",placeholder:"Search Title / Theatre Here","aria-label":"Search"},domProps:{value:t.searchQuery},on:{input:t.inputSearch}}),t._v(" "),e("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit",hidden:""}},[t._v("Search")])])]),t._v(" "),e("div",{staticClass:"d-none d-lg-flex justify-content-end align-items-center col-lg-5"},[e("nuxt-link",{staticClass:"mx-5",attrs:{to:"/"}},[e("img",{attrs:{src:n(338),alt:"IMAX"}})]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(339),alt:"DOLBY ATMOS"}})])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){"use strict";n.r(e);var r={name:"SideBar",props:["pageActive"]},l=n(66),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-none d-lg-flex sidebar"},[e("nav",{staticClass:"d-flex flex-column w-100 my-3"},[e("nuxt-link",{class:("/cinemakuy/"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/"}},[e("span",{staticClass:"px-4"},[t._v("Now Playing")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/coming-soon"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/coming-soon"}},[e("span",{staticClass:"px-4"},[t._v("Coming Soon")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/theatre"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/theatre"}},[e("span",{staticClass:"px-4"},[t._v("Theatre")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/promotion"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/promotion"}},[e("span",{staticClass:"px-4"},[t._v("Promotion")])]),t._v(" "),e("nuxt-link",{class:("/cinemakuy/informations"===t.pageActive?"sidebar_active":"")+" nav-link text-light d-flex align-items-center",attrs:{to:"/informations"}},[e("span",{staticClass:"px-4"},[t._v("Informations")])])],1)])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);var r={name:"AppFooter"},l=n(66),component=Object(l.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer d-flex align-items-center"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col-12 col-lg-8"},[e("p",[t._v("© 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya")])])])])])}],!1,null,null,null);e.default=component.exports},347:function(t,e,n){"use strict";n.r(e);var r={name:"HomePage",head:function(){return{title:"CINEMAKUY | Find movies & theatre you love"}}},l=n(66),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("AppHeader"),t._v(" "),e("div",{staticClass:"d-flex"},[e("SideBar",{attrs:{pageActive:"/cinemakuy/promotion"}}),t._v(" "),e("h1",[t._v("This is a promotion page.")])],1),t._v(" "),e("AppFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHeader:n(340).default,SideBar:n(341).default,AppFooter:n(342).default})}}]);
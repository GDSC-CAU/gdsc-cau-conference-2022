(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{309:function(t,e,n){var map={"./ehealthcare.png":310,"./hyojason.PNG":311,"./moa.png":312,"./thumbnail-example.png":313};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=309},310:function(t,e,n){t.exports=n.p+"img/ehealthcare.a2b9db4.png"},311:function(t,e,n){t.exports=n.p+"img/hyojason.c8df498.PNG"},312:function(t,e,n){t.exports=n.p+"img/moa.ec32291.png"},313:function(t,e,n){t.exports=n.p+"img/thumbnail-example.e3a0986.png"},342:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("4c804612",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";n(342)},353:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".thumbnail[data-v-1bfc465f]{width:400px;height:200px;-o-object-fit:cover;object-fit:cover}.wfull[data-v-1bfc465f]{width:100vw}",""]),r.locals={},t.exports=r},404:function(t,e,n){"use strict";n.r(e);n(35),n(50);var r=n(9),o=(n(49),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("conferences").sortBy("desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(352),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wfull z-0 section h-content bg-semi-black"},[t._m(0),t._v(" "),e("div",{staticClass:"max-w-7xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 sm:gap-7 pb-18 md:pb-8"},t._l(t.articles,(function(article){return e("div",{key:article,staticClass:"rounded-xl group border-2 border-[#202124] hover:border-[#E8EAED]"},[e("div",{staticClass:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-semi-black px-4 py-4"},[e("nuxt-link",{attrs:{to:"/conferences/".concat(article.slug)}},[e("div",[e("img",{staticClass:"thumbnail rounded-xl border-none",attrs:{src:n(309)("./".concat(article.img))}})]),t._v(" "),e("div",{staticClass:"px-4 py-4"},[e("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-sm text-semi-white"},[t._v(t._s(article.author))]),t._v(" "),e("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-xl font-medium poppins text-semi-white"},[t._v(t._s(article.title))]),t._v(" "),e("p",{staticClass:"text-sm md:text-base text-semi-white custom-text"},[t._v(t._s(article.description))])])])],1)])})),0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6"},[e("div",{staticClass:"pb-6 text-3xl md:text-5xl font-semibold text-semi-white"},[t._v("\n            Conference\n        ")]),t._v(" "),e("div",{staticClass:"font-normal text-base md:text-xl text-semi-white"},[t._v("\n            GDSC CAU Conference\n        ")])])}],!1,null,"1bfc465f",null);e.default=component.exports}}]);
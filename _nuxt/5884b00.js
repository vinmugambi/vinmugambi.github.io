(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{224:function(t,e,n){"use strict";function r(t){return new Date(t).toLocaleDateString("en-UK",{year:"numeric",month:"short",day:"numeric"})}n.d(e,"a",(function(){return r}))},249:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(24),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("brazil").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:n(224).a}}),l=n(33),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("aside",{staticClass:"flex space-x-4 my-24"},[t._m(0),t._v(" "),e("dl",{staticClass:"self-center"},[e("dt",[t._v("\n        Personal blog by\n        "),e("nuxt-link",{staticClass:"link",attrs:{to:"/about"}},[t._v("Vincent Mugambi")])],1),t._v(" "),e("dd",[t._v("Here, I share things I learn during work and play")])])]),t._v(" "),e("main",[e("ul",{staticClass:"mt-8 space-y-8 max-w-prose"},t._l(t.articles,(function(article){return e("li",{key:article.slug,staticClass:"hover:bg-gray-100 rounded-xl cursor-pointer p-4 -m-4"},[e("nuxt-link",{staticClass:"hover:text-gray-800",attrs:{to:"blog/".concat(article.slug)}},[e("h3",{staticClass:"font-bold text-3xl mb-2"},[t._v(t._s(article.title))]),t._v(" "),e("dl",{staticClass:"text-sm flex space-x-2 -ml-2"},[e("dt",{staticClass:"hidden"},[t._v("Posted on")]),t._v(" "),e("dd",{staticClass:"uppercase tracking-wide"},[t._v("\n              "+t._s(t.formatDate(article.updatedAt))+"\n            ")]),t._v(" "),e("dt",{staticClass:"hidden"},[t._v("Reading time")]),t._v(" "),e("dd",[t._v(t._s(article.readingTime))])]),t._v(" "),e("p",[t._v(t._s(article.tagline))])])],1)})),0)])])}),[function(){var t=this._self._c;return t("div",[t("img",{staticClass:"w-20 rounded-full bg-gray-50",attrs:{src:"/avatar.jpg",alt:"Avatar of Vincent Mugambi"}})])}],!1,null,null,null);e.default=component.exports}}]);
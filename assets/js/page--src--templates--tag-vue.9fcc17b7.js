(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(t,s,e){"use strict";var a={name:"Footer"},r=e(33),n=Object(r.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[e("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0"},[e("p",[e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{href:"https://preciselab.io"}},[t._v("\n          Precise Lab")]),t._v(" by "),e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors\n                                 duration-300",attrs:{href:"https://github.com/gustawdaniel"}},[t._v("@gustawdaniel")])]),e("p",[t._v("Built with "),e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{href:"https://gridsome.org"}},[t._v("Gridsome")]),t._v(" & "),e("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{href:"https://tailwindcss.com/"}},[t._v("Tailwind CSS")]),t._v(".")])])])}],!1,null,null,null);s.a=n.exports},295:function(t,s,e){"use strict";var a=e(4),r=e(80).includes,n=e(128);a({target:"Array",proto:!0,forced:!e(35)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},296:function(t,s,e){"use strict";e(34),e(76),e(75),e(79),e(27),e(77),e(78);var a=e(166),r=e.n(a),n={props:["post"],computed:{formattedPublishDate:function(){return r()(this.post.datetime).format("DD MMMM, YYYY")}},methods:{formatPublishDate:function(t){return r()(t).format("DD MMMM, YYYY")},excerpt:function(t,s,e){if(t.excerpt)return t.excerpt;s=s||280,e=e||" ...";var a=t.content.replace(/<pre(.|\n)*?<\/pre>/gm,"").replace(/<[^>]+>/gm,"");return a.length>s?"".concat(a.slice(0,s)).concat(e):a},titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}}},o=e(33),i=Object(o.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",[e("div",{staticClass:"mx-auto max-w-3xl px-6"},[e("div",{staticClass:"py-8 sm:py-20 border-b border-gray-300"},[e("header",{staticClass:"text-center mb-8"},[e("time",{staticClass:"text-gray-700 text-xs mb-2 uppercase",attrs:{datetime:t.post.datetime}},[t._v(t._s(t.formatPublishDate(t.post.datetime)))]),e("h2",{staticClass:"text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2"},[e("g-link",{staticClass:"text-black font-bold",attrs:{to:t.post.path+"/"}},[t._v(t._s(t.post.title))])],1),e("p",{staticClass:"text-gray-700 leading-normal text-sm sm:text-base"},[t.post.author?e("span",[t._v("by "),t.post.author?e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{to:t.post.author.path+"/"}},[t._v(t._s(t.titleCase(t.post.author.title)))]):t._e()],1):t._e(),t.post.tags&&t.post.tags.length>0?e("span",[t._v(" in "),e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{to:t.post.tags[0].path+"/"}},[t._v(t._s(t.titleCase(t.post.tags[0].title)))])],1):t._e(),t.post.author||t.post.tags&&t.post.tags.length>0?e("span",[t._v(" · ")]):t._e(),e("span",[t._v(t._s(t.post.timeToRead)+" min read")])])]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-normal text-gray-700 text-lg px-2 sm:px-4 md:px-10",domProps:{innerHTML:t._s(t.excerpt(t.post,280," ..."))}})])])])}),[],!1,null,null,null);s.a=i.exports},297:function(t,s,e){"use strict";e(34),e(295);var a={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,s){return s>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},r=e(33),n=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"border-b border-gray-300 mx-auto max-w-3xl px-6 md:px-8 py-16"},[e("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[e("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[e("li",{staticClass:"lg:w-1/5"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-colors duration-300",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),e("li",{staticClass:"hidden md:flex w-auto text-center text-gray-600 text-base"},[t._v("Page "+t._s(t.info.currentPage)+" of "+t._s(t.info.totalPages))]),e("li",{staticClass:"lg:w-1/5 text-right"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-colors duration-300",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])}),[],!1,null,null,null);s.a=n.exports},298:function(t,s,e){var a={"./af":168,"./af.js":168,"./ar":169,"./ar-dz":170,"./ar-dz.js":170,"./ar-kw":171,"./ar-kw.js":171,"./ar-ly":172,"./ar-ly.js":172,"./ar-ma":173,"./ar-ma.js":173,"./ar-sa":174,"./ar-sa.js":174,"./ar-tn":175,"./ar-tn.js":175,"./ar.js":169,"./az":176,"./az.js":176,"./be":177,"./be.js":177,"./bg":178,"./bg.js":178,"./bm":179,"./bm.js":179,"./bn":180,"./bn.js":180,"./bo":181,"./bo.js":181,"./br":182,"./br.js":182,"./bs":183,"./bs.js":183,"./ca":184,"./ca.js":184,"./cs":185,"./cs.js":185,"./cv":186,"./cv.js":186,"./cy":187,"./cy.js":187,"./da":188,"./da.js":188,"./de":189,"./de-at":190,"./de-at.js":190,"./de-ch":191,"./de-ch.js":191,"./de.js":189,"./dv":192,"./dv.js":192,"./el":193,"./el.js":193,"./en-SG":194,"./en-SG.js":194,"./en-au":195,"./en-au.js":195,"./en-ca":196,"./en-ca.js":196,"./en-gb":197,"./en-gb.js":197,"./en-ie":198,"./en-ie.js":198,"./en-il":199,"./en-il.js":199,"./en-nz":200,"./en-nz.js":200,"./eo":201,"./eo.js":201,"./es":202,"./es-do":203,"./es-do.js":203,"./es-us":204,"./es-us.js":204,"./es.js":202,"./et":205,"./et.js":205,"./eu":206,"./eu.js":206,"./fa":207,"./fa.js":207,"./fi":208,"./fi.js":208,"./fo":209,"./fo.js":209,"./fr":210,"./fr-ca":211,"./fr-ca.js":211,"./fr-ch":212,"./fr-ch.js":212,"./fr.js":210,"./fy":213,"./fy.js":213,"./ga":214,"./ga.js":214,"./gd":215,"./gd.js":215,"./gl":216,"./gl.js":216,"./gom-latn":217,"./gom-latn.js":217,"./gu":218,"./gu.js":218,"./he":219,"./he.js":219,"./hi":220,"./hi.js":220,"./hr":221,"./hr.js":221,"./hu":222,"./hu.js":222,"./hy-am":223,"./hy-am.js":223,"./id":224,"./id.js":224,"./is":225,"./is.js":225,"./it":226,"./it-ch":227,"./it-ch.js":227,"./it.js":226,"./ja":228,"./ja.js":228,"./jv":229,"./jv.js":229,"./ka":230,"./ka.js":230,"./kk":231,"./kk.js":231,"./km":232,"./km.js":232,"./kn":233,"./kn.js":233,"./ko":234,"./ko.js":234,"./ku":235,"./ku.js":235,"./ky":236,"./ky.js":236,"./lb":237,"./lb.js":237,"./lo":238,"./lo.js":238,"./lt":239,"./lt.js":239,"./lv":240,"./lv.js":240,"./me":241,"./me.js":241,"./mi":242,"./mi.js":242,"./mk":243,"./mk.js":243,"./ml":244,"./ml.js":244,"./mn":245,"./mn.js":245,"./mr":246,"./mr.js":246,"./ms":247,"./ms-my":248,"./ms-my.js":248,"./ms.js":247,"./mt":249,"./mt.js":249,"./my":250,"./my.js":250,"./nb":251,"./nb.js":251,"./ne":252,"./ne.js":252,"./nl":253,"./nl-be":254,"./nl-be.js":254,"./nl.js":253,"./nn":255,"./nn.js":255,"./pa-in":256,"./pa-in.js":256,"./pl":257,"./pl.js":257,"./pt":258,"./pt-br":259,"./pt-br.js":259,"./pt.js":258,"./ro":260,"./ro.js":260,"./ru":261,"./ru.js":261,"./sd":262,"./sd.js":262,"./se":263,"./se.js":263,"./si":264,"./si.js":264,"./sk":265,"./sk.js":265,"./sl":266,"./sl.js":266,"./sq":267,"./sq.js":267,"./sr":268,"./sr-cyrl":269,"./sr-cyrl.js":269,"./sr.js":268,"./ss":270,"./ss.js":270,"./sv":271,"./sv.js":271,"./sw":272,"./sw.js":272,"./ta":273,"./ta.js":273,"./te":274,"./te.js":274,"./tet":275,"./tet.js":275,"./tg":276,"./tg.js":276,"./th":277,"./th.js":277,"./tl-ph":278,"./tl-ph.js":278,"./tlh":279,"./tlh.js":279,"./tr":280,"./tr.js":280,"./tzl":281,"./tzl.js":281,"./tzm":282,"./tzm-latn":283,"./tzm-latn.js":283,"./tzm.js":282,"./ug-cn":284,"./ug-cn.js":284,"./uk":285,"./uk.js":285,"./ur":286,"./ur.js":286,"./uz":287,"./uz-latn":288,"./uz-latn.js":288,"./uz.js":287,"./vi":289,"./vi.js":289,"./x-pseudo":290,"./x-pseudo.js":290,"./yo":291,"./yo.js":291,"./zh-cn":292,"./zh-cn.js":292,"./zh-hk":293,"./zh-hk.js":293,"./zh-tw":294,"./zh-tw.js":294};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=298},299:function(t,s){},304:function(t,s,e){"use strict";var a=e(299),r=e.n(a);s.default=r.a},317:function(t,s,e){"use strict";e.r(s);e(34),e(76),e(75),e(27),e(77),e(78),e(166);var a=e(7),r=e(296),n=e(167),o=e(297),i={components:{PostItem:r.a,Pagination:o.a,SiteFooter:n.a},metaInfo:function(){return{title:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"'),meta:[{key:"description",name:"description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:type",content:"website"},{property:"og:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:url",content:"".concat(this.config.siteUrl).concat(this.$page.tag.path)},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:site",content:"@cossssmin"},{name:"twitter:creator",content:"@cossssmin"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}},computed:{config:function(){return a.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/bleda-card.png")}}},l=e(33),c=e(304),g=Object(l.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("main",[e("header",[e("div",{staticClass:"max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-gray-300"},[e("p",{staticClass:"text-gray-700 leading-normal"},[t._v(t._s(t.$page.tag.belongsTo.totalCount)+" posts in total")]),e("h1",{staticClass:"text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize"},[t._v(t._s(t.titleCase(t.$page.tag.title)))]),e("svg",{staticClass:"w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"img","aria-labelledby":"tagIcon"}},[e("title",{attrs:{id:"tagIcon"}},[t._v("Posts tagged")]),e("path",{attrs:{d:"M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}})])]),e("nav",{staticClass:"absolute top-0 left-0 z-20 mt-6 ml-6"},[e("g-link",{staticClass:"text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300",attrs:{to:"/"}},[t._v("← Home")])],1)]),e("section",t._l(t.$page.tag.belongsTo.edges,(function(t){return e("post-item",{key:t.node.id,attrs:{post:t.node}})})),1),t.$page.tag.belongsTo.pageInfo.totalPages>1?e("pagination",{attrs:{base:""+t.$page.tag.path,info:t.$page.tag.belongsTo.pageInfo}}):t._e(),e("site-footer",{staticClass:"py-8 sm:py-16"})],1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(g);s.default=g.exports}}]);
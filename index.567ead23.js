function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=r.parcelRequire1827;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequire1827=i),i.register("kyEFX",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("eEHR3",(function(e,t){var r=i("hY6V0"),n=i("eK0aa"),a=i("OcCik");const s={hero:document.getElementById("hero")},o=new(0,r.RequestServer);!async function(){try{const e=await o.trendingDay(),{results:t}=e.data,r=t,i=(0,n.markupHero)(r);s.hero.innerHTML=i,(0,a.applyWatchTraileListener)();const l=document.querySelector(".hero__discription"),c=document.querySelector(".hero__title"),d=document.querySelector(".hero__text");let u=document.querySelector(".switcher");"true"===localStorage.getItem("isLight")&&(l.classList.add("hero__discription-light"),c.classList.add("hero__title-light"),d.classList.add("hero__text-light")),u.addEventListener("click",(()=>{l.classList.toggle("hero__discription-light"),c.classList.toggle("hero__title-light"),d.classList.toggle("hero__text-light")}))}catch(e){console.log(e)}}()})),i.register("eK0aa",(function(r,n){e(r.exports,"markupHero",(function(){return s}));var a=i("i4WMq");function s(e){let r=e[Math.round(Math.random()*(e.length-1))],n="";r||(r={original_title:"Let’s Make Your Own Cinema",overview:"Is a guide to creating a personalized movie theater experience. \n        You'll need a projector, screen, and speakers. Decorate your space, choose your \n        films, and stock up on snacks for the full experience.",vote_average:"",id:""},n=t(a));const{backdrop_path:i,original_title:s="",overview:o="",vote_average:l="",id:c}=r;n=`https://image.tmdb.org/t/p/original${i}`;let d="";for(let e=1;e<=5;e++){let t="fa-star-o";2*e<=l?t="fa-star":2*e-1<=l&&(t="fa-star-half-o"),d+=`<span class="fa star ${t}"> </span>`}return`<div class="hero__discription">\n\n            <h2 class="hero__title">${s}</h2>\n            <p class="hero__rating">${d}</p>\n            <p class="hero__text">${o}</p>\n            <button id="watch-trailter__btn" class="hero__btn watch-trailer " data-id="${c}" type="button">Watch trailer</button>\n            </div>\n            <div class="hero__backgr" id="${c}">\n            <img src='${n}' loading="lazy" alt="${o}" class="hero__img" />\n            </div>`}})),i.register("i4WMq",(function(e,t){e.exports=new URL(i("kyEFX").resolve("9t7bk"),import.meta.url).toString()})),i.register("OcCik",(function(t,r){e(t.exports,"applyWatchTraileListener",(function(){return d}));var n=i("hY6V0"),a=i("6pZM0"),s=i("cpBoX");document.querySelector('[data-modal="modal-2"]');const o=new(0,n.RequestServer);async function l(e){(0,a.modalListener)("modal-2",c);const t=document.getElementsByClassName("loader-wrapper")[0],r=document.getElementsByClassName("modal-no-trailer")[0],n=document.getElementsByClassName("modal-trailer")[0],i=new(0,s.default)(t);r.classList.add("hidden"),i.show();try{const t=e.currentTarget.getAttribute("data-id"),a=await o.movieTrailer(t),{results:s}=a.data,l=s[0];if(l){let e=`<iframe id="trailer-video-player" width="100%" height="100%" src="https://www.youtube.com/embed/${l.key}" title="${l.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;n.innerHTML=e,setTimeout((()=>{i.hide(),n.classList.remove("hidden")}),1e3)}else i.hide(),r.classList.remove("hidden"),n.classList.add("hidden");const c=document.querySelector(".modal-trailer");let d=document.querySelector(".switcher");"true"===localStorage.getItem("isLight")&&c.classList.add("modal-trailer-light"),d.addEventListener("click",(()=>{c.classList.toggle("modal-trailer-light")}))}catch(e){console.log(e)}}function c(){const e=document.getElementsByClassName("modal-trailer")[0],t=document.getElementsByClassName("modal-no-trailer")[0];e.innerHTML="",t?.classList.remove("hidden"),e?.classList.add("hidden")}function d(){document.getElementById("watch-trailter__btn").addEventListener("click",l)}})),i.register("cpBoX",(function(t,r){e(t.exports,"default",(function(){return n}));class n{constructor(e){this.element=e,this.init()}init=()=>{this.hide(),this.element.innerHTML=this.getLoader()};getLoader=()=>'<div class="load-align"><div class="film"><span></span><span></span><span></span><span></span></div><div class="film"><span></span><span></span><span></span><span></span></div></div>\t';show=()=>{this.element.classList.remove("hidden")};hide=()=>{this.element.classList.add("hidden")}}})),i.register("3huUq",(function(t,r){e(t.exports,"markup",(function(){return a}));var n=i("7o4ng");function a(e){return e.map((({poster_path:e,original_title:t="",genre_ids:r,overview:a="",release_date:i="",vote_average:s="",id:o})=>{let l;l=i?i.substring(0,4):"no date";let c=`https://image.tmdb.org/t/p/w500${e}`;e||(c="https://picsum.photos/500/750");let d="";for(let e=1;e<=5;e++){let t="fa-star-o";2*e<=s?t="fa-star":2*e-1<=s&&(t="fa-star-half-o"),d+=`<span class="fa star ${t}"> </span>`}return`<li class="card__item list" id="${o}">\n            <img src='${c}' loading="lazy" alt="${a}" class="card__img" />\n            <div class="container-info" data-modal-open="modal-1">\n            <h2 class="card__title">${t}</h2>\n            <p class="card__desc">${(0,n.nameGenres)(r).join(", ")} | ${l}</p>\n            <p class="card__rating">${d}</p>\n            </div>\n            </li>`})).join("")}})),i.register("7o4ng",(function(t,r){e(t.exports,"requestGenre",(function(){return s})),e(t.exports,"nameGenres",(function(){return o}));const n=new(0,i("hY6V0").RequestServer);let a;async function s(){try{const e=await n.movieGenre(),{genres:t}=e.data;a=t.reduce(((e,{id:t,name:r})=>(e[t]=r,e)),{})}catch(e){console.log(e)}}function o(e){const t=e.map((e=>a[e]));return t.length>2?t.splice(2):0===t.length&&t.push("no genres"),t}})),i.register("8Yq9A",(function(e,t){})),i("kyEFX").register(JSON.parse('{"co8kk":"index.567ead23.js","9t7bk":"desktop.a15d7519.jpg"}'));
//# sourceMappingURL=index.567ead23.js.map

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o=i("fb9GJ"),a=i("2shzp"),s=i("dFv1e");var l=i("hgmNe"),f=i("bHp3l"),c=i("6Xidn");c=i("6Xidn"),f=i("bHp3l");function u(){setTimeout((()=>{f.refs.notificationEl.textContent=""}),3e3)}var d=i("dRsRU"),g=i("B4GFe"),p=i("392Er");f=i("bHp3l");function y(e){console.log(e.message),f.refs.notificationEl.style.color="#ff001b",f.refs.notificationEl.textContent="Sorry, something going wrong... Please try again."}var h=i("gjiCh"),m=i("jkVf4");const E=new class{async fetchFilms(e){const t=`${s.BASE_URL}/search/movie?api_key=${s.KEY}&query=${this.searchQuery}&page=${e}`,{data:n}=await a.default.get(t);return n}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.lastQuery=""}},v=new(e(o))("pagination",{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0}),b=v.getCurrentPage();function L(e){const t=e.page;E.fetchFilms(t).then((e=>{(0,d.scrollOnTop)(0),(0,g.clearMurkup)(),C(e.results)})).catch(y)}function C(e){f.refs.filmGalleryContainer.insertAdjacentHTML("beforeend",l.default.createFilmCardMarkup(e)),(0,m.saveCurrentFilmsToLocal)(e),(0,p.hideElement)(),(0,p.hideSpan)()}f.refs.notificationEl.style.color="#ff001b",f.refs.notificationEl.textContent="",f.refs.formEl.addEventListener("submit",(function(e){(0,h.toggleLoader)(),e.preventDefault(),function(){if(!f.refs.inputEl.value.trim())return(0,h.toggleLoader)(),f.refs.notificationEl.style.color="#ff001b",f.refs.notificationEl.textContent="Please, type something.",void u();if(E.query=f.refs.inputEl.value.trim(),E.lastQuery===E.searchQuery)return void(0,h.toggleLoader)();c.pagination.off("afterMove",c.popular),v.off("afterMove",L),E.fetchFilms(b).then((e=>{if(!e.results.length)return(0,h.toggleLoader)(),(0,g.clearMurkup)(),f.refs.notificationEl.style.color="#ff001b",f.refs.notificationEl.textContent="Sorry, there are no films matching your search query. Please, try again.",f.refs.paginationInHome.classList.add("tui-pagination-isHidden"),f.refs.notificationPictureEl.classList.add("section-main__bcg"),u(),void(E.lastQuery="");E.lastQuery=E.query,f.refs.notificationEl.textContent="",f.refs.paginationInHome.classList.remove("tui-pagination-isHidden"),f.refs.notificationPictureEl.classList.remove("section-main__bcg"),(0,d.scrollOnTop)(0),(0,g.clearMurkup)(),C(e.results),(0,h.toggleLoader)(),v.reset(e.total_results),(0,p.hideElement)(),v.on("afterMove",L);const t=e.total_results;f.refs.notificationEl.style.color="#00ff22",f.refs.notificationEl.textContent=`We found ${t} films. Enjoy!`,u()})).catch(y)}()}));
//# sourceMappingURL=index.d49c9ee9.js.map
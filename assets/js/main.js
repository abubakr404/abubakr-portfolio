const loader=document.querySelector(".loader"),header=document.querySelector("header"),sections=document.querySelectorAll("main > section"),navToggler=document.querySelector("#navToggler"),navLinks=document.querySelectorAll(".siteNav .navLink"),heroImgsContainer=document.querySelector(".hero .imgs-container"),workCards=document.querySelectorAll(".work-card"),portfolioImgsContainer=document.querySelectorAll(".portfolio .imgs-container"),worksImgs=heroImgsContainer.querySelectorAll("img"),workLink=document.querySelector(".work-link"),cardBlogs=document.querySelectorAll(".blogs .card");let lastKnownScrollPosition=0,lastRandomNumber=0,viwerDone=!1,ticking=!1;import{classShuffleTT,classTogglerTT,classAdderTT,classRemoverTT}from"./helpers/tuti.js";window.onload=()=>{filled(window.scrollY),worksImgs[lastRandomNumber].classList.add("active")},navToggler.addEventListener("click",e=>{header.offsetTop<lastKnownScrollPosition?header.classList.toggle("open"):header.offsetTop>=lastKnownScrollPosition&&(header.classList.toggle("open"),header.classList.toggle("filled"))}),window.addEventListener("scroll",e=>{portfolio.offsetTop<=window.scrollY&&!viwerDone&&(stopRandomWorks(),viwerDone=!0)}),window.addEventListener("scroll",e=>{lastKnownScrollPosition=window.scrollY,sections.forEach(o=>{o.offsetTop<=lastKnownScrollPosition&&o.offsetTop+o.offsetHeight>=lastKnownScrollPosition&&navLinks.forEach(e=>{e.classList.remove("active"),o.id===e.dataset.ref&&e.classList.add("active")})})}),addEventListener("scroll",e=>{lastKnownScrollPosition=window.scrollY,ticking||(window.requestAnimationFrame(()=>{filled(lastKnownScrollPosition),ticking=!1}),ticking=!0)});let filled=function(e){header.offsetTop<e&&!header.classList.contains("filled")?header.classList.add("filled"):header.offsetTop>=e&&!header.classList.contains("open")&&header.classList.remove("filled")};function getRandomImgN(e){var o=Math.floor(Math.random()*worksImgs.length);return e!=o?lastRandomNumber=o:getRandomImgN(e)}let workViewer=setInterval(randomWorks,29e3);function randomWorks(){let e=worksImgs[getRandomImgN(lastRandomNumber)];worksImgs.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")}function stopRandomWorks(){clearInterval(workViewer),heroImgsContainer.classList.add("done")}portfolioImgsContainer.forEach(o=>{o.addEventListener("click",e=>{o.parentElement.parentElement.parentElement.classList.toggle("zoomed")})}),workCards.forEach(e=>{let o=e.querySelectorAll(".screen"),t=e.querySelectorAll(".imgs-container img");classShuffleTT(o,"active"),o.forEach(o=>{o.addEventListener("click",e=>{t.forEach(e=>{e.classList.remove("active"),e.dataset.type===o.dataset.type&&e.classList.add("active")})})})}),workLink.addEventListener("click",e=>{stopRandomWorks()}),cardBlogs.forEach(e=>{var o=e.querySelector("button.more"),t=e.querySelector(".blog-container>img"),r=e.querySelector(".blog-container .close");classAdderTT(o,"zoomed",e),classTogglerTT(t,"zoomed",e),classRemoverTT(r,"zoomed",e)}),classShuffleTT(navLinks,"active");
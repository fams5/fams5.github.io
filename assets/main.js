const navToggle = document.querySelector(".toggle-menu")
const links = document.querySelector(".nav-menu")


navToggle.addEventListener('click',function(){
   links.classList.toggle("show_nav")
})

const navbar = document.querySelector(".header")


window.addEventListener("scroll", function(){
    navbar.classList.toggle("bg-light", window.scrollY > 0 )
})


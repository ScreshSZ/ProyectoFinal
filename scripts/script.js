const btnMobile = document.querySelector(".btnMobile")
const links = document.querySelector(".links")

btnMobile.addEventListener("click",()=>{
    links.classList.toggle("show")
})
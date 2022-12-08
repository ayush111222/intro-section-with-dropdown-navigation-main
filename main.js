const arrow = document.querySelectorAll(".arrow");
const arrowInside = document.querySelector(".arrow__items__1");
const arrowInside2 = document.querySelector(".arrow__items__2");



arrow[0].addEventListener("click", ()=>{
    arrow[0].classList.toggle("active");
       
            arrowInside.classList.toggle("open");
})

arrow[1].addEventListener("click", ()=>{
    arrow[1].classList.toggle("active");
       
    arrowInside2.classList.toggle("open");
})





const ulMenu = document.querySelector(".ul__menu");
const btn = document.querySelector(".menu__btn");
const bgColor = document.querySelector(".bg__color")

btn.addEventListener('click', function(){
    btn.classList.toggle("active");
    ulMenu.classList.toggle("open");
    bgColor.classList.toggle("open")
})
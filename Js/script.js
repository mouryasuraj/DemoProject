
let menuBar = document.getElementById("menuBar");
let closeBar = document.getElementById("closeBar");
let bg = document.getElementById("bg");
let menu = document.getElementById("menu");

menuBar.addEventListener('click', ()=>{
    menu.style.left = "0";
    bg.style.display = "block";
    
})
closeBar.addEventListener('click', ()=>{
    menu.style.left = "-100%"
    bg.style.display = "none"
})







$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 8000;
let slideInterval;

const nextSlide = () => {
    const active = document.querySelector(".active")
    active.classList.remove('active')
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add("active")
    } else{
        //add active to start
        slides[0].classList.add("active")
    }
    setTimeout(() => active.classList.remove("active"));
}

const prevSlide = () => {
    const active = document.querySelector(".active")
    active.classList.remove('active')
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add("active")
    } else{
        //add active to start
        slides[slides.length-1].classList.add("active")
    }
    setTimeout(() => active.classList.remove("active"))
};

next.addEventListener("click", e =>{
    nextSlide();
})

prev.addEventListener("click", e =>{
    prevSlide();
})

if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}

document.querySelector("#contact").onclick = function () {
    location.href = "http://127.0.0.1:5500/Big%20Als%20Website/contact.html"
}
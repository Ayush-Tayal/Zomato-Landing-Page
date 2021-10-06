const next = document.querySelector(".arrow-right");
const previous = document.querySelector(".arrow-left");
const slider = document.querySelector(".abc")
const cardWidth =  document.querySelector(".dish").offsetWidth;

console.log(next, previous, slider,cardWidth);
let currentCard = 0;

next.onclick=()=>{
    console.log("Next Clicked");
    if (currentCard < 5) {
        currentCard++;
        slider.style.transitionDuration = "0.5s";
        slider.style.tarnsform = `translateX(-${currentCard * cardWidth}px)`;

    }
};

previous.onclick=()=>{
    console.log("Previous Clicked")
    if (currentCard < 5) {
        currentCard--;
        slider.style.transitionDuration = "0.5s";
        slider.style.tarnsform = `translateX(-${currentCard * cardWidth}px)`;

    }
};

const movetop = document.querySelector("#scroll-top");
// console.log(movetop);

movetop.onclick = ()=>{
    window.scrollTo(0,0);
}
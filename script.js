const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const imageSlider = document.querySelector(".slider-container");
let cardWidth =  document.querySelector(".dish img").width;

// console.log(previous, previous, cardWidth, imageSlider  );

let counter = 0;


next.addEventListener('click', ()=>{
    console.log("next clicked");
    if(counter < 6){
        counter++;
        imageSlider.style.transition = "transform 0.4s ease-in-out";
        imageSlider.style.transform = 'translateX(' + (-cardWidth * counter) + 'px)';
        
    }
});

previous.addEventListener('click', ()=>{
    console.log("previous clicked");
    if(counter < 6){
        counter++;
        imageSlider.style.transition = "transform 0.4s ease-in-out";
        imageSlider.style.transform = 'translateX(' + (cardWidth * counter) + 'px)';
    }

});


// Move to Top
const movetop = document.querySelector("#scroll-top");
// console.log(movetop);

movetop.onclick = ()=>{
    window.scrollTo(0,0);
}
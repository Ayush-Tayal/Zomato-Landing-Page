const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const imageSlider = document.querySelector(".slider-container");
const cardWidth =  document.querySelector(".dish").offsetWidth;


console.log(previous, previous, cardWidth, imageSlider  );

let counter = 1;

next.addEventListener('click', ()=>{
    console.log("next clicked");
    if(counter < 5){
        imageSlider.style.transition = "transform 0.4s ease-in-out";
        imageSlider.style.transform = 'translateX(' + (-cardWidth * counter) + 'px)';
        counter++;
    }
});

previous.addEventListener('click', ()=>{
    console.log("next clicked");
    if(counter < 5){
        imageSlider.style.transition = "transform 0.4s ease-in-out";
        imageSlider.style.transform = 'translateX(' + (cardWidth * counter) + 'px)';
        counter++;
    }
});



// next.onclick=()=>{
//     console.log("Next Clicked");
//     if (counter < 5) {
//         counter--;
//         slider.style.transitionDuration = "0.5s";
//         slider.style.tarnsform = `translateX(-${counter * cardWidth}px)`;
        
//     }
// };

// previous.onclick=()=>{
//     console.log("previous Clicked")
//     if (counter < 50) {
//         counter++;
//         slider.style.transitionDuration = "0.5s";
//         slider.style.tarnsform = `translateX(-${counter * cardWidth}px)`;
        
//     }
// };
const movetop = document.querySelector("#scroll-top");
// console.log(movetop);

movetop.onclick = ()=>{
    window.scrollTo(0,0);
}
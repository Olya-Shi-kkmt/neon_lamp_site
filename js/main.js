console.log(11111);
let slides = document.querySelectorAll('section.karysel>.slides>img');
let col = 0;
console.log(slides.length);
function slide_plus() 
{
   
    console.log(col);
    console.log(slides[col]);
     ++col
    if (col >= slides.length) 
    {
        slides[col-1].classList.remove("block");
        col = 0;  
        slides[col].classList.add("block");
    } else 
    { 
        
        slides[col-1].classList.remove("block");
        slides[col].classList.add("block");
    }
}
// setInterval('slide_plus', 100);

let timerId = setInterval(slide_plus, 2000);
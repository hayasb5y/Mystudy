let downtown = document.querySelector(".downtown");
let car = document.querySelector(".car");

addEventListener("keypress",function(x){
    if(x.which === 13){
        downtown.classList.toggle("moving");
        car.classList.toggle("suspention");
    }
})
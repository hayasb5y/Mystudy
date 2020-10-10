let display = document.getElementById("display");
let startstop = document.getElementById("startstop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let newHours = 0;
let newMinutes = 0;
let newSeconds = 0;

let status = "stop";
let interval ;

function stopwatch() {
    seconds++;
    if(seconds / 60 === 1) {
        minutes++;
        seconds = 0;
        if(minutes / 60 === 1) {
            hours++;
            minutes = 0;
        }
    }
    if(seconds < 10) {
        newSeconds = "0" + seconds;
    }else {
        newSeconds = seconds;
    }
    if(minutes < 10) {
        newMinutes = "0" + minutes;
    }else {
        newMinutes = minutes;
    }
    if(hours < 10) {
        newHours = "0" + hours;
    }else {
        newHours = hours;
    }


    display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds;
}

startstop.addEventListener("click",function(){
    if(status == "stop") {
        interval = setInterval(stopwatch,1000);
        startstop.innerHTML = "STOP";
        status = "start";
    }else{
        clearInterval(interval);
        startstop.innerHTML = "START";
        status = "stop";
    }
}
)

reset.addEventListener("click",function(){
    clearInterval(interval);
    startstop.innerHTML = "START";
    status = "STOP";
    display.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
})
let globalCounter = 0;

function increase() {
    let display = document.getElementById("counter");
    display.innerText = ++globalCounter;
    updateColor(globalCounter);
}

function decrease() {
    let display = document.getElementById("counter");
    display.innerText = --globalCounter;
    updateColor(globalCounter);
}

function reset() {
    let display = document.getElementById("counter");
    globalCounter = 0;
    display.innerText = globalCounter;
    updateColor(globalCounter);
}

function updateColor(x) {
    let display = document.getElementById("counter");
    if(x == 0)    {
        display.style.color = "#FBC02D";
    }else if(x < 0)  {
        display.style.color = "#D32F2F";
    }else if(x > 0) {
        display.style.color = "#388E3C";
    }
}
document.getElementById("btn+").addEventListener("click",incrementCounter);
document.getElementById("btn-").addEventListener("click",decrementCounter);
document.getElementById("btnR").addEventListener("click",resetCounter);

let counterDisplay = document.getElementById("count");
let counterValue=0;

function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}
function incrementCounter(){
    counterValue++;
    updateCounterDisplay();
}
function decrementCounter(){
    if(counterValue>0){
        counterValue--;
        updateCounterDisplay();
    }
    
}
function resetCounter(){
    counterValue=0;
    updateCounterDisplay();
}
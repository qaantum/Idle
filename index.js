const firstButton = document.querySelector("#firstButton");
const firstParagraph = document.querySelector("#firstParagraph");
const automaticIncreaseParagraph = document.querySelector("#automaticIncrease");
const upgradeButton = document.querySelector("#upgradeButton");
let clickCount = 0;
let automaticIncrease = 0;
firstButton.addEventListener("click", function(){
    clickCount++;
    firstParagraph.textContent = clickCount;
})
setInterval(function(){
    clickCount+=automaticIncrease;
    automaticIncreaseParagraph.textContent = automaticIncrease;
    firstParagraph.textContent=clickCount;
}, 1000);
upgradeButton.addEventListener("click", function(){
    if(clickCount>10){
        automaticIncrease++;
        clickCount-=10;
        automaticIncreaseParagraph.textContent = automaticIncrease;
        firstParagraph.textContent=clickCount;

    }
})
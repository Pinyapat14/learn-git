let name = document.getElementById("name");
let saynameBtn = document.getElementById("sayName");
let changBg= document.getElementById("changeBg");
let body = document.querySelector("body")
let resetBtn = document.getElementById("reset")

saynameBtn.addEventListener("click",()=> {
    name.innerHTML = "hello , pin";
})

changBg.addEventListener("click",()=> {
    body.style.backgroundColor="red";
})

resetBtn.addEventListener("click",()=> {
    body.style.backgroundColor="white";
})
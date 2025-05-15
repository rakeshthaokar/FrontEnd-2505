let box  = document.querySelector("#colorBox")

let redbtn  = document.querySelector("#btn--red")
let yellowbtn  = document.querySelector("#btn--yellow")
let greenbtn  = document.querySelector("#btn--green")
let resetbtn  = document.querySelector("#btn--reset")

redbtn.addEventListener("click",function(){
    box.style.backgroundColor = "red"
})
yellowbtn.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"
})
greenbtn.addEventListener("click",() => {
    box.style.backgroundColor = "green"
})
resetbtn.addEventListener("click",() => {
    box.style.backgroundColor = ""
})

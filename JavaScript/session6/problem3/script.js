let listItem = document.querySelector("#itemList")
let addbtn = document.querySelector(".addbtn")

addbtn.addEventListener("click", () => {
    let li = document.createElement("li")
    li.textContent = "New Item"
    let itemCount = listItem.children.length + 1
    if (itemCount % 2 === 0) {
        li.className = "even"
    }
    else {
        li.className = "odd"
    }


    listItem.appendChild(li)

})
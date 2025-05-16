let inputTask = document.querySelector(".inputTask")
let taskList = document.querySelector(".taskList")
let addbtn = document.querySelector(".addbtn")

addbtn.addEventListener("click", () => {
    let li = document.createElement("li")
    if (inputTask.value.trim() === "") {
        alert("Enter Task")
    }
    else {
        li.innerHTML = `
    <h3 class="task">${inputTask.value}</h3>
    <button class="deleteTask">Delete</button>
    <button class="completeTask">Complete</button>
    `
        taskList.appendChild(li)
        inputTask.value = ""
    }
    li.querySelector(".deleteTask").addEventListener("click",deletebtn)
    function deletebtn(){
        li.remove()
    }

    li.querySelector(".completeTask").addEventListener("click",completebtn)
    function completebtn(){
        li.classList.toggle("completed")
        
    }
})
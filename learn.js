const Input = document.getElementById("Task")
const btn = document.getElementById("Add")
const list = document.getElementById("List")

btn.addEventListener("click", function(){

    if(Input.value === ""){
        alert("Input cannot be empty")
        return
    }

    const li = document.createElement("li")

    li.innerHTML = `
        <span>${Input.value}</span>
        <button>Edit</button>
        <button>Delete</button>
    `

    list.appendChild(li)

    Input.value = ""

    const editBtn = li.querySelectorAll("button")[0]
    const delBtn = li.querySelectorAll("button")[1]

    // DELETE
    delBtn.addEventListener("click", function(){
        li.remove()
    })

    // EDIT
    editBtn.addEventListener("click", function(){

        let newTask = prompt("Edit your task")

        if(newTask === ""){
            alert("Task cannot be empty")
            return
        }

        li.querySelector("span").innerText = newTask

    })

})
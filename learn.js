const form = document.querySelector("form")
const input = document.querySelector("input")
const todoel = document.querySelector(".todos")

const todos = []

form.addEventListener("submit", function(event){

    event.preventDefault()

    // check empty input first
    if(input.value === ""){
        alert("this is not filled")
        return
    }

    const inputT = input.value

    // add new todo
    todos.push({ text: inputT })

    // display todos again
    displayTodos()

    // clear input
    input.value = ""
})

const displayTodos = function(){

    todoel.innerHTML = ""

    for(const todo of todos){

        const html = `
        
        <li class="todo">
            <span class="todo__text">${todo.text}</span>
            <div>
                <button class="btn todo__update">Update</button>
                <button class="btn todo__delete">Delete</button>
            </div>
        </li>
        
        `

        todoel.insertAdjacentHTML("beforeend", html)
         const delt = todoel.querySelectorAll("button")[0]
    const update = document.querySelectorAll("button")[1]
    delt.addEventListener("click",function(){
        todoel.remove()
    })
    }
   
}

displayTodos()

localStorage.setItem("todos", JSON.stringify(0))
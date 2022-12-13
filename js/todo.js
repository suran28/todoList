const todoInput = document.querySelector("#todo input");
const todoForm = document.querySelector("#todo form");
const ul = document.querySelector("#todo ul");

function paintTodo(){
    const li = document.createElement("li");
    li.innerText = todoInput.value;
    
    ul.appendChild(li);
}

function handleTodoForm(event){
    event.preventDefault();
    // console.log(todoInput.value);

    paintTodo();

    todoInput.value = "";
}

todoForm.addEventListener("submit",handleTodoForm);
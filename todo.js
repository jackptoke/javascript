const txtInput = document.querySelector(".txtInput");
const btnAdd = document.querySelector(".btnAdd");
const btnComplete = document.querySelector(".btnComplete");
const divCount = document.querySelector(".count");

const ulTodoList = document.querySelector(".list-group");
const todoList = { items: [] };
let counter = 1;

function addTodo(event){
    //preventing default behaviour
    if(event.keyCode === 13 && txtInput.value !== ""){
        event.preventDefault();

        let todo = document.createElement("li");
        todo.id = `task${counter}`;

        let chkBox = document.createElement("input");
        chkBox.className = "task-status";
        chkBox.setAttribute("type", "checkbox");
        chkBox.setAttribute("id", counter);

        todo.innerHTML = `${txtInput.value} | ${chkBox.outerHTML}`;
        todo.className = "list-group-item";
        
        todoList.items.push(txtInput.value);

        ulTodoList.appendChild(todo);
        txtInput.value = "";
        ++counter;
        divCount.innerHTML = `<h3>No. of things to do: ${ulTodoList.childElementCount}</h3>`;
    }
}

function removeTask(event){
    event.preventDefault();
    let taskStatuses = document.querySelectorAll(".task-status");
    for(let task of taskStatuses){
        if(task.checked){
            console.log(task.id);
            let t = document.querySelector(`#task${task.id}`);
            // console.log(t.id);
            ulTodoList.removeChild(t);
        }
    }
    // console.log(taskStatuses.length);
}

btnComplete.addEventListener("click", removeTask);
window.addEventListener("keypress", addTodo);

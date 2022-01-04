const task_bullet_icon_classes = "fas fa-thumbtack";
const task_trash_icon = "fas fa-trash";
const task_check_icon = "fas fa-check-circle";
var numberOfTasks = 0;
var numberOfTasksCompleted = 0;

document.querySelector('form').addEventListener("submit", (e)=>{
    e.preventDefault();
    numberOfTasks++;
    const newTask = e.target.task.value;
    const Li = document.createElement('li');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span2.className = "icon-button";
    const i1 = document.createElement('i');
    i1.className = task_bullet_icon_classes;
    span1.appendChild(i1);
    span1.innerHTML += ` ${newTask}`;
    const i2 = document.createElement('i');
    i2.className = task_trash_icon;
    i2.setAttribute("id", `trash-${numberOfTasks}`);
    const i3 = document.createElement('i');
    i3.className = task_check_icon;
    span2.appendChild(i2);
    span2.appendChild(i3);
    Li.appendChild(span1);
    Li.appendChild(span2);
    document.querySelector(".tasks").appendChild(Li);
    document.getElementById('task').value = "";
    checkDeleteButtons();
    checkFinishButtons();
});
const checkDeleteButtons = () =>{
    document.querySelectorAll(`.fa-trash`).forEach(trash =>{
        trash.addEventListener("click", ()=>{
            trash.parentElement.parentElement.remove();
        })
    })
}
const checkFinishButtons = () =>{
    document.querySelectorAll(`.fa-check-circle`).forEach(check =>{
        check.addEventListener("click", ()=>{
            numberOfTasksCompleted++;
            document.querySelector(".completed-tasks").innerText =check.parentElement.previousSibling.innerText + " completed";
            check.parentElement.parentElement.remove(); 
        })
    })
}
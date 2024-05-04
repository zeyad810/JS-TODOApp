let input= document.getElementById("taskInput");
let ul = document.getElementById("tasks")
let allTasks;
if (localStorage.Tasks != null) {
    allTasks =JSON.parse(localStorage.Tasks)
}
else{
    allTasks =[];
}
// Create
function createTask() {
    let task ={
        mainTask:input.value,
        isDone:false
    }
    console.log(task)
    allTasks.push(task)
    localStorage.setItem("Tasks",JSON.stringify(allTasks));
    input.value =""
    showData()
}
// Read
function showData() {
    let list = "";
    for (let index = 0; index < allTasks.length; index++) {
        list += `
        <li onclick="doneTask(${index})" ${allTasks[index].isDone ? 'class="done"' : ''}>
            ${allTasks[index].mainTask}
            <button id="del" onclick="remove(${index})">X</button>           
        </li>`;
    }
    ul.innerHTML = list;
}

// Delete 
function remove(index) {
allTasks.splice(index,1)
localStorage.Tasks =JSON.stringify(allTasks)
showData()
}

// Make as done 
function doneTask(index) {
    allTasks[index].isDone=true;
    if (allTasks[index].isDone=true) {
        console.log( allTasks[index])
        ul.children[index].classList.add("done");
    }
    localStorage.Tasks =JSON.stringify(allTasks)
    
}

showData();

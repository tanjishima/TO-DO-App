// selectors

const taskForm=document.getElementById("task-form");
const submit=document.getElementById("submit");
const taskInput=document.getElementById("task-input");
const taskListDiv=document.getElementById("task-list");


//Create a new task
function createTask(e){
   e.preventDefault()
    const inputValue=taskInput.value;

    if(inputValue){
        console.log(inputValue);
    }else{
        alert("please insert a task");
    }
    taskInput.value='';

    //Creating a task listdiv
    const listDiv=document.createElement("div");
    listDiv.classList.add("task");
   


    //creating a task name/input
    const taskName=document.createElement("input");
    taskName.value=inputValue;
    taskName.classList.add("w-[70%]")
    taskName.setAttribute("readonly","readonly");

    //creating a button-group div
    const btnDiv=document.createElement("div");
    btnDiv.classList.add("w-[30%]");
    btnDiv.classList.add("flex");
    btnDiv.classList.add("gap-2");

    //creating a delete btn
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.classList.add("delete");

    //creating a edit btn
    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("edit");

  //assinging each element to a parent element
  taskListDiv.appendChild(listDiv);
  listDiv.appendChild(taskName);
  listDiv.appendChild(btnDiv);
  btnDiv.appendChild(deleteBtn);
  btnDiv.appendChild(editBtn)

  //delete a task
  deleteBtn.addEventListener("click",()=>{
    listDiv.remove();
  })

  //edit a task
  editBtn.addEventListener("click",(e) =>{
  if(e.target.innerText==="Edit"){
    taskName.removeAttribute("readonly");
    taskName.focus();
    editBtn.innerText="Save";
  }else{
    taskName.setAttribute("readonly","readonly");
    editBtn.innerText="Edit";
  }
  })
}



submit.addEventListener("click",createTask);
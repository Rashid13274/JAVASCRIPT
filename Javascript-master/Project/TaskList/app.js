//Define UI varriable
const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clrbtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');


//load all event listners
loadEventListner();

//load all Event listners:
function loadEventListner(){
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);
    //romove Tasks content
    taskList.addEventListener('click', removeTasks);
    // clear Tasks 
    clrbtn.addEventListener('click', clearListOFtask);
    //FILTER TASKS EVENT
    filter.addEventListener('keyup', filterTask);
}
// Get Tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){

        //create li  element
        const li=document.createElement('li');
        //add class
        li.className='collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
        //create a new Link element
        const link=document.createElement('a');
        // add classname to link
        link.className="secondary-content";
        //add icon html
        link.innerHTML='<i class="fas fa-times"></i>';
        //append  link to li
        li.appendChild(link);
        //append li to ul
        taskList.append(li)
    })
}
// add task
function addTask(e){
    if(taskInput.value===''){
        alert('add the value');
    }
    //create li  element
    const li=document.createElement('li');
    //add class
    li.className='collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create a new Link element
    const link=document.createElement('a');
    // add classname to link
    link.className="secondary-content";
    //add icon html
    link.innerHTML='<i class="fas fa-times"></i>';
    //append  link to li
    li.appendChild(link);
    //append li to ul
    taskList.append(li)
    // store in local storage
    storeTaskInLocalStorage(taskInput.value);
    // clear input
    taskInput.value='';
    e.preventDefault();
}
/**
 * EVENT BUBBLING : IN WHICH A CHAIN OF EVENT OCCURS FROM CHILD TO ITS PARENTS CLASS.
 * EVENT DELEGATION: OCCURS : IN WHICH CHAIN OF EVENT OCCURS FROM PARENT TO ITS CHILD ELEMENT.
 */

// store Task 
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}
// remove from local storage
function removeTasksFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
// remove  Tasks
function removeTasks(e){
    if(e.target.parentElement.classList.contains('secondary-content'))
{
    if(confirm('are you sure')){
        e.target.parentElement.parentElement.remove();
    }
}
}
// clear Tasks
function clearListOFtask(){
    // taskList.innerHTML='';
// FASTER APPROACH
while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
}
clearTaskFromLocalStorage();
}
// clear task from LS
function clearTaskFromLocalStorage(){
    localStorage.clear();
}
// filter task:
 function filterTask(e){
    const text= e.target.value.toLowerCase();
    // querySelector returns node list while getElement by  className returns 
    //html collection so fitst we need to convert in the array to use forEach loop.
   
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const items=task.firstChild.textContent;
            if(items.toLowerCase().indexOf(text) !=-1){
                task.style.display='display';
            }
                else{
                task.style.display='none';

                }
            })
        }
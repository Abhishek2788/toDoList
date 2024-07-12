const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const rowData=document.getElementById("rowdata");

function addTask(){
    if(inputBox.value === ''){
        alert("You must have to write something...");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let i=document.createElement("i");
        i.classList="fa-solid fa-circle-xmark"
        li.appendChild(i);
        inputBox.value="";
    }
    storeData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        storeData()
    }
    else if(e.target.tagName==="I"){
        e.target.parentElement.remove();
        storeData()
    }
});
function storeData(){
    localStorage.setItem("tasks",listContainer.innerHTML);
}
function displayData(){
    listContainer.innerHTML=localStorage.getItem("tasks");
}
displayData();
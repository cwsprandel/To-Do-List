// add todoLogic
    //edit
    //delete
    //add new (submit)
    //check/uncheck
//add todoScreen
    //render
    //

const todoObjectOne = {title: "Title One", description: "Description One", date: "4/29/2023"}
const todoObjectTwo = {title: "Title Two", description: "Description Two", date: "4/27/2023"}
const todoArray = [todoObjectOne, todoObjectTwo];
localStorage.setItem("todos", JSON.stringify(todoArray));

const todoItemsContainer = document.getElementById("todoItemsContainer");


const todoLogic = (() => {

    let allCurrentToDosArray = [];
    let currentToDoItems = [];

    const addNewToDoItem = (newToDoDetails) => {
        //get the current to do tasks and put them into array
        const allCurrentToDoObjects = JSON.parse(localStorage.getItem("todos"));
        //below makes sure that there is something in local storage
        if (allCurrentToDoObjects) {
            allCurrentToDosArray = allCurrentToDoObjects;
        }
        allCurrentToDosArray.push(newToDoDetails);
        localStorage.setItem("todos",JSON.stringify(allCurrentToDosArray));
        
        todoScreen.render();
    }

    currentToDoItems = JSON.parse(localStorage.getItem("todos"));

    return {
        addNewToDoItem,
        currentToDoItems
    }
})();

todoScreen = (() => {

    const render = () => {
        console.log(todoLogic.currentToDoItems);

        for(let todoIndex = 0; todoIndex < todoLogic.currentToDoItems.length; todoIndex++){
            console.log(todoLogic.currentToDoItems[todoIndex]);
        }
    }

    return {
        render
    }
})();




const newToDoItem = (todoObject) => {

    const todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todoItems");

    const todoCheckbox = document.createElement("button");
    todoCheckbox.setAttribute("class", "todoCheckbox");

    const todoTitle = document.createElement("div");
    todoTitle.setAttribute("class", "todoTitle");
    todoTitle.textContent = todoObject.title;

    const todoDescription = document.createElement("div");
    todoDescription.setAttribute("class", "todoDescription");
    todoDescription.textContent = todoObject.description;

    const todoDueDate = document.createElement("div");
    todoDueDate.setAttribute("class", "todoDueDate");
    todoDueDate.textContent = todoObject.date;

    const todoPriority = document.createElement("div");
    todoPriority.setAttribute("class", "todoPriority");
    todoPriority.textContent = "priority";

    const todoEdit = document.createElement("div");
    todoEdit.setAttribute("class", "todoEdit");

    const todoDelete = document.createElement("div");
    todoDelete.setAttribute("class", "todoDelete");

    const emptyCheckboxSVG = document.createElementNS("http://www.w3.org/2000/svg","svg");
    emptyCheckboxSVG.setAttribute("height", "24px");
    emptyCheckboxSVG.setAttribute("fill", "currentColor");
    emptyCheckboxSVG.setAttribute("viewBox", "0 0 16 16");
    const emptyCheckboxPath = document.createElementNS("http://www.w3.org/2000/svg","path");
    emptyCheckboxPath.setAttribute("d", "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z");
    emptyCheckboxSVG.appendChild(emptyCheckboxPath);
    todoCheckbox.appendChild(emptyCheckboxSVG);

    const editSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    editSVG.setAttribute("height", "24px");
    editSVG.setAttribute("fill", "currentColor");
    editSVG.setAttribute("viewBox", "0 0 16 16");
    const editPathOne = document.createElementNS("http://www.w3.org/2000/svg","path");
    editPathOne.setAttribute("d", "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z");
    const editPathTwo = document.createElementNS("http://www.w3.org/2000/svg","path");
    editPathTwo.setAttribute("d", "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z");
    editSVG.appendChild(editPathOne);
    editSVG.appendChild(editPathTwo);
    todoEdit.appendChild(editSVG);

    const deleteSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    deleteSVG.setAttribute("height", "24px");
    deleteSVG.setAttribute("fill", "currentColor");
    deleteSVG.setAttribute("viewBox", "0 0 16 16");
    const deletePath = document.createElementNS("http://www.w3.org/2000/svg","path");
    deletePath.setAttribute("d", "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z");
    deleteSVG.appendChild(deletePath);
    todoDelete.appendChild(deleteSVG);

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoPriority);
    todoItem.appendChild(todoEdit);
    todoItem.appendChild(todoDelete);
    todoItemsContainer.appendChild(todoItem);
}


const selectCheckbox = () => {
    console.log("hello world");
}

const newToDoButton = document.getElementById("addNewToDoItemButton")
newToDoButton.addEventListener("click", () => {
    //newToDoItem();
    //console.log(localStorage.testKey);
    const todoObjectThree = {title: "Title Three", description: "Description Three", date: "4/30/2023"};
    todoLogic.addNewToDoItem(todoObjectThree);
    //const todoForm = document.getElementById("addNewToDoItemForm");
    //todoForm.style.display = "block";
})
// add todoLogic
    //edit (maybe just pop up the same New To Do Form and populate with current info from localstorage, and then resubmit??)
        //delete
        //add new (submit)
    //check/uncheck
//add todoScreen
    //render
    //create all DOM elements (called by render)

//add a project property
//add a priority property

    //below are just some test data to trial the logic
    const todoObjectOne = {title: "Title One", description: "Description One", date: "4/29/2023", completed: true, project: "Project 1", priority: "2"}
    const todoObjectTwo = {title: "Title Two", description: "Description Two", date: "4/27/2023", completed: false, project: "Project 1", priority: "3"}
    const todoArray = [todoObjectOne, todoObjectTwo];
    localStorage.setItem("todos", JSON.stringify(todoArray));

const todoItemsContainer = document.getElementById("todoItemsContainer");

const todoLogic = (() => {

    let updatedToDoArray = JSON.parse(localStorage.getItem("todos"));

    const addNewToDoItem = (newToDoDetails) => {
        //below makes sure that there is something in local storage before trying to add a new item
        if (updatedToDoArray) {
            updatedToDoArray.push(newToDoDetails);
            localStorage.setItem("todos",JSON.stringify(updatedToDoArray));
            
            todoScreen.render();
        }
    }

    const deleteSelectedToDoItem = (todoIndexPosition) => {
        updatedToDoArray.splice(todoIndexPosition,1);
        localStorage.setItem("todos",JSON.stringify(updatedToDoArray));

        todoScreen.render();
    }

    const updateToDoStatus = (todoIndexPosition) => {
        updatedToDoArray[todoIndexPosition].completed = !updatedToDoArray[todoIndexPosition].completed
        localStorage.setItem("todos", JSON.stringify(updatedToDoArray));

        todoScreen.render();
    }

    return {
        addNewToDoItem,
        deleteSelectedToDoItem,
        updateToDoStatus,
        updatedToDoArray
    }
})();

todoScreen = (() => {

    const render = () => {
        todoItemsContainer.innerHTML = "";

        for(let todoIndex = 0; todoIndex < todoLogic.updatedToDoArray.length; todoIndex++){
            createToDoItem(todoLogic.updatedToDoArray[todoIndex], todoIndex);
        }
    }

    const createToDoItem = (todoObject, indexPosition) => {
        //creating the to do task container
        const todoItem = document.createElement("div");
        todoItem.setAttribute("class", "todoItems");
        //creating the to do checkbox
        const todoCheckbox = document.createElement("button");
        todoCheckbox.setAttribute("class", "todoCheckbox");
        todoCheckbox.onclick = function () {
            todoLogic.updateToDoStatus(indexPosition);
        };
        //creating the to do Title and setting it to the object title
        const todoTitle = document.createElement("div");
        todoTitle.setAttribute("class", "todoTitle");
        todoTitle.textContent = todoObject.title;
        //creating the to do Description and setting it to the object description
        const todoDescription = document.createElement("div");
        todoDescription.setAttribute("class", "todoDescription");
        todoDescription.textContent = todoObject.description;
        //creating the to do Due Date and setting it to the object date
        const todoDueDate = document.createElement("div");
        todoDueDate.setAttribute("class", "todoDueDate");
        todoDueDate.textContent = todoObject.date;
        //creating the to do Priority 
    //need to get object priority 
    //need to set to object priority
        const todoPriority = document.createElement("div");
        todoPriority.setAttribute("class", "todoPriority");
        todoPriority.textContent = "priority";
        //creating the to do Edit container
    //change div to button, same as checkbox
        const todoEdit = document.createElement("div");
        todoEdit.setAttribute("class", "todoEdit");
        //creating the to do Delete container and setting the function to delete task
        const todoDelete = document.createElement("button");
        todoDelete.setAttribute("class", "todoDelete");
        todoDelete.onclick = function () {
            todoLogic.deleteSelectedToDoItem(indexPosition);
        };
        //creating and setting the checkbox SVG
        const checkboxSVG = document.createElementNS("http://www.w3.org/2000/svg","svg");
        checkboxSVG.setAttribute("height", "24px");
        checkboxSVG.setAttribute("fill", "currentColor");
        checkboxSVG.setAttribute("viewBox", "0 0 16 16");
        const checkboxPath = document.createElementNS("http://www.w3.org/2000/svg","path");
        checkboxPath.setAttribute("d", "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z");
        checkboxSVG.appendChild(checkboxPath);
        if (todoObject.completed) {
            const checkboxCheckedPath = document.createElementNS("http://www.w3.org/2000/svg","path");
            checkboxCheckedPath.setAttribute("d","M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z");
            checkboxSVG.appendChild(checkboxCheckedPath);
        } 
        todoCheckbox.appendChild(checkboxSVG);
        //creating and setting the edit SVG
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
        //creating and setting the delete SVG
        const deleteSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        deleteSVG.setAttribute("height", "24px");
        deleteSVG.setAttribute("fill", "currentColor");
        deleteSVG.setAttribute("viewBox", "0 0 16 16");
        const deletePath = document.createElementNS("http://www.w3.org/2000/svg","path");
        deletePath.setAttribute("d", "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z");
        deleteSVG.appendChild(deletePath);
        todoDelete.appendChild(deleteSVG);
        //adding all elements to the to do task container
        todoItem.appendChild(todoCheckbox);
        todoItem.appendChild(todoTitle);
        todoItem.appendChild(todoDescription);
        todoItem.appendChild(todoDueDate);
        todoItem.appendChild(todoPriority);
        todoItem.appendChild(todoEdit);
        todoItem.appendChild(todoDelete);
        //adding to do task container to the items container
        todoItemsContainer.appendChild(todoItem);
    }

    return {
        render
    }
})();

//This is the button to add new to do items 
//need to get it to unveil the new to do form 
//create new button (on the form) to execute the following code and transfer all the user inputs 
    //remember the user form validation lesson to make sure everything is correct before submitting

const newToDoItemForm = document.getElementById("addNewToDoItemForm");
const newToDoButton = document.getElementById("addNewToDoItemButton");
newToDoButton.addEventListener("click", () => {
    const todoObjectThree = {title: "Title Three", description: "Description Three", date: "4/30/2023", completed: true, project: "Project 2", priority: "3"};
    todoLogic.addNewToDoItem(todoObjectThree);

    //the code below brings up the form to add a to do item
    newToDoItemForm.style.display = "grid";
})

const addNewToDoItemFormSubmitButton = document.getElementById("addToDoSubmitButton");
addNewToDoItemFormSubmitButton.addEventListener("click", () => {
    let newToDoItemInformation = {};

    let titleElement = document.getElementById("todoItemTitle");
    let descriptionElement = document.getElementById("todoItemDescription");
    let dateElement = document.getElementById("todoItemDueDate");
    let projectElement = document.getElementById("todoItemProject");
    let priorityElement = document.getElementById("todoItemPriority");
    
    newToDoItemInformation.title = titleElement.value;
    newToDoItemInformation.description = descriptionElement.value;
    newToDoItemInformation.date = dateElement.value;
    newToDoItemInformation.completed = false;
    newToDoItemInformation.project = projectElement.value;
    newToDoItemInformation.priority = priorityElement.value;

    todoLogic.addNewToDoItem(newToDoItemInformation);

    titleElement.value = "";
    descriptionElement.value = "";
    dateElement.value = "";
    projectElement.value = "";
    priorityElement.value = "";
    newToDoItemForm.style.display = "none";
})
import { newListButton, modalDialog } from "./content/add-list.js";
import { addGlobalEventListener, createNewContainer, resetContainer } from "./lib/lib.js";
import { todoCards, createTodo, removeTodo } from "./content/todo-lists.js";
const { isThisWeek, isThisMonth, isToday } = require("date-fns");

export { Content, renderTodoCards };

// dom element
const content = document.querySelector(".content");

function Content(){
    // create and render the initial todo list
    const todoArray = todoCards();
    const cardContainer = createNewContainer("todo-cards", todoArray);
    content.appendChild(cardContainer);
    // create and render the add button and modal dialog
    const listButton = newListButton();
    content.appendChild(listButton);
    const modal = modalDialog();
    content.appendChild(modal);

    eventHandlers();
}
function eventHandlers(){
    const content = document.querySelector(".content");
    const modal = document.querySelector(".new-list-modal");
    const todoList = document.querySelector(".todo-cards");

    // content event listener - contains lists and add new list button
    addGlobalEventListener("click", ".content div, button, button>img", content, (e)=>{
        if(buttonCheck(e, "add-new-list")){
            modal.showModal();
        }
    });
    
    // dialog event listener for all buttons within the modal dialog
    addGlobalEventListener("click", "dialog button", modal, (e)=>{
        if(buttonCheck(e, "modal-cancel")){
            modal.close(); 
        } 
        if(buttonCheck(e, "modal-submit")){
            createTodo();
            renderTodoCards();

            modal.close();
        }
    });
    // removes todo item when clicked
    addGlobalEventListener("click", ".todo-card", todoList, (e)=>{
        removeTodo(e.target.id);
        renderTodoCards();
    });
}
// helper function to check the selected button
function buttonCheck(e, selector){
    return e.target.classList.contains(selector);
}
function renderTodoCards(){
    const cardContainer = document.querySelector(".todo-cards");
    const filter = document.querySelector(".filter");
    const todoArray = todoCards();

    // reset the parent container to repopulate
    resetContainer(".todo-cards");
    
    // guard clause to ensure container has been created first
    if(cardContainer == null)
        return;

    todoArray.forEach((e, index)=> {
        const todo = JSON.parse(localStorage.getItem(`Todo #${index}`));
        let date = todo.date;

        switch(filter.textContent){
            case "Today":
                if(isToday(date))
                    cardContainer.appendChild(e);
                break;
            case "Week":
                if(isThisWeek(date))
                    cardContainer.appendChild(e);
                break;
            case "Month":
                if(isThisMonth(date))
                    cardContainer.appendChild(e);
                break;
            default:
                cardContainer.appendChild(e);
                break;
        }
    });
}
// script.js
import board from "./dom/board.js";

function createSidebarBoardList() {
    const boardName = ["Cool", "Warm", "Tea", "Coffe"];
    const ele = document.querySelector(".sidebar-board-list");
    boardName.forEach((name) => {
        ele.appendChild(board.boardItemSidebar(name));
    });
}

function createContainerBoardList(){
    const boardName = ["Cool", "Warm", "Tea", "Coffe",  "Warm", "Tea", "Coffe"];
    const ele = document.querySelector(".content-board-container");
    boardName.forEach((name) => {
        ele.appendChild(board.boardItemContainer(name));
    });
}

createContainerBoardList()
createSidebarBoardList()
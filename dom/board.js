import renderTrelloBoard from "../script.js";
import deleteBoard from "../utils/delete-board.js";

function createPageUrl(boardId){
    const url = new URL(window.location.href);
    const protocol = url.protocol; // Get the protocol (http: or https:)
    const hostname = url.hostname; // Get the hostname (e.g., 127.0.0.1)
    const port = url.port; // Get the port (e.g., 5500)

    return`${protocol}//${hostname}:${port}/pages/board-info.html?board=${boardId}`;
}

function boardItemSidebar(boardName, boardId) {
    // Create the parent div
    console.log(boardName, boardId);
    const sidebarBoardItem = document.createElement("div");
    sidebarBoardItem.className = "sidebar-board-item";

    // Create the colored div
    const coloredDiv = document.createElement("div");
    coloredDiv.style.backgroundColor = "#1a72a5";
    coloredDiv.style.height = "25px";
    coloredDiv.style.width = "35px";
    coloredDiv.style.marginRight = "5px";

    // Create the anchor element
    const anchorElement = document.createElement("a");
    const url = new URL(window.location.href);
    console.log("host", url.hostname);

    anchorElement.href = createPageUrl(boardId);
    anchorElement.textContent = boardName;

    // Append the colored div and anchor element to the parent div
    sidebarBoardItem.appendChild(coloredDiv);
    sidebarBoardItem.appendChild(anchorElement);

    return sidebarBoardItem;
}

function boardItemContainer(boardName, boardId) {
    //anchor element
    const outerDiv = document.createElement('div')
    const anchorElement = document.createElement("a");
   
    outerDiv.style.display = 'flex';
    outerDiv.style.position =  'relative';
    anchorElement.style.width = '200px';
    outerDiv.style.width = '200px';


    anchorElement.href = createPageUrl(boardId);
    anchorElement.textContent = boardName;
    anchorElement.style.backgroundColor = "#005485";
    anchorElement.style.height = "100px";
    anchorElement.style.textDecoration = "none";
    anchorElement.className = 'board-item'
    // Create the button
    const button = document.createElement("button");
    button.className = "del-board-btn center-flex";
    const buttonText = document.createTextNode("X");

    const closeBtn = () => {
        deleteBoard(boardId);
        renderTrelloBoard();
        outerDiv.remove();

    };

    button.appendChild(buttonText);
    button.addEventListener("click", closeBtn);
    outerDiv.appendChild(anchorElement)
    outerDiv.appendChild(button)
    return outerDiv;
}

export default { boardItemSidebar, boardItemContainer };

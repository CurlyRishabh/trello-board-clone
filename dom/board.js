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
    anchorElement.href = `./pages/board-info.html?board=${boardId}`;
    anchorElement.textContent = boardName;

    // Append the colored div and anchor element to the parent div
    sidebarBoardItem.appendChild(coloredDiv);
    sidebarBoardItem.appendChild(anchorElement);

    return sidebarBoardItem;
}

function boardItemContainer(boardName, boardId) {
    //anchor element
    const anchorElement = document.createElement("a");
    anchorElement.href = `./pages/board-info.html?board=${boardId}`;
    anchorElement.textContent = boardName;

    anchorElement.style.backgroundColor = "#005485";
    anchorElement.style.height = "100px";
    anchorElement.style.textDecoration = "none";

    return anchorElement;
}

export default { boardItemSidebar, boardItemContainer };

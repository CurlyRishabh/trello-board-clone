function boardItemSidebar(boardName) {
    // Create the parent div
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
    anchorElement.href = "#";
    anchorElement.textContent = boardName;

    // Append the colored div and anchor element to the parent div
    sidebarBoardItem.appendChild(coloredDiv);
    sidebarBoardItem.appendChild(anchorElement);

    // Append the parent div to the desired location in the DOM
    return sidebarBoardItem;
}

function boardItemContainer(boardName){
    //parent div
    const contentBoard = document.createElement('div');

    contentBoard.style.backgroundColor = '#005485';
    contentBoard.style.height = '100px'
    //anchor element
    const anchorElement = document.createElement('a');
    anchorElement.href = '#'
    anchorElement.textContent = boardName;
    
    anchorElement.style.textDecoration = 'none';
    

    contentBoard.appendChild(anchorElement)

    return contentBoard;
    
}


export default {boardItemSidebar, boardItemContainer};

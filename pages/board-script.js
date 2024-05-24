import createListItem from "../dom/board-list-card.js";
import getBoardList from "../utils/3-get-board-list.js";

function getparam() {
    const urlParams = new URLSearchParams(window.location.search);

    // Check if a parameter exists
    if (urlParams.has("board")) {
        // Get the value of the parameter
        const paramValue = urlParams.get("board");
        console.log("Parameter value:", paramValue);
        return paramValue;
    } else {
        console.log("Parameter not found", urlParams);
        return 0;
    }
}

function createListCard(listName, listId) {
    const ele = document.querySelector(".content-list-container");
    ele.appendChild(createListItem(listName, listId));
}

function renderBoardListCard() {
    const boardId = getparam();
    if (boardId != 0) {
        getBoardList(boardId).then((listData) => {
            console.log(listData)
            const listNameId = listData.map((list) => {
                return {
                    name: list.name,
                    id: list.id,
                };
            });
            console.log("listName", listNameId);
            listNameId.forEach((element) => createListCard(element.name, element.id));
        });
    }
}

// renderBoardListCard();
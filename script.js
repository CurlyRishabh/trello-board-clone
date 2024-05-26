// script.js
import board from "./dom/board.js";
import getAllBoard from "./utils/get-all-board.js";

let allBoard = [{ name: "Cool", id: "66478339562d4ffb01309cd8" },
  { name: "KOK", id: "664c72a48e3a11dfa19ac09f" },
  { name: "LOOPs", id: "664af7544b20627c48ee4b8e" },
  { name: "Protein", id: "664d84c510aeb747e3040f82" },
  { name: "TempBoard", id: "664d85ca31441ffe781e27f7" },
  { name: "boardListCard", id: "664c766631f31c08732288eb" },
  { name: "warm", id: "664ad2a1a1aa3b48dcb12f9d" }]

function renderTrelloBoard() {
    getAllBoard()
        .then((data) => {
            allBoard = data.map((board) => {
                return {
                    name: board.name,
                    id: board.id,
                };
            });
            createContainerBoardList(allBoard);
            createSidebarBoardList(allBoard);
        })
        .catch((err) => console.log(err));
}

function createSidebarBoardList(boardLists) {
    const ele = document.querySelector(".sidebar-board-list");
    ele.innerHTML = '';
    boardLists.forEach(({name, id}) => {
        ele.appendChild(board.boardItemSidebar(name, id));
    });
}

function createContainerBoardList(boardLists) {

    const ele = document.querySelector(".content-board-container");
    ele.innerHTML = '';
    boardLists.forEach(({name, id}) => {
        ele.appendChild(board.boardItemContainer(name, id));
    });
}



// renderTrelloBoard();

// custom hardCoded data
createSidebarBoardList(allBoard);
// createContainerBoardList(allBoard);

export default renderTrelloBoard;
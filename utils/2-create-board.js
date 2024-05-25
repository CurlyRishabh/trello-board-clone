// const createBoardApi = require("./API/create-board");
import createBoardApi from "../api/create-board.js";

function createBoard(boardName) {
    const api = createBoardApi(boardName);
    return fetch(api, {method: 'POST'});
}

// createBoard("Cookies")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

export default createBoard;
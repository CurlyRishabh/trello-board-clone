const createBoardApi = require("./API/create-board");

function createBoard(boardName) {
    const api = createBoardApi(boardName);
    return fetch(api, {method: 'POST'});
}

// createBoard("Cookies")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

module.exports = createBoard;
const createListApi = require("../API/create-list-api");

function createList(boardId, name) {
    const url = createListApi(boardId, name);
    return fetch(url, { method: "POST" });
}

// createList("Q2oBKUuz", "makesTea")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// createList("Q2oBKUuz", "makesMilk")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// createList("Q2oBKUuz", "makesCooffe")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

module.exports = createList;

// const createListApi = require("../API/create-list-api");
import createListApi from "../api/create-list-api.js";
function createList(boardId, name) {
    const url = createListApi(boardId, name);
    return fetch(url, { method: "POST" })
        .then((response) => response.json())
        .catch((err) => console.error(err));
}

// createList("IKDS0g8e", "rishabh")
// .then(data => console.log(data));

// module.exports = createList;
export default createList;

// const deleteListApi = require("../API/delete-list-api");

import deleteListApi from "../api/delete-list-api.js";



function deleteList(listId) {
    const url = deleteListApi(listId);
    return fetch(url, { method: "PUT" });
}

// deleteList('664af0399eb8aea75531175d')
//     .then((response) => {
//         console.log(`Response: ${response.status} ${response.statusText}`);
//         return response.text();
//     })
//     .then((text) => console.log(text))
//     .catch((err) => console.error(err));

export default deleteList;

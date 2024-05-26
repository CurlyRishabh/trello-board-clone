// const createCardApi = require("../API/create-card-api");
import createCardApi from "../api/create-card-api.js";

function createCardList(listId, cardName) {
    const url = createCardApi(listId, cardName);
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .catch((err) => console.log(err));
}

// module.exports = createCard;
export default createCardList;

// const createCardApi = require("../API/create-card-api");
import createCardApi from "../api/create-card-api,js";

function createCard(listId,cardName) {
    const url = createCardApi(listId, cardName);
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
    });
}

// module.exports = createCard;
export default createCard;
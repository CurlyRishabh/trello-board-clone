require("dotenv").config();

const apiKey = process.env.API_KEY;
const apiToken = process.env.TOKEN;

function createCardApi(listId, cardName) {
    return `https://api.trello.com/1/cards?idList=${listId}&key=${apiKey}&token=${apiToken}&name=${cardName}`;
}

module.exports = createCardApi;

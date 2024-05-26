// require("dotenv").config();

// const apiKey = process.env.API_KEY;
// const apiToken = process.env.TOKEN;

const apikey = "1ddb6c0e0fb34f0903eb961e3f829d17";
const token =
    "ATTAc7b11d80e3e4a91e13a47623250956d7fc6ab571d832b94cd84ec92b17257e7fFE458030";

function createCardApi(listId, cardName) {
    return `https://api.trello.com/1/cards?idList=${listId}&key=${apikey}&token=${token}&name=${cardName}`;
}

export default createCardApi;
// module.exports = createCardApi;

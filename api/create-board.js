require("dotenv").config();

const apikey = process.env.API_KEY;
const token = process.env.TOKEN;

function createBoardApi(boardName) {
    return `https://api.trello.com/1/boards/?name=${boardName}&key=${apikey}&token=${token}`;
}

module.exports = createBoardApi;

require("dotenv").config();

const apikey = process.env.API_KEY;
const token = process.env.TOKEN;

function showBoardApi(id) {
    const url = `https://api.trello.com/1/boards/${id}?key=${apikey}&token=${token}`;
    // console.log(url);
    return url;
}

module.exports = showBoardApi;

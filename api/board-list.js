require("dotenv").config();

const apikey = process.env.API_KEY;
const token = process.env.TOKEN;

function boardList(id) {
    const url = `https://api.trello.com/1/boards/${id}/lists?key=${apikey}&token=${token}`;
    // console.log(url)
    return url;
}

module.exports = boardList;

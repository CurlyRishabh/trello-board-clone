require("dotenv").config();

const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;

function createListApi(id, name) {
    const url = `https://api.trello.com/1/boards/${id}/lists?name=${name}&key=${apiKey}&token=${token}`;
    // console.log(url);
    return url;
}

module.exports = createListApi;

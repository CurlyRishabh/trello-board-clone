require("dotenv").config();

const apiKey = process.env.API_KEY;
const token = process.env.TOKEN;

function deleteListApi(id) {
    const url = `https://api.trello.com/1/lists/${id}/closed?key=${apiKey}&token=${token}&value=true`;
    // console.log(url);
    return url;
}

module.exports = deleteListApi;

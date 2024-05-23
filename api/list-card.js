require("dotenv").config();

const apikey = process.env.API_KEY;
const token = process.env.TOKEN;

function listCard(id) {
    // https://api.trello.com/1/lists/{id}/cards?key=APIKey&token=APIToken
    const url = `https://api.trello.com/1/lists/${id}/cards?key=${apikey}&token=${token}`;

    // console.log(url);
    return url;
}

module.exports = listCard;

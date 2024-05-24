// require("dotenv").config();

// const apikey = process.env.API_KEY;
// const token = process.env.TOKEN;
const apikey = "1ddb6c0e0fb34f0903eb961e3f829d17"
const token = "ATTAc7b11d80e3e4a91e13a47623250956d7fc6ab571d832b94cd84ec92b17257e7fFE458030"

function boardList(id) {
    const url = `https://api.trello.com/1/boards/${id}/lists?key=${apikey}&token=${token}`;

    return url;
}
export default boardList;

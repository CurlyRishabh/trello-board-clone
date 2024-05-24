import boardList from "../api/board-list.js";
function getBoardList(id) {
    const url = boardList(id);
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch((err) => console.log(err));
}

// getBoardList("Q2oBKUuz")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

export default getBoardList;

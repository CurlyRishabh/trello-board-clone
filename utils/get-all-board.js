import getAllBoardApi from "../api/get-all-board-api.js";


function getAllBoard() {
    const url = getAllBoardApi();
    return fetch(url)
        .then((response) => {
            if (response.ok) {
              return response.json();
            } 
        })
        .catch((err) => console.error(err));
}
export default getAllBoard;

import deleteBoardApi from "../api/delete-board.js";
// const idBoard = "664846f8dd8a305e12f3d297";

function deleteBoard(boardId = process.argv[2]) {
    const url = deleteBoardApi(boardId);
    return fetch(url, { method: "DELETE" }).then((response) => {
        if (response.ok) {
            console.log('board deleted successfully: ')
            return response;
        } else {
            throw new Error(
                "Failed to delete board with status: " + response.status
            );
        }
    });
}

// deleteBoard(idBoard)
//     .then((res) =>
//         console.log("Board deleted successfully with status:", res.status)
//     )
//     .catch((err) => console.error("Error deleting board:", err));
deleteBoard()
export default deleteBoard;
const boardList = require("./API/board-list");

function getBoardList(id) {
    const url = boardList(id);
    const boardListPromise = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    throw new Error(
                        "Error while fetching list with status: " +
                            response.status
                    );
                }
            })
            .catch((error) => reject(error));
    });

    return boardListPromise;
}

// getBoardList("H5RjsxUq")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

module.exports = getBoardList;

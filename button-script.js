import board from "./script.js";
import createBoard from "./utils/2-create-board.js";

function initializeBoardForm() {
    document
        .getElementById("show-form-btn")
        .addEventListener("click", function () {
            const boardForm = document.getElementById("board-form");
            boardForm.classList.toggle("visible");
        });

    document
        .getElementById("board-name-form")
        .addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            const boardName = document.getElementById("board-name").value;

            //submit funtion definition
            createBoard(boardName)
                .then((response) => response.json())
                .then((data) => {
                    board.renderTrelloBoard();
                })
                .catch((error) => console.error(error));

            console.log("Board name submitted:", boardName);
            // Reset form
            document.getElementById("board-name-form").reset();
            // Hide form after submission
            document.getElementById("board-form").classList.remove("visible");
        });
}

// Call the function to initialize the board form behavior
initializeBoardForm();

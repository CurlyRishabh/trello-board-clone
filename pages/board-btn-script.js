import createList from "../utils/create-list.js";
import { getparam, renderBoardListCard } from "./board-script.js";

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
            const listName = document.getElementById("board-name").value;

            //submit funtion definition
            const boardId = getparam()
            console.log(boardId, listName)
            createList(boardId,listName)
                .then((data) => {
                    document.querySelector(".content-list-container").innerHTML= '';
                    renderBoardListCard();
                })
                .catch((error) => console.error(error));

            // Reset form
            document.getElementById("board-name-form").reset();
            // Hide form after submission
            document.getElementById("board-form").classList.remove("visible");
        });
}

// Call the function to initialize the board form behavior
initializeBoardForm();

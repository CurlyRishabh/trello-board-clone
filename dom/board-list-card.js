import getCard from "../utils/4-get-card.js";

const createCard = (cardName, cardId) => {
    // Create the div element
    const div = document.createElement("div");

    // Add the class to the div
    div.className = "content-container-card";

    // Create the text node with the card name
    const text = document.createTextNode(cardName);

    // Append the text node to the div
    div.appendChild(text);

    // Append the div to the body (or any other container element)
    return div;
};

function createListItem(listName, listid) {
    console.log("in card")
    // Create the outer container div
    const listItemDiv = document.createElement("div");
    listItemDiv.className = "content-list-item";

    // Create the inner container div for title and button
    const innerDiv = document.createElement("div");
    innerDiv.style.display = "flex";
    innerDiv.style.justifyContent = "space-between";

    // Create the title div
    const titleDiv = document.createElement("div");
    const titleText = document.createTextNode(listName);
    titleDiv.appendChild(titleText);

    // Create the button
    const button = document.createElement("button");
    const buttonText = document.createTextNode("X");
    button.appendChild(buttonText);

    // Append title and button to the inner container
    innerDiv.appendChild(titleDiv);
    innerDiv.appendChild(button);

    // Create the card container div
    const cardContainerDiv = document.createElement("div");
    cardContainerDiv.className = "content-list-item-card";

   getCard(listid).then((cardData) => {
        console.log(cardData);
        const cardNameId = cardData.map((card) => {
            return {
                name: card.name,
                id: card.id,
            };
        });
        console.log("crardNameId", cardNameId);
        cardNameId.forEach((element) =>
            cardContainerDiv.appendChild(createCard(element.name, element.id))
        );
        
    });
    // cardContainerDiv.appendChild(createCard('Card1'))

    // Create the add card div
    const addCardDiv = document.createElement("div");
    addCardDiv.className = "content-container-add-card";
    const addCardText = document.createTextNode("+ Add a card");
    addCardDiv.appendChild(addCardText);

    // Append all inner elements to the outer container
    listItemDiv.appendChild(innerDiv);
    listItemDiv.appendChild(cardContainerDiv);
    listItemDiv.appendChild(addCardDiv);

    // Return the outer container
    return listItemDiv;
}
export default createListItem;

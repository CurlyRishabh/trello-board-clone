import deleteCardApi from "../api/delete-card-api.js";
import getCard from "../utils/4-get-card.js";
import createCardList from "../utils/create-card.js";
import deleteList from "../utils/delete-list.js";

const createCard = (cardName, cardId) => {
    // Create the div element
    const div = document.createElement("div");

    // Add the class to the div
    div.className = "content-container-card";

    // Create the text node with the card name
    const text = document.createTextNode(cardName);

    // Create the button
    const button = document.createElement("button");
    button.className = "del-btn center-flex";
    const buttonText = document.createTextNode("X");

    const closeBtn = () => {
        deleteCardApi(cardId).then((data) =>
            console.log("deleted card", cardId)
        );
        div.remove();
    };

    button.appendChild(buttonText);
    button.addEventListener("click", closeBtn);

    // Append the text node and button to the div
    div.appendChild(text);
    div.appendChild(button);

    return div;
};

function createListItem(listName, listid) {
    console.log("in card");
    // Create the outer container div
    const listItemDiv = document.createElement("div");
    listItemDiv.className = "content-list-item";
    listItemDiv.id = listid;
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
    button.className = "del-btn center-flex";
    const buttonText = document.createTextNode("X");

    const closeBtn = () => {
        deleteList(listid).then((data) =>
            console.log("delete list successfulyy", listid)
        );
        listItemDiv.remove();
    };

    button.appendChild(buttonText);
    button.addEventListener("click", closeBtn);
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

    // Append all inner elements to the outer container
    listItemDiv.appendChild(innerDiv);
    listItemDiv.appendChild(cardContainerDiv);
    listItemDiv.appendChild(createCardDiv(listid, cardContainerDiv));

    // Return the outer container
    return listItemDiv;
}

function createCardDiv(listId, cardContainerDiv) {
    // Create the add card div
    const addCardDiv = document.createElement("div");

    addCardDiv.className = "content-container-add-card";

    // Create the button
    const button = document.createElement("button");
    button.textContent = "+ Add a card";
    button.className = "submit-btn";
    const cardForm = createCardForm(listId, cardContainerDiv);
    
    button.addEventListener("click", () => {

        const cardFormDisplay =  cardForm.style.display;
        if(cardFormDisplay == 'none'){
            cardForm.style.display = 'flex';

        } else{
            cardForm.style.display = 'none';
        }
        
       
    });
    addCardDiv.appendChild(button)
    addCardDiv.appendChild(cardForm);
    return addCardDiv
}

function createCardForm(listId, cardContainerDiv){
    const form = document.createElement("form");
        form.id = listId;
        form.className = 'create-card-form'
        form.style.display = 'none';
        const input = document.createElement("input");
        input.type = "text";
        input.id = "card-name";
        input.placeholder = "Enter card name";

        const button = document.createElement("button");
        button.type = "submit";
        button.className = "submit-btn";
        button.textContent = "Submit";
        
        //event handler
        button.addEventListener('click',(e)=>{
            e.preventDefault();
            const value = input.value;
            input.value = ''
            form.style.display = 'none';

            createCardList(listId, value).then((data)=>{

                const ele = createCard(value, data.id);
                cardContainerDiv.appendChild(ele);
            });
            
        })
        form.appendChild(input);
        form.appendChild(button);
        return form;
}
export default createListItem;

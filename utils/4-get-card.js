import listCard from "../api/list-card.js";

function getCard(id) {
    const url = listCard(id);
    console.log(url);
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch((err) => console.log(err));
}

// getCard("664b237f405652d4bc76cdc8")
//     .then((data) => {
//         console.log(data);
//         data.forEach(element => {
//             console.log(element.id, element.name)
//         });
//     })
//     .catch((err) => console.log(err));

export default getCard;
// module.exports = getCard;

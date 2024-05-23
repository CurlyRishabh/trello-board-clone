const listCard = require("./API/list-card");

function getCard(id) {
    const url = listCard(id);
    const cardListPromise = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    throw new Error(
                        "Error while fetching list with status: " +
                            response.status(404)
                    );
                }
            })
            .catch((error) => reject(error));
    });

    return cardListPromise;
}

// getCard("664b237f405652d4bc76cdc8")
//     .then((data) => {
//         data.forEach(element => {
//             console.log(element)
//         });
//     })
//     .catch((err) => console.log(err));

module.exports = getCard;

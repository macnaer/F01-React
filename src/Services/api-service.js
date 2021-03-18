URL = "https://f01-fr-default-rtdb.firebaseio.com/List.json"

export const updateDatabase = () => {
    const data = fetch(URL)
        .then(responce => {
            return responce.json();
        }).then(data => {
            if (data !== null) {
                return data
            } else {
                return []
            }
        })
        .catch(err => {
            return err
        })
    return data;
}

export const saveData = (contactList) => {
    console.log("saveData ", contactList)
    const response = fetch(URL, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactList),
    }).then(response => {
        return response;
    }).catch(err => {
        return err;
    });
    return response;
}
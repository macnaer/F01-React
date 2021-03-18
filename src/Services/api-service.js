URL = "https://f01-fr-default-rtdb.firebaseio.com/List.json"

export const updateDatabase = () => {
    const data = fetch(URL)
        .then(responce => {
            return responce.json();
        }).then(data => {
            if (data !== null) {
                return data
            }
        })
        .catch(err => {
            return err
        })
    return data;
}
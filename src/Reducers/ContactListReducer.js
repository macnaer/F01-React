const initialState = {
    List: [],
    currentContact: []
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":
            return {
                ...state,
                List: action.payload
            }
        case "ADD_NEW_CONTACT":
            return {
                ...state,
                List: action.payload
            }
        case "SEARCH_CONTACT":
            console.log("REDUCER => ", action.payload)
            if (action.payload === 0) {
                return state;
            }
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.Name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            console.log("New List => ", newList)
            if (newList.length === 0) {
                return {
                    ...state,
                    currentContact: []
                }
            } else {
                return {
                    ...state,
                    currentContact: newList
                }
            }

        default:
            return state;
    }
}
export default ContactListReducer;
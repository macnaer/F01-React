export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList
    }
}

export const addNewContact = (contactList) => {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contactList
    }
}

export const searchContact = (name) => {
    return {
        type: "SEARCH_CONTACT",
        payload: name
    }
}
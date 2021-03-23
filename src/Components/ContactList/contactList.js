import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { updateDatabase } from "../../Services/api-service";
import { getAllContacts } from "../../Actions/ContactListActions";

import ContactItem from "./ContactItem/contactItem";

const ContactList = ({ List, currentContact, getAllContacts }) => {

    useEffect(() => {
        updateDatabase().then(data => {
            getAllContacts(data);
        })
    }, [])

    // const item = List.map(contact => {
    //     return (
    //         <ContactItem Id={contact.Id} key={contact.Id} Avatar={contact.Avatar} Gender={contact.Gender} Name={contact.Name} Created={contact.Created}
    //             Role={contact.Role} Status={contact.Status} Email={contact.Email} />
    //     )

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-box clearfix">
                            <div className="table-responsive">
                                <table className="table user-list">
                                    <thead>
                                        <tr>
                                            <th><span>User</span></th>
                                            <th><span>Created</span></th>
                                            <th className="text-center"><span>Status</span></th>
                                            <th><span>Email</span></th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentContact.length === 0 ? List.map(contact => {
                                            return (
                                                <ContactItem key={contact.Id} {...contact} />
                                            )
                                        }) : currentContact.map(contact => {
                                            return (
                                                <ContactItem key={contact.Id} {...contact} />
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    console.log("ContactListReducer ", ContactListReducer);
    const { List, currentContact } = ContactListReducer;
    return { List, currentContact }
}
const mapDispatchToProps = {
    getAllContacts
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
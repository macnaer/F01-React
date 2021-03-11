import React, { Fragment } from "react";

import ContactItem from "./ContactItem/contactItem";

const ContactList = ({ List, onStatusChange, onDelete, onEdit }) => {


    const item = List.map(contact => {
        return (
            <ContactItem Id={contact.Id} key={contact.Id} Avatar={contact.Avatar} Gender={contact.Gender} Name={contact.Name} Created={contact.Created}
                Role={contact.Role} Status={contact.Status} Email={contact.Email}
                onStatusChange={() => onStatusChange(contact.Id)}
                onDelete={() => onDelete(contact.Id)}
                onEdit={() => onEdit(contact.Id)} />
        )
    })
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
                                        {item.length > 0 ? item : <h2>Contact list is empty</h2>}
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
export default ContactList;
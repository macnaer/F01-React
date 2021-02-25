import React, { Fragment } from "react";

import ContactItem from "./ContactItem/contactItem";

const ContactList = ({ List }) => {
    const item = List.map(contact => {
        return (
            <ContactItem Avatar={contact.Avatar} Name={contact.Name} Created={contact.Created}
                Role={contact.Role} Status={contact.Status} Email={contact.Email} />
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
                                        {item}
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
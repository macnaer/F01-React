import React from "react";

const ContactItem = ({ Avatar, Name, Role, Created, Status, Email }) => {

    return (
        <tr>
            <td>
                <img src={Avatar} alt="" />
                <a href="#" className="user-link">{Name}</a>
                <span className="user-subhead">{Role}</span>
            </td>
            <td>
                {Created}
            </td>
            <td className="text-center">
                <span className="label label-default">{Status}</span>
            </td>
            <td>
                <a href="#">{Email}</a>
            </td>
            <td>
                <a href="#" className="table-link">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" className="table-link">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" className="table-link danger">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </td>
        </tr>
    )
}
export default ContactItem;
import React, { Component } from "react";
import "./contactItem.css";

class ContactItem extends Component {

    render() {
        // console.log("contact ITEM PROPS => ", this.props)
        const { onStatusChange } = this.props;
        const { Avatar, Name, Created, Role, Status, Email, Gender } = this.props;
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;

        let statusStyle = "badge bg-secondary status";
        switch (Status) {
            case 'Active': statusStyle = "badge bg-success status"; break;
            case 'Banned': statusStyle = "badge bg-danger status"; break;
            case 'Inactive': statusStyle = "badge  bg-secondary status"; break;
            case 'Pending': statusStyle = "badge bg-warning status"; break;
        }

        return (
            <tr>
                <td>
                    <img src={URL} alt="" />
                    <a href="#" className="user-link">{Name}</a>
                    <span className="user-subhead">{Role}</span>
                </td>
                <td>
                    {Created}
                </td>
                <td className="text-center">
                    <span className={statusStyle} onClick={onStatusChange} >{Status}</span>
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

}
export default ContactItem;
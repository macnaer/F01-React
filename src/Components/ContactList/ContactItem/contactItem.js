import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contactItem.css";

class ContactItem extends Component {

    // componentDidMount() {
    //     console.log("componentDidMount ")
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("nextProps => ", nextProps)
    //     console.log("nextState => ", nextState)
    //     if (nextProps.Status === "Active") {
    //         console.log("Active ")
    //         // return false
    //         return true
    //     }
    //     else {
    //         return true;
    //     }
    // }
    // componentDidUpdate() {
    //     console.log("componentDidUpdate ")
    // }

    // componentWillUnmount() {
    //     console.log("componentWillUnmount")
    // }

    render() {
        // console.log("contact ITEM PROPS => ", this.props)
        const { onStatusChange, onDelete, onEdit } = this.props;
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
                    <Link to="/editContact" onClick={onEdit} className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </Link>
                    <a href="#" className="table-link danger">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse" onClick={onDelete}></i>
                        </span>
                    </a>
                </td>
            </tr>
        )
    }

}
export default ContactItem;
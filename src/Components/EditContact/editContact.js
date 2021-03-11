import React from "react";
import { Redirect } from "react-router-dom";

class EditContact extends React.Component {

    state = {
        "Id": this.props.currentContact.Id,
        "Avatar": this.props.currentContact.Avatar,
        "Name": this.props.currentContact.Name,
        "Created": this.props.currentContact.Created,
        "Role": this.props.currentContact.Role,
        "Status": this.props.currentContact.Status,
        "Email": this.props.currentContact.Email,
        "Gender": "women",
        "isRedirect": false
    }

    getAvatar = (event) => {
        this.setState({
            Avatar: event.target.value
        })
    }

    getName = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    getEmail = (event) => {
        this.setState({
            Email: event.target.value
        })
    }

    getRole = (event) => {
        this.setState({
            Role: event.target.value
        })
    }

    getStatus = (event) => {
        this.setState({
            Status: event.target.value
        })
    }

    editContact = (event) => {
        event.preventDefault();
        const { Id, Avatar, Name, Email, Role, Status, Created, Gender } = this.state;

        const newContact = { Id, Avatar, Name, Created, Role, Status, Gender, Email };
        const { onEditCurrentContact } = this.props;
        onEditCurrentContact(newContact);
        this.setState({
            isRedirect: true
        })

    }

    render() {
        const { Name, Gender, Avatar, Email, Role, Status, isRedirect } = this.state;
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        if (isRedirect) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <h2>Edit contact</h2>
                    <div className="container bootstrap snippets bootdey">
                        <div className="row ng-scope">
                            <div className="col-md-4">
                                <div className="panel panel-default">
                                    <div className="panel-body text-center">
                                        <div className="pv-lg"><img
                                            className="center-block img-responsive img-circle img-thumbnail thumb96"
                                            src={URL} alt="Contact" />
                                        </div>
                                        {Name.length > 0 ? Name : <h3 className="m0 text-bold">Audrey Hunt</h3>}
                                        <div className="mv-lg">
                                            <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                                presentation text. Have fun!</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="pull-right">
                                        </div>
                                        <div className="h4 text-center">Contact Information</div>
                                        <div className="row pv-lg">
                                            <div className="col-lg-2"></div>
                                            <div className="col-lg-8">
                                                <form onSubmit={this.editContact} className="form-horizontal ng-pristine ng-valid">
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact1">Name</label>
                                                        <div className="col-sm-10">
                                                            <input onChange={this.getName} className="form-control" id="inputContact1"
                                                                type="text" placeholder={Name} name='name' />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="avatar">Avatar</label>
                                                        <div className="col-sm-10">
                                                            <input onChange={this.getAvatar} className="form-control" id="avatar"
                                                                type="number" min="1" max="99" placeholder={Avatar} name='avatar' />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact2">Email</label>
                                                        <div className="col-sm-10">
                                                            <input onChange={this.getEmail} className="form-control" id="inputContact2"
                                                                type="email" name='email' placeholder={Email} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact3">Role</label>
                                                        <div className="col-sm-10">
                                                            <input onChange={this.getRole} className="form-control" id="inputContact3"
                                                                type="text" name='Role' placeholder={Role} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact4">Status</label>
                                                        <div className="col-sm-10">
                                                            <input onChange={this.getStatus} className="form-control" id="inputContact4"
                                                                type="text" placeholder={Status} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-sm-offset-2 col-sm-10">
                                                            <button className="btn btn-info" type="submit">Edit contact
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditContact;
import React, { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";


class AddNewContact extends React.Component {

    state = {
        "Avatar": 1,
        "Name": "",
        "Created": "",
        "Role": "",
        "Status": "",
        "Email": "",
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

    addNewContact = (event) => {
        event.preventDefault();
        const { Avatar, Name, Email, Role, Status, Gender } = this.state;

        let Created = Date.now();
        const Id = uuidv4();
        const newContact = { Id, Avatar, Name, Created, Role, Status, Gender, Email };
        const { onAddContact } = this.props;
        onAddContact(newContact);
        this.setState({
            isRedirect: true
        })

    }



    render() {
        const { Name, Gender, Avatar, isRedirect } = this.state;
        if (isRedirect) {
            return (
                <Redirect to="/" />
            )
        }

        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
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
                                                    <form onSubmit={this.addNewContact} className="form-horizontal ng-pristine ng-valid">
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact1">Name</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getName} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Name" name='name' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="avatar">Avatar</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getAvatar} className="form-control" id="avatar"
                                                                    type="number" min="1" max="99" placeholder="Avatar" name='avatar' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact2">Email</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getEmail} className="form-control" id="inputContact2"
                                                                    type="email" name='email' placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact3">Role</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getRole} className="form-control" id="inputContact3"
                                                                    type="text" name='role' placeholder="role" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact4">Status</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getStatus} className="form-control" id="inputContact4"
                                                                    type="text" placeholder="Status" />
                                                            </div>
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact5">Gender</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" id="inputContact5"
                                                                    type="text" value="" />
                                                            </div>
                                                        </div> */}

                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button className="btn btn-info" type="submit">Add contact
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
            </Fragment >
        )
    }

}

export default AddNewContact
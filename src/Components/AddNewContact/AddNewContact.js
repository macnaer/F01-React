import React, { Fragment } from "react";


const AddNewContact = () => {
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
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Contact" />
                                        </div>
                                        <h3 className="m0 text-bold">Audrey Hunt</h3>
                                        <div className="mv-lg">
                                            <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                            presentation text. Have fun!</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="panel panel-default hidden-xs hidden-sm">
                                    <div className="panel-heading">
                                        <div className="panel-title text-center">Recent contacts</div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="media">
                                            <div className="media-left media-middle">
                                                <a href="#"><img
                                                    className="media-object img-circle img-thumbnail thumb48"
                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                    alt="Contact" /></a>
                                            </div>
                                            <div className="media-body pt-sm">
                                                <div className="text-bold">Floyd Ortiz
                                                <div className="text-sm text-muted">12m ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left media-middle">
                                                <a href="#"><img
                                                    className="media-object img-circle img-thumbnail thumb48"
                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                    alt="Contact" /></a>
                                            </div>
                                            <div className="media-body pt-sm">
                                                <div className="text-bold">Luis Vasquez
                                                <div className="text-sm text-muted">2h ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left media-middle">
                                                <a href="#"><img
                                                    className="media-object img-circle img-thumbnail thumb48"
                                                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                                    alt="Contact" /></a>
                                            </div>
                                            <div className="media-body pt-sm">
                                                <div className="text-bold">Duane Mckinney
                                                <div className="text-sm text-muted">yesterday</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left media-middle">
                                                <a href="#"><img
                                                    className="media-object img-circle img-thumbnail thumb48"
                                                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                    alt="Contact" /></a>
                                            </div>
                                            <div className="media-body pt-sm">
                                                <div className="text-bold">Connie Lambert
                                                <div className="text-sm text-muted">2 weeks ago</div>
                                                </div>
                                            </div>
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
                                                <form className="form-horizontal ng-pristine ng-valid">
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact1">Name</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" id="inputContact1"
                                                                type="text" placeholder="" name='name' value="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact2">Email</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" id="inputContact2"
                                                                type="email" name='email' value="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact3">Role</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" id="inputContact3"
                                                                type="text" value="" name='role' />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact4">Status</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" id="inputContact4"
                                                                type="text" value="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact5">Gender</label>
                                                        <div className="col-sm-10">
                                                            <input className="form-control" id="inputContact5"
                                                                type="text" value="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-sm-2 control-label"
                                                            htmlFor="inputContact6">Address</label>
                                                        <div className="col-sm-10">
                                                            <textarea className="form-control" id="inputContact6"
                                                                row="4"></textarea>
                                                        </div>
                                                    </div>


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
        </Fragment>
    )
}

export default AddNewContact
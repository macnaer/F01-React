import React, { Fragment } from "react";
import { connect } from "react-redux";
import { searchContact } from "../../Actions/ContactListActions";

const Search = ({ searchContact }) => {

    const onSearch = (event) => {
        searchContact(event.target.value)
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                <div className="d-flex">
                                    <input onChange={onSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = {
    searchContact
}
export default connect(null, mapDispatchToProps)(Search);
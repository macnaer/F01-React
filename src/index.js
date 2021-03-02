import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import uuid
import { v4 as uuidv4 } from 'uuid';



// Components
import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";

class App extends Component {

  state = {
    List: [
      {
        "Id": uuidv4(),
        "Avatar": "20",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Inactive",
        "Email": "mila@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "50",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Pending",
        "Email": "camil@gmail.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "33",
        "Name": "Jenifer Jonson",
        "Created": "2013/08/03",
        "Role": "Moderator",
        "Status": "Active",
        "Email": "jj@gmail.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "46",
        "Name": "Mikle Jekson",
        "Created": "2013/08/03",
        "Role": "Moderator",
        "Status": "Banned",
        "Email": "mj@gmail.com",
        "Gender": "men"
      }
    ]
  }

  render() {
    const { List } = this.state;
    return (
      <Fragment>
        <Header />
        <Search />
        <ContactList List={List} />
        <Footer />
      </Fragment>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";

class App extends Component {

  state = {
    List: [
      {
        "Avatar": "https://www.bootdey.com/img/Content/avatar/avatar3.png",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Inactive",
        "Email": "mila@kunis.com"
      },
      {
        "Avatar": "https://www.bootdey.com/img/Content/avatar/avatar2.png",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Active",
        "Email": "camil@gmail.com"
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
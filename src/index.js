import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Search />
      <ContactList />
      <Footer />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
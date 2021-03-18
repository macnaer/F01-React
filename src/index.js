import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Import uuid
import { v4 as uuidv4 } from 'uuid';

// Redux store
import store from "./store";
import { Provider } from "react-redux";



// Components
import Header from "./Components/Header/header";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";
import AddNewContact from "./Components/AddNewContact/AddNewContact";
import NotFound from "./Components/NotFound/NotFound";
import EditContact from "./Components/EditContact/editContact";

class App extends Component {

  URL = "https://f01-fr-default-rtdb.firebaseio.com/List.json"
  state = {
    List: [],
    currentContact: ""
  }

  componentDidMount() {
    this.updateDatabase();
  }

  updateDatabase = () => {
    fetch(this.URL)
      .then(responce => {
        return responce.json();
      }).then(data => {
        if (data !== null) {
          this.setState(() => {
            return {
              List: data
            }
          })
        }

      })
      .catch(err => console.log(err))

  }

  saveData = (contactList) => {
    fetch(this.URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList),
    }).then(responce => {
    }).catch(err => console.log(err));
  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: newList,
      };
    });
  }

  onAddContact = (newContact) => {
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact];
    this.setState(() => {
      return {
        List: newList
      }
    })
    this.saveData(newList)
  }

  onEdit = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const selectedContact = this.state.List[index];
    this.setState({
      currentContact: selectedContact
    })
  }

  onEditCurrentContact = (newContact) => {
    const { Id } = newContact;
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, newContact, ...partTwo];

    this.setState(() => {
      return {
        List: newList,
      };
    })
  }

  onStatusChange = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    let newList = this.state.List.slice();
    if (newList[index].Status === "Inactive") {
      newList[index].Status = "Active"
    }

    this.setState(() => {
      return {
        List: newList
      }
    })
  }

  render() {
    const { List, currentContact } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ContactList onEdit={this.onEdit} List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} />} />
            <Route path="/add-contact" exact render={() => <AddNewContact onAddContact={this.onAddContact} />} />
            <Route path="/editContact" exact render={() => <EditContact currentContact={currentContact} onEditCurrentContact={this.onEditCurrentContact} />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider >
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
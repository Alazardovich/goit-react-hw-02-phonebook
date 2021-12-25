import "./App.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";
// import toast, { Toaster } from 'react-hot-toast';

import ContactForm from "./Form/Form";
import Filter from "./Form/Filter";
import ContactList from "./Form/ContactList";

// import ReactDOM from 'react-dom';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
      { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
      { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  findContact = (name) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    return contacts.find(
      (contact) => contact.name.toLowerCase() === normalizedName
    );
  };
  addNewContact = ({ name, number }) => {
    const checkName = this.findContact(name);

    if (checkName) {
      return alert(`${name}is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState((prevState) => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };
  changeFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContact = this.handleFilter();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          onHandleFilter={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

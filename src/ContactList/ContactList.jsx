import React, { Component } from "react";
import ContactItem from "../ContactItem/Item";
import { ListContainer } from "./CSSContactList";

class ContactList extends Component {
  render() {
    const { onHandleFilter, onDeleteContact } = this.props;
    return (
      <ListContainer>
        {onHandleFilter.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ListContainer>
    );
  }
}
export default ContactList;

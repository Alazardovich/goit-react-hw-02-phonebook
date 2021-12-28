import React, { Component } from "react";
import { Item } from "./CSSContactItem";

class ContactItem extends Component {
  render() {
    const { name, number, onDeleteContact, id } = this.props;
    const handleDelete = () => onDeleteContact(id);
    return (
      <Item>
        <span>
          {name}: {number}
        </span>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </Item>
    );
  }
}
export default ContactItem;

import React, { Component } from 'react';

class ContactItem extends Component {
    render() {
        const { name, number, onDeleteContact, id } = this.props;
        const handleDelete = () => onDeleteContact(id);
        return (
            <li>
                <span>
                    {name}:{number}
                </span>
                <button
                type="button"
                onClick={handleDelete}
                >Delete</button>
            </li>
        );
     }
}
export default ContactItem;
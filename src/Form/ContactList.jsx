import React, { Component } from 'react';
import ContactItem from './Item';

class ContactList extends Component {

    render() {
        const { onHandleFilter, onDeleteContact} = this.props;
        return (
            <ul>
               {onHandleFilter.map(({id, name, number}) =>{
                   return (   
                   <ContactItem
                   key={id}
                   id={id}
                   name={name}
                   number={number}
                   onDeleteContact={onDeleteContact}
                   />)
               })}  
            </ul>
        )
    }
}
export default ContactList;
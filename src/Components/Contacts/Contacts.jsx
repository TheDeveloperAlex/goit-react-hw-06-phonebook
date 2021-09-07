import s from './Contacts.module.css';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/contacts-actions';



const Contacts = ({ contacts, setFilter, removeContact, filterName }) => {

    const filter = e => {
        const value = e.target.value;
        setFilter(value);
    };
    return (
        <div>
            <h2>Contacts</h2>
            <input type="text" onChange={filter} />

            <ul>
                {contacts.map(item => (  
                    item.name.includes(filterName) ? <li key={item.id} className={s.li}> {item.name}: {item.number} <button type="button" id={item.id} onClick={() => removeContact(item.id)} className={s.button}>Delete</button> </li> : false
                ))}

            </ul>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
        filterName: state.contacts.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeContact: (id) => dispatch(actions.removeContact(id)),
        setFilter: (value) => dispatch(actions.setFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

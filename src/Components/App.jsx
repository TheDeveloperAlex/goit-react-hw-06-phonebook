import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import s from '../Components/app.module.css';


function App() {
    // const [filterName, setFilterName] = useState('');
    // const [contacts, setContacts] = useState([
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ]);

    // useEffect(() => {
    //     const contacts = localStorage.getItem("contacts");
    //     const parseContacts = JSON.parse(contacts);
    //     if (parseContacts) setContacts(parseContacts);
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("contacts", JSON.stringify(contacts));
    // }, [contacts])

    // const formSubmit = (data) => setContacts(prev => ([...prev, data]));

    // const removeContact = e => {
    //     setContacts(prev => (
    //         contacts.filter(contact => contact.id !== e.target.id)
    // ));
    // }



    // const filter = e => {
    //     const value = e.target.value;
    //     setFilterName(value);
    // };



    return (
        <div className={s.section}>
            <h1>PhoneBook</h1>

            <ContactForm />
            <Contacts />
        </div>
    )


}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
        filter: state.contacts.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addContact: () => dispatch(actions.addContact()),
        removeContact: () => dispatch(actions.addContact()),
        setFilter: () => dispatch(actions.setFilter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



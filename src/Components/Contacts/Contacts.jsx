import s from './Contacts.module.css';
import { connect } from 'react-redux'
// import * as actions from '../../redux/actions';
import * as actions from '../../redux/contacts/contacts-actions';
import { setFilter } from '../../redux/filter/filter-actions';


const Contacts = ({ contacts, setFilter, removeContact, filterName }) => {

    // console.log(contacts.filter(contact => contact.id !== payload));
    console.log(filterName && filterName);

    const filter = e => {
        const value = e.target.value;
        console.log(value);
        setFilter(value);
    };
    return (
        <div>
            <h2>Contacts</h2>
            <input type="text" onChange={filter} />

            <ul>
                {contacts.map(item => (

                    item.name.includes(filterName) ?
                        <li key={item.id} className={s.li}> {item.name}: {item.number} <button type="button" id={item.id} onClick={() => removeContact(item.id)} className={s.button}>Delete</button> </li>
                        : false
                ))}

            </ul>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
        filterName: state.contacts.filter.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // addContact: (contact) => dispatch(actions.addContact(contact)),
        removeContact: (id) => dispatch(actions.removeContact(id)),
        setFilter: (value) => dispatch(setFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

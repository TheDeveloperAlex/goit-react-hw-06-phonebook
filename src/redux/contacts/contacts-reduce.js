import { createStore, combineReducers } from 'redux';
import actionTypes from './contacts-types';


const initialContactsState = [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]



 const contactsReducer = (state = initialContactsState, {type, payload }) => {
    switch(type) {
        case actionTypes.ADD_CONTACT:
            return [...state,  payload];
        case actionTypes.REMOVE_CONTACT:
            return state.filter(contact => contact.id !== payload);
        default: return state;
    }
};

export default contactsReducer;
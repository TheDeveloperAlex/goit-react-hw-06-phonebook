import actionTypes from './contacts-types';

export const addContact = (data) => ({
    type: actionTypes.ADD_CONTACT,
    payload: data,
});

export const removeContact = (id) => ({
    type: actionTypes.REMOVE_CONTACT,
    payload: id,
});
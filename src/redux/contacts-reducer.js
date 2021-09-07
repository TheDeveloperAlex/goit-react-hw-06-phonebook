import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import { combineReducers } from "redux";

const initialContactsState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsReducer = createReducer(initialContactsState, {
  [actions.createContact]: (state, action) => [...state, action.payload],
  [actions.removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [actions.setFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

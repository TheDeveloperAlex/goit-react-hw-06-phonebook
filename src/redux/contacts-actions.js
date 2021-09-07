import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const removeContact = createAction("contacts/RemoveContact");
const createContact = createAction("contacts/createContact", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));
const setFilter = createAction("contacts/SetFilter");

export default {
  removeContact,
  createContact,
  setFilter,
};

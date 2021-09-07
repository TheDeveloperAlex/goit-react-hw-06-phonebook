import { createStore, combineReducers  } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from './contacts/contacts-reduce';
import filterReducer from './filter/filter-reduce';

// const initialState = {
//     contacts: {
//         items: [
//             {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//         ],
//         filter: ''
//     }
// }

// const reducer = (state = initialState, {type, payload }) => {
//     switch (type) {
        
//         // contact => contact.id !== e.target.id
        
//     }
// };

const mainContactsReducer = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
})


const rootReducer = combineReducers({
    contacts: mainContactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;   
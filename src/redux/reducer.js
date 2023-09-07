import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlise';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// ----------native----------
// export const formReducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case 'addContact':
//       console.log(state);
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case 'delAll':
//       return { ...state, contacts: [] };
//     case 'deleteContact':
//       return { ...state, contacts: [...action.payload] };
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialState.filter, action) => {
//   switch (action.type) {
//     case 'chengeFilter':
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };

// ----------------toolkit-------------
// export const formReducer = createReducer(initialState.contacts, {
//   [addContact]: (state, action) => {
//     return { ...state, contacts: [...state.contacts, action.payload] };
//   },
//   [deleteContact]: (state, action) => {
//     return { ...state, contacts: [...action.payload] };
//   },
//   [delAll]: (state, action) => {
//     return { ...state, contacts: [] };
//   },
// });

// const filterReducer = createReducer(initialState.filter, {
//   [chengeFilter]: (state, action) => {
//     return { ...state, filter: action.payload.toLowerCase().trim() };
//   },
// });

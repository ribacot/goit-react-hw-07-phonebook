import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: nanoid() }],
      };
    },
    deleteContact: (state, action) => {
      return { ...state, contacts: [...action.payload] };
    },
    delAll: (state, _) => {
      return { ...state, contacts: [] };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, delAll } = contactsSlice.actions;

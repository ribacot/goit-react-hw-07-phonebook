import { useState } from 'react';
import { FiXSquare } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import DeleteAll from 'components/deleteAll/DeleteAll';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delAll, deleteContact } from 'redux/contacts/contactsSlice';

export const ContactsList = () => {
  const [checked, setChecked] = useState(false);

  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const deleteAllContact = () => {
    dispatch(delAll());
  };

  const deleteItem = contactId => {
    const contactDel = contacts.filter(contact => contact.id !== contactId);
    dispatch(deleteContact(contactDel));
  };

  return (
    <>
      <DeleteAll
        onDeleteAllContact={deleteAllContact}
        checkedEl={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      {getFilteredContacts().length ? (
        <ul className={css.listContacts}>
          {getFilteredContacts().map(({ name, id, number }) => (
            <li key={id} className={css.contact}>
              {name}:
              <span className={css.contact_tel}>
                {number}
                <button
                  className={css.btn_del}
                  type="button"
                  disabled={checked}
                  onClick={() => deleteItem(id)}
                >
                  <IconContext.Provider value={{ size: '1.2em' }}>
                    <FiXSquare />
                  </IconContext.Provider>
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="not_found">Not found contacts</p>
      )}
    </>
  );
};

// ContactsList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired)
//     .isRequired,
//   onDeleteAllContact: PropTypes.func.isRequired,
// };

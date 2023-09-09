import { FiXSquare } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delContactsThunk } from 'redux/contacts/productThunk';

export const ContactsList = () => {
 const { filter } = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    console.log('filter',filter)
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  return (
    <>
      {getFilteredContacts()?.length ? (
        <ul className={css.listContacts}>
          {getFilteredContacts()?.map(({ name, id, number }) => (
            <li key={id} className={css.contact}>
              {name}:
              <span className={css.contact_tel}>
                {number}
                <button
                  className={css.btn_del}
                  type="button"
                  onClick={() => dispatch(delContactsThunk(id))}
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

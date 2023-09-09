import Container from './container/Container';
import { FormPhone } from './form/FormPhone';
import { ContactsList } from './contacts_list/ContactsList';
import Search from './search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/productThunk';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Container title="Phone book">
        <FormPhone />
      </Container>
      <Container title="Contacts">
        {error && <p>Error!!!!!!</p>}
        {contacts?.length ? (
          <>
            <Search />
            <ContactsList />
          </>
        ) : (
          <p className="not_found">Phone book is empty</p>
        )}
        {isLoading && <p>Loading...</p>}
      </Container>
    </>
  );
};

import Container from './container/Container';
import { FormPhone } from './form/FormPhone';
import { ContactsList } from './contacts_list/ContactsList';
import Search from './search/Search';
import { useSelector } from 'react-redux';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <>
      <Container title="Phone book">
        <FormPhone />
      </Container>
      <Container title="Contacts">
        {contacts.length ? (
          <>
            <Search />
            <ContactsList />
          </>
        ) : (
          <p className="not_found">Phone book is empty</p>
        )}
      </Container>
    </>
  );
};

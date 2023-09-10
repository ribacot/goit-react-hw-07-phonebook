import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const useGetFilteredContacts = () => {
  const { filter } = useSelector(selectFilter);
  const { contacts } = useSelector(selectContacts);
console.log('filtered')
  return contacts?.filter(({ name }) => name.toLowerCase().includes(filter));
};
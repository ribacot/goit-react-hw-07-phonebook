export const getContacts = async () => {
  const data = await fetch(
    'https://64fa2e8c4098a7f2fc1570fd.mockapi.io/api/v1/contacts?sortBy=name'
  );
  return await data.json();
};

export const addContact = async contact => {
  const data = await fetch(
    'https://64fa2e8c4098a7f2fc1570fd.mockapi.io/api/v1/contacts',
    {
      method: 'POST',
      body: contact,
    }
  );
  console.log(contact)
// console.log(data.json())
  return await data.json();
};

export const delContact = async id => {
  const data = await fetch(
    `https://64fa2e8c4098a7f2fc1570fd.mockapi.io/api/v1/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );
  return await data.json();
};

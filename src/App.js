// import { useEffect, Suspense } from 'react';

// import { useDispatch, useSelector } from 'react-redux';

// import { Switch } from 'react-router-dom';

import ContactForm from './components/Form';

import ContactList from './components/ContactList';

import Filter from './components/Filter';

import Title from './components/Title';

// import Loader from './components/Loader/Loader';

import { FormContainer } from './App.styles';

export const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const addContact = (name, number) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} is already in the contact list`);
  //     return;
  //   }
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   setContacts(contacts => [contact, ...contacts]);
  // };

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');

  //   const parsedContacts = JSON.parse(savedContacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  return (
    <FormContainer>
      <Title text={'Phonebook'} />
      <ContactForm />
      <Title text={'Contacts'} />
      <Filter />
      <ContactList />
    </FormContainer>
  );
};

export default App;

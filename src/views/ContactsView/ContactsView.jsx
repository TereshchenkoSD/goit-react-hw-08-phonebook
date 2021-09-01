import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Container from '@material-ui/core/Container';
import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import selectors from '../../redux/selectors/contactsSelectors';
// import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactTitle, ContactIcon } from './ContactView.styles';

export default function ContactsView(params) {
  const loading = useSelector(selectors.isLoading);
  return (
    <Container maxWidth="md" title="Phonebook">
      <ToastContainer autoClose={3000} />
      <ContactIcon size="50" />
      <Form />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
      {loading && (
        <Loader type="Audio" color="#3f51b5" height={80} width={80} />
      )}
    </Container>
  );
}

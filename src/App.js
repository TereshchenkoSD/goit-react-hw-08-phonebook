import { useEffect, Suspense, lazy } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Switch } from 'react-router-dom';

import { fetchCurrentUser } from './redux/operations/authorizationOperations';

import Container from '@material-ui/core/Container';

import AppBar from './components/AppBar';

import PrivateRoute from './components/PrivateRoute';

import PublicRoute from './components/PublicRoute';

import { getIsFetchingCurrent } from './redux/selectors/authorizationSelectors';

import Loader from './components/Loader/Loader';

const HomeView = lazy(() => import('./views/HomeView'));
const SignUpView = lazy(() => import('./views/SignUpView'));
const SignInView = lazy(() => import('./views/SignInView.jsx'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

// import ContactForm from './components/Form';

// import ContactList from './components/ContactList';

// import Filter from './components/Filter';

// import Title from './components/Title';

// import { FormContainer } from './App.styles';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container maxWidth="md">
      {isFetchingCurrent ? (
        <Loader />
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <SignUpView />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <SignInView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
};

export default App;

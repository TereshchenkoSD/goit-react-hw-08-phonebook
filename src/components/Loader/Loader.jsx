import Spinner from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { LoaderContainer } from './Loader.styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={6000}
      />
    </LoaderContainer>
  );
};

export default Loader;

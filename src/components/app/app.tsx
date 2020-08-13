import React, {FunctionComponent} from 'react';
import {GlobalStyles} from './style';
import Header from '../header/header';

const App: FunctionComponent = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
};

export default App;

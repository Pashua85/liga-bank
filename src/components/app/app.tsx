import React, {FunctionComponent} from 'react';
import {GlobalStyles} from './style';
import Header from '../header/header';
import SlideCarousel from '../slide-carousel/slide-carousel';
import Services from '../services/services';

const App: FunctionComponent = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <SlideCarousel />
      <Services />
    </div>
  );
};

export default App;

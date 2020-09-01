import React, {FunctionComponent} from 'react';
import {GlobalStyles} from './style';
import Header from '../header/header';
import SlideCarousel from '../slide-carousel/slide-carousel';
import Services from '../services/services';
import Calculator from '../calculator/calculator';

const App: FunctionComponent = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <SlideCarousel />
      <Services />
      <Calculator />
    </div>
  );
};

export default App;

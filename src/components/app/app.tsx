import React, {FunctionComponent} from 'react';
import {GlobalStyles} from './style';
import Header from '../header/header';
import SlideCarousel from '../slide-carousel/slide-carousel';

const App: FunctionComponent = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <SlideCarousel />
    </div>
  );
};

export default App;

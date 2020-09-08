import React, {FunctionComponent} from 'react';
import {GlobalStyles, AppWrapper} from './style';
import Header from '../header/header';
import SlideCarousel from '../slide-carousel/slide-carousel';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import Departments from '../departments/departments';
import Footer from '../footer/footer';


const App: FunctionComponent = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <SlideCarousel />
      <Services />
      <Calculator />
      <Departments />
      <Footer />
    </AppWrapper>
  );
};

export default App;

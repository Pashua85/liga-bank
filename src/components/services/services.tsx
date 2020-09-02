import React, {FunctionComponent} from 'react';
import {useViewport} from '../../hooks/useViewport';
import {Container} from './style';
import DesktopServices from '../desktop-services/desktop-services';
import ServicesSlider from '../services-slider/services-slider';

const Services: FunctionComponent = () => {
  const {width} = useViewport();

  if (width <= 1023) {
    return (
      <Container>
        <ServicesSlider />
      </Container>
    );
  } else {
    return (
      <Container>
        <DesktopServices />
      </Container>
    );
  }

};

export default Services;

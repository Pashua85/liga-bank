import React, {FunctionComponent} from 'react';
import {useViewport} from '../../hooks/useViewport';
import DesktopServices from '../desktop-services/desktop-services';
import ServicesSlider from '../services-slider/services-slider';

const Services: FunctionComponent = () => {
  const {width} = useViewport();

  if (width <= 1023) {
    return (
      <ServicesSlider />
    );
  } else {
    return (
      <DesktopServices />
    );
  }

};

export default Services;

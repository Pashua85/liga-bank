import React, {FunctionComponent, useState} from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/slide-1-desk.jpg';
import slide2 from '../../assets/slide-2-desk.jpg';
import slide3 from '../../assets/slide-3-desk.jpg';

const SlideCarousel: FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slide-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="first-slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="second-slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="third-slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

  );
};

export default SlideCarousel;


import React, {FunctionComponent, useState} from 'react';
import {useViewport} from '../../hooks/useViewport';
import {chooseSrc} from '../../assets/chooseSrc';
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';
import slideDesk1 from '../../assets/slide-1-desk.jpg';
import slideDesk2 from '../../assets/slide-2-desk.jpg';
import slideDesk3 from '../../assets/slide-3-desk.jpg';
import slideTab1 from '../../assets/slide-1-tab.jpg';
import slideTab2 from '../../assets/slide-2-tab.jpg';
import slideTab3 from '../../assets/slide-3-tab.jpg';
import slideMobile1 from '../../assets/slide-1-mobile.jpg';
import slideMobile2 from '../../assets/slide-2-mobile.jpg';
import slideMobile3 from '../../assets/slide-3-mobile.jpg';

const SlideCarousel: FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const {width} = useViewport();


  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slide-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={4000} fade={false} pause={false} defaultActiveIndex={0}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={chooseSrc(width, {
              deskSrc: slideDesk1,
              tabSrc: slideTab1,
              mobileSrc: slideMobile1
            })}
            alt="first-slide"
          />
          <Carousel.Caption>
            <h1 className="caption-header .caption-header--white">Лига Банк</h1>
            <p className="caption-text .caption-text--white">Кредиты на любой случай</p>
            <a href="#calculator" className="caption-btn caption-btn--white">Рассчитать кредит</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={chooseSrc(width, {
              deskSrc: slideDesk2,
              tabSrc: slideTab2,
              mobileSrc: slideMobile2
            })}
            alt="second-slide"
          />
          <Carousel.Caption>
            <h1 className="caption-header caption-header--black">Лига Банк</h1>
            <p className="caption-text caption-text--black">Ваша уверенность в завтрашнем дне</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={chooseSrc(width, {
              deskSrc: slideDesk3,
              tabSrc: slideTab3,
              mobileSrc: slideMobile3
            })}
            alt="third-slide"
          />
          <Carousel.Caption>
            <h1 className="caption-header caption-header--black">Лига Банк</h1>
            <p className="caption-text caption-text--black">Всегда рядом</p>
            <a href="#departments" className="caption-btn caption-btn--blue">Найти отделение</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
};

export default SlideCarousel;


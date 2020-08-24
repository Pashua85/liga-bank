import React, {useState, useRef, useEffect, FunctionComponent} from 'react';
import {Swipeable} from 'react-swipeable';
import {SliderContainer, SliderContent, Slide} from './style';

interface SliderProps {
  slides: React.ReactNode[]
}

const Slider: FunctionComponent<SliderProps> = ({slides}) => {
  const lastSlide = slides[slides.length - 1];
  const firstSlide = slides[0];
  const secondSlide = slides[1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 100 / 3,
    transition: 0.6,
    _slides: [lastSlide, firstSlide, secondSlide]
  });

  const {transition, translate, activeSlide, _slides} = state;

  const transitionRef = useRef<() => void>();

  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const smooth = () => {
      if (transitionRef.current !== undefined) {
        transitionRef.current();
      }
    };

    window.addEventListener(`transitionend`, smooth);

    return () => {
      window.removeEventListener(`transitionend`, smooth);
    };
  }, []);

  useEffect(() => {
    if (transition === 0) {
      setState({
        ...state,
        transition: 0.6
      });
    }
  }, [state, transition]);

  const smoothTransition = () => {
    let smoothSlides = [];

    if (activeSlide === slides.length - 1) {
      smoothSlides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      smoothSlides = [lastSlide, firstSlide, secondSlide];
    } else {
      smoothSlides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      _slides: smoothSlides,
      transition: 0,
      translate: 100 / 3
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + 100 / 3,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    });
  };

  return (
    <Swipeable
      trackMouse={true}
      onSwipedLeft={nextSlide}
      onSwipedRight={prevSlide}
    >
      <SliderContainer>
        <SliderContent
          translate={translate}
          transition={transition}
        >
          {
            _slides.map((slide, i) => (
              <Slide key={i}>
                {slide}
              </Slide>
            ))
          }
        </SliderContent>
      </SliderContainer>
    </Swipeable>
  );
};

export default Slider;



import React, {FunctionComponent} from 'react';
import {Container, RangeInput} from './style';

interface RangeSliderProps {
  value: number,
  min: number,
  max: number,
  step: number,
  onChange: (newPercent: number) => void
}

const RangeSlider: FunctionComponent<RangeSliderProps> = ({value, min, max, step, onChange}) => {

  const handleSlide = (e: React.SyntheticEvent) => {
    onChange(parseInt((e.target as HTMLInputElement).value, 10));
  };

  return (
    <Container>
      <RangeInput type="range" min={min} max={max} value={value} step={step} onInput={handleSlide} />
    </Container>
  );
};

export default RangeSlider;

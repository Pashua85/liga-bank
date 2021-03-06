import React, {FunctionComponent} from 'react';
import {Container, RangeInput, Label} from './style';

interface RangeSliderProps {
  value: number,
  min: number,
  max: number,
  step: number,
  onChange: (newPercent: number) => void,
  hasBorders: boolean,
  items?: string,
  minItems?: string,
  maxItems?: string
}

const RangeSlider: FunctionComponent<RangeSliderProps> = ({value, min, max, step, onChange, hasBorders, items,
  minItems, maxItems}) => {

  const handleSlide = (e: React.SyntheticEvent) => {
    onChange(parseInt((e.target as HTMLInputElement).value, 10));
  };

  return (
    <Container>
      <RangeInput type="range" min={min} max={max} value={value} step={step} onInput={handleSlide} onChange={() => {}} />
      {
        !hasBorders &&
        <Label place="start">{`${value}${items}`}</Label>
      }
      {
        hasBorders &&
        <React.Fragment>
          <Label place="start">{`${min} ${minItems}`}</Label>
          <Label place="end">{`${max} ${maxItems}`}</Label>
        </React.Fragment>
      }
    </Container>
  );
};

export default RangeSlider;

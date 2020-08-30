import React, {FunctionComponent, useState} from 'react';
import {Container, Title, Field, Input, Span, ErrorSpan, InnerField, Button} from './style';

interface FieldWithButtonsProps {
  value: number,
  minValue: number,
  maxValue: number,
  title: string,
  onValidChange: (newValue: number) => void,
  step: number
}

const FieldWithButtons: FunctionComponent<FieldWithButtonsProps> = ({value, minValue, maxValue, title, onValidChange, step}) => {
  const [inputValue, setInputValue] = useState(value);
  const [errorMessage, setErrorMessage] = useState(``);

  const validate = (valueNumber: number): boolean => {
    if (valueNumber >= minValue && valueNumber <= maxValue) {
      return true;
    } else {
      return false;
    }
  };

  const handleDecreaseClick = (): void => {
    if (inputValue <= minValue) {
      return;
    } else if (inputValue - step >= minValue) {
      setInputValue(inputValue - step);
      if (validate(inputValue - step)) {
        onValidChange(inputValue - step);
      }
    } else {
      setInputValue(minValue);
      onValidChange(minValue);
    }
  };

  const handleIncreaseClick = (): void => {
    if (inputValue >= maxValue) {
      return;
    } else if (inputValue + step <= maxValue) {
      setInputValue(inputValue + step);
      if (validate(inputValue + step)) {
        onValidChange(inputValue + step);
      }
    } else {
      setInputValue(maxValue);
      onValidChange(maxValue);
    }
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(event.target.value, 10));
    if (validate(parseInt(event.target.value, 10))) {
      onValidChange(parseInt(event.target.value, 10));
      setErrorMessage(``);
    } else {
      setErrorMessage(`Некорректное значение`);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Field errorMessage={errorMessage}>
        <Button name="decrease" isDisabled={inputValue <= minValue} onClick={handleDecreaseClick} />
        <InnerField>
          <Input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            min={minValue}
            max={maxValue}
          />
          <Span>рублей</Span>
        </InnerField>
        <ErrorSpan>{errorMessage}</ErrorSpan>
        <Button name="increase" isDisabled={inputValue >= maxValue} onClick={handleIncreaseClick} />
      </Field>
    </Container>
  );
};

export default FieldWithButtons;

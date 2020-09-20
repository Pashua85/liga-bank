import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Title, Field, Input, Span, ErrorSpan, InnerField, Button, Subtitle} from './style';
import {getCurrencyWord} from '../../assets/getCurrencyWord';

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

  useEffect(() => {
    setInputValue(value);
  }, [value]);

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
    let newValue: number;
    if (event.target.value.length === 0) {
      newValue = 0;
    } else {
      const newValueMatch = event.target.value.match(/\d+/g);
      newValue = newValueMatch !== null ? parseInt(newValueMatch.join(``), 10) : 0;
    }
    setInputValue(newValue);
    if (validate(newValue)) {
      onValidChange(newValue);
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
            type="text"
            lang="en-150"
            value={`${inputValue.toLocaleString()} ${getCurrencyWord(inputValue)}`}
            onChange={handleInputChange}
            min={minValue}
            max={maxValue}
          />
        </InnerField>
        <ErrorSpan>{errorMessage}</ErrorSpan>
        <Button name="increase" isDisabled={inputValue >= maxValue} onClick={handleIncreaseClick} />
      </Field>
      <Subtitle>{`От ${minValue.toLocaleString()}\u00A0\u00A0до ${maxValue.toLocaleString()} рублей`}</Subtitle>
    </Container>
  );
};

export default FieldWithButtons;

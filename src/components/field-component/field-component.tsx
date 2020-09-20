import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Title, Field, InnerField, Span, Input} from './style';

interface FieldProps {
  value: number,
  title: string,
  min: number,
  max: number,
  onValidChange: (newValue: number) => void,
  items: string
}

const FieldComponent: FunctionComponent<FieldProps> = ({title, value, min, max, onValidChange, items}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: number;
    if (event.target.value.length === 0) {
      newValue = 0;
    } else {
      const newValueMatch = event.target.value.match(/\d+/g);
      newValue = newValueMatch !== null ? parseInt(newValueMatch.join(``), 10) : 0;
    }
    setInputValue(newValue);
    if ((newValue >= min) && (newValue <= max)) {
      onValidChange(newValue);
    }
  };

  const handleBlur = () => {
    if (inputValue < min) {
      setInputValue(min);
      onValidChange(min);
    } else if (inputValue > max) {
      setInputValue(max);
      onValidChange(max);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Field>
        <InnerField>
          <Input
            type="text"
            value={`${inputValue.toLocaleString()} ${items}`}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </InnerField>
      </Field>
    </Container>
  );
};

export default FieldComponent;

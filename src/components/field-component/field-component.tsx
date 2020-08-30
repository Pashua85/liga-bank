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

  const handleInputChange = (e: React.SyntheticEvent) => {
    const newValue = parseInt((e.target as HTMLInputElement).value, 10);
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
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <Span>{items}</Span>
        </InnerField>
      </Field>
    </Container>
  );
};

export default FieldComponent;

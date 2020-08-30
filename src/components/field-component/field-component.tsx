import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Title, Field, InnerField, Span, Input} from './style';

interface FieldProps {
  value: number,
  title: string,
  min: number,
  max: number,
  onValidChange: (newValue: number) => void
}

const FieldComponent: FunctionComponent<FieldProps> = ({title, value, min, max, onValidChange}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.SyntheticEvent) => {
    setInputValue(parseInt((e.target as HTMLInputElement).value, 10));
    if (parseInt((e.target as HTMLInputElement).value, 10) >= min) {
      onValidChange(parseInt((e.target as HTMLInputElement).value, 10));
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
          <Span>рублей</Span>
        </InnerField>
      </Field>
    </Container>
  );
};

export default FieldComponent;

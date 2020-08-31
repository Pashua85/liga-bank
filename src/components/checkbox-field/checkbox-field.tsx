import React, {FunctionComponent} from 'react';
import {Wrapper, Checkbox, Label, Text} from './style';

interface CheckboxFieldProps {
  isChecked: boolean,
  onChange: (newIsChecked: boolean) => void,
  label: string
}

const CheckboxField: FunctionComponent<CheckboxFieldProps> = ({isChecked, onChange, label}) => {
  const handleChange = (e: React.SyntheticEvent) => {
    onChange((e.target as HTMLInputElement).checked);
  };

  return (
    <Wrapper>
      <Label>
        <Checkbox type="checkbox" checked={isChecked} onChange={handleChange} />
        <Text>{label}</Text>
      </Label>
    </Wrapper>
  );
};

export default CheckboxField;

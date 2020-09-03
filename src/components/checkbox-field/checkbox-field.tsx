import React, {FunctionComponent} from 'react';
import {Checkbox, Label, Text, TextSpan} from './style';

interface CheckboxFieldProps {
  isChecked: boolean,
  onChange: (newIsChecked: boolean) => void,
  label: string
  textSize?: string
}

const CheckboxField: FunctionComponent<CheckboxFieldProps> = ({isChecked, onChange, label, textSize}) => {
  const handleChange = (e: React.SyntheticEvent) => {
    onChange((e.target as HTMLInputElement).checked);
  };

  return (
    <Label>
      <Checkbox type="checkbox" checked={isChecked} onChange={handleChange} />
      <Text textSize={textSize}>
        <TextSpan textSize={textSize}>{label}</TextSpan>
      </Text>
    </Label>
  );
};

export default CheckboxField;

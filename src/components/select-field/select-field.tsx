import React, {FunctionComponent, useState} from 'react';
import {Transition} from 'react-transition-group';
import {Field, List, Item} from './style';
import {CalculatorType} from '../calculator/calculator';

interface SelectFieldProps {
  options: CalculatorType[],
  value: CalculatorType,
  onChange: (value: CalculatorType) => void
}

const SelectField: FunctionComponent<SelectFieldProps> = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (op: CalculatorType, e: React.SyntheticEvent): void => {
    onChange(op);
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    e.stopPropagation();
  };

  const handleFieldClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Transition in={isOpen} timeout={200}>
      {(state: string) => (
        <Field isOpen={isOpen} onClick={handleFieldClick} state={state}>
          {
            value === null ?
              `Выберите цель кредита` :
              value
          }
          <List isOpen={isOpen}>
            {
              options.map((op) => (
                <Item key={op} onClick={(e) => handleItemClick(op, e)}>{op}</Item>
              ))
            }
          </List>
        </Field>
      )}
    </Transition>

  );
};

export default SelectField;

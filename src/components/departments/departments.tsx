import React, {FunctionComponent, useState} from 'react';
import {Container, Filters, CheckboxWrapper, Header} from './style';
import CheckboxField from '../checkbox-field/checkbox-field';

const Departments: FunctionComponent = () => {
  const [inRussia, setInRussia] = useState(false);
  const [inCIS, setInCIS] = useState(false);
  const [inEurope, setInEurope] = useState(false);

  const handleInRussiaChange = (newIsChecked: boolean) => {
    setInRussia(newIsChecked);
  };

  const handleInCISChange = (newIsChecked: boolean) => {
    setInCIS(newIsChecked);
  };

  const handleInEuropeChange = (newIsChecked: boolean) => {
    setInEurope(newIsChecked);
  };

  return (
    <Container>
      <Header>Отделения Лига Банка</Header>
      <Filters>
        <CheckboxWrapper>
          <CheckboxField
            isChecked={inRussia}
            onChange={handleInRussiaChange}
            label="Россия"
            textSize="14"
          />
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxField
            isChecked={inCIS}
            onChange={handleInCISChange}
            label="СНГ"
            textSize="14"
          />
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxField
            isChecked={inEurope}
            onChange={handleInEuropeChange}
            label="Европа"
            textSize="14"
          />
        </CheckboxWrapper>
      </Filters>
    </Container>
  );
};

export default Departments;


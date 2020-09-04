import React, {FunctionComponent, useState, useEffect} from 'react';
import {Container, Filters, CheckboxWrapper, Header} from './style';
import CheckboxField from '../checkbox-field/checkbox-field';
import MapComponent from '../map-component/map-component';
import {citiesInRussia, citiesInCIS, citiesInEurope, ICity} from '../../data/cities';

type Cities = ICity[]

const Departments: FunctionComponent = () => {
  const [inRussia, setInRussia] = useState(true);
  const [inCIS, setInCIS] = useState(false);
  const [inEurope, setInEurope] = useState(false);
  const [cities, setCities] = useState<Cities>([]);

  useEffect(() => {
    if (inRussia) {
      setCities((prevState) => [...prevState, ...citiesInRussia]);
    } else {
      setCities((prevState) => prevState.filter((city) => {
        return city.region !== `Россия`;
      }));
    }
  }, [inRussia]);

  useEffect(() => {
    if (inCIS) {
      setCities((prevState) => [...prevState, ...citiesInCIS]);
    } else {
      setCities((prevState) => prevState.filter((city) => {
        return city.region !== `СНГ`;
      }));
    }
  }, [inCIS]);

  useEffect(() => {
    if (inEurope) {
      setCities((prevState) => [...prevState, ...citiesInEurope]);
    } else {
      setCities((prevState) => prevState.filter((city) => {
        return city.region !== `Европа`;
      }));
    }
  }, [inEurope]);

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
      <MapComponent cities={cities} />
    </Container>
  );
};

export default Departments;


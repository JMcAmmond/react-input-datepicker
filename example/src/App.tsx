import React, { useState, useCallback } from 'react';

import {
  StyledInputDatepicker,
  DateContainer,
} from './common/input-datepicker';
import { H3, Header } from './common/elements';

const App = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [maxValue, setMaxValue] = useState(new Date());
  const [minValue, setMinValue] = useState(new Date(1956, 0, 1));

  const onDateChange = useCallback((date: any) => {
    setValue(date);
  }, []);

  const onMaxDateChange = useCallback((date: any) => {
    setMaxValue(date);
  }, []);

  const onMinDateChange = useCallback((date: any) => {
    setMinValue(date);
  }, []);

  return (
    <div>
      <Header>React Input Datepicker</Header>

      <H3>Standard</H3>
      <DateContainer>
        <StyledInputDatepicker value={value} onDateChange={onDateChange} />
      </DateContainer>

      <H3>Max Date</H3>
      <DateContainer>
        <StyledInputDatepicker
          value={maxValue}
          onDateChange={onMaxDateChange}
          maxDate={new Date(1999, 11, 31)}
        />
      </DateContainer>

      <H3>Min Date</H3>
      <DateContainer>
        <StyledInputDatepicker
          value={minValue}
          onDateChange={onMinDateChange}
          minDate={new Date(2000, 0, 1)}
        />
      </DateContainer>

      <H3>Custom Labels</H3>
      <DateContainer>
        <StyledInputDatepicker
          value={value}
          onDateChange={onDateChange}
          labels={{
            year: 'Año',
            month: 'Mes',
            day: 'Día',
          }}
        />
      </DateContainer>
    </div>
  );
};

export default App;

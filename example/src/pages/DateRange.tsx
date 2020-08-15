import React, { useState, useCallback } from 'react';
import { StyledInputDatepicker } from '../common/input-datepicker';
import CodeTemplate from '../common/CodeTemplate';
import { PageHeader } from '../common/elements';

const DateRange: React.FC = () => {
  const [minValue, setMinValue] = useState<Date | null>(new Date(1956, 0, 1));
  const [maxValue, setMaxValue] = useState<Date | null>(new Date());

  const onMinDateChange = useCallback((date: any) => {
    setMinValue(date);
  }, []);

  const onMaxDateChange = useCallback((date: any) => {
    setMaxValue(date);
  }, []);

  return (
    <>
      <PageHeader>Date Range</PageHeader>

      <CodeTemplate
        title="Max Date"
        code={maxDate}
        exampleComponent={
          <StyledInputDatepicker
            value={maxValue}
            onDateChange={onMaxDateChange}
            maxDate={new Date(1999, 11, 31)}
          />
        }
      />

      <CodeTemplate
        title="Min Date"
        code={minDate}
        exampleComponent={
          <StyledInputDatepicker
            value={minValue}
            onDateChange={onMinDateChange}
            minDate={new Date(2000, 0, 1)}
          />
        }
      />
    </>
  );
};

export default DateRange;

const minDate = `
  return (
    <InputDatepicker
      minDate={new Date(2000, 0, 1)}
      ...
    />
  )
`;

const maxDate = `
  return (
    <InputDatepicker
      maxDate={new Date(1999, 11, 31)}
      ...
    />
  )
`;

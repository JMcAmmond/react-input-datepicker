import React, { useState, useCallback } from 'react';
import { StyledInputDatepicker } from '../common/input-datepicker';
import CodeTemplate from '../common/CodeTemplate';
import { PageHeader } from '../common/elements';

const Order: React.FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const onDateChange = useCallback((date: any) => {
    setValue(date);
  }, []);

  return (
    <>
      <PageHeader>Date Format</PageHeader>

      <CodeTemplate
        title="Input Order"
        code={code}
        exampleComponent={
          <StyledInputDatepicker
            value={value}
            onDateChange={onDateChange}
            format="year/month/day"
          />
        }
      />
    </>
  );
};

export default Order;

const code = `
  return (
    <InputDatepicker
      format="year/month/day"
      ...
    />
  )

  /**
   * Format Options
   * 
   * 'day/month/year'
   * 'day/year/month'
   * 'month/day/year'
   * 'month/year/day'
   * 'year/month/day'
   * 'year/day/month'
   */
`;

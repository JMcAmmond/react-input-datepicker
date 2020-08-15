import React, { useState, useCallback } from 'react';
import { StyledInputDatepicker } from '../common/input-datepicker';
import CodeTemplate from '../common/CodeTemplate';

const Simple: React.FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const onDateChange = useCallback((date: any) => {
    setValue(date);
  }, []);

  return (
    <>
      <CodeTemplate
        code={code}
        exampleComponent={
          <StyledInputDatepicker value={value} onDateChange={onDateChange} />
        }
      />
    </>
  );
};

export default Simple;

const code = `
  const [value, setValue] = useState<Date | null>(new Date());

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);

  return (
    <InputDatepicker
      value={value}
      onDateChange={onDateChange}
    />
  )
`;

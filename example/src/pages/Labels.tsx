import React, { useState, useCallback } from 'react';
import { StyledInputDatepicker } from '../common/input-datepicker';
import CodeTemplate from '../common/CodeTemplate';
import { PageHeader } from '../common/elements';

const Labels: React.FC = () => {
  const [monthsValue, setMonthsValue] = useState<Date | null>();
  const [labelsValue, setLabelsValue] = useState<Date | null>();
  const [placeholdersValue, setPlaceholdersValue] = useState<Date | null>();

  const onMonthsDateChange = useCallback((date: Date) => {
    setMonthsValue(date);
  }, []);
  const onLabelsDateChange = useCallback((date: Date) => {
    setLabelsValue(date);
  }, []);
  const onPlaceholdersDateChange = useCallback((date: Date) => {
    setPlaceholdersValue(date);
  }, []);

  return (
    <>
      <PageHeader>Labels</PageHeader>

      <CodeTemplate
        title="Custom Labels"
        code={months}
        exampleComponent={
          <StyledInputDatepicker
            value={monthsValue}
            onDateChange={onMonthsDateChange}
            labels={{
              year: 'Año',
              month: 'Mes',
              day: 'Día',
            }}
          />
        }
      />
      <CodeTemplate
        title="Hide Labels"
        code={labels}
        exampleComponent={
          <StyledInputDatepicker
            value={labelsValue}
            onDateChange={onLabelsDateChange}
            showLabels={false}
          />
        }
      />

      <CodeTemplate
        title="Hide Placeholders"
        code={placeholders}
        exampleComponent={
          <StyledInputDatepicker
            value={placeholdersValue}
            onDateChange={onPlaceholdersDateChange}
            showPlaceholders={false}
          />
        }
      />
    </>
  );
};

export default Labels;

const months = `
  return (
    <InputDatepicker
      labels={{
        year: 'Año',
        month: 'Mes',
        day: 'Día',
      }}
      ...
    />
  )
`;

const labels = `
  return (
    <InputDatepicker
      showLabels={false}
      ...
    />
  )
`;

const placeholders = `
  return (
    <InputDatepicker
      showPlaceholders={false}  
      ...
    />
  )
`;

[![NPM](https://img.shields.io/npm/v/react-input-datepicker.svg)](https://www.npmjs.com/package/react-input-datepicker)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-input-datepicker)
![GitHub contributors](https://img.shields.io/github/contributors/jmcammond/react-input-datepicker)
![npm](https://img.shields.io/npm/dt/react-input-datepicker)
![NPM](https://img.shields.io/npm/l/react-input-datepicker)

# react-input-datepicker

A simple and reusable input datepicker component for React ([Demo](https://jeffmcammond.com/react-input-datepicker/))

![Input Datepicker](https://github.com/jmcammond/react-input-datepicker/raw/master/example/assets/input-datepicker.png 'Input Datepicker')

## Install

```bash
npm install react-input-datepicker
```

## Usage

```tsx
import React, { useState, useCallback } from 'react';
import InputDatepicker from 'react-input-datepicker';

export const App = () => {
  const [value, setValue] = useState<Date | null>();

  const onDateChange = useCallback((date: Date) => {
    setValue(date);
  }, []);

  return (
    <InputDatepicker
      value={value}
      onDateChange={onDateChange}
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date()}
    />
  );
};
```

## Available Props

| Prop             | Type    | Default                                   | Options                                                                                                    |
| ---------------- | ------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| value            | Date    | -                                         | -                                                                                                          |
| onDateChange     | func    | -                                         | -                                                                                                          |
| minDate          | Date    | -                                         | -                                                                                                          |
| maxDate          | Date    | -                                         | -                                                                                                          |
| maxDateMessage   | string  | 'Date must be less than {maxDate + 1}'    | -                                                                                                          |
| minDateMessage   | string  | 'Date must be greater than {minDate - 1}' | -                                                                                                          |
| invalidMessage   | string  | 'Not a valid date'                        | -                                                                                                          |
| showLabels       | boolean | true                                      | true, false                                                                                                |
| showErrors       | boolean | true                                      | true, false                                                                                                |
| showPlaceholders | boolean | true                                      | true, false                                                                                                |
| format           | string  | 'month/day/year'                          | 'day/month/year', 'day/year/month', 'month/day/year', 'month/year/day', 'year/month/day', 'year/day/month' |
| labels           | Object  | English labels                            | { year: 'Year'; month: 'Month'; day: 'Day'; }                                                              |

## License

MIT © [JMcAmmond](https://github.com/JMcAmmond)

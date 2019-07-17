# react-input-datepicker

> 

[![NPM](https://img.shields.io/npm/v/react-input-datepicker.svg)](https://www.npmjs.com/package/react-input-datepicker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple and reusable input datepicker component for React ([Demo](https://jeffmcammond.com/react-input-datepicker/))

![Input Datepicker](https://github.com/jmcammond/react-input-datepicker/raw/master/example/assets/input-datepicker.png "Input Datepicker")

## Install

```bash
npm install --save react-input-datepicker
```

## Usage

```jsx
import React, { Component } from 'react'

import InputDatepicker from 'react-input-datepicker';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  onDateChange = date => {
    this.setState({
      value: date
    });
  };

  render() {
    return (
      <div>
        <InputDatepicker
          value={this.state.value}
          onDateChange={this.onDateChange}
          minDate={new Date('01-01-1900')}
          maxDate={new Date()}
        />
      </div>
    );
  }
}
```

## Available Props

| Prop           | Type    | Default                                   | Options     |
|----------------|---------|-------------------------------------------|-------------|
| value          | Date    | -                                         | -           |
| minDate        | Date    | -                                         | -           |
| maxDate        | Date    | -                                         | -           |
| maxDateMessage | string  | 'Date must be less than {maxDate + 1}'    | -           |
| minDateMessage | string  | 'Date must be greater than {minDate - 1}' | -           |
| invalidMessage | string  | 'Not a valid date'                        | -           |
| showLabels     | boolean | true                                      | true, false |
| showErrors     | boolean | true                                      | true, false |
| onDateChange   | func    | -                                         | -           |
| format         | string  | 'month/day/year'                          | 'day/month/year', 'day/year/month', 'month/day/year', 'month/year/day', 'year/month/day', 'year/day/month' |

## License

MIT © [JMcAmmond](https://github.com/JMcAmmond)


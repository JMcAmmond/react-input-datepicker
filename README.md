# react-input-datepicker

> 

[![NPM](https://img.shields.io/npm/v/react-input-datepicker.svg)](https://www.npmjs.com/package/react-input-datepicker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple and reusable input datepicker component for React 

![Input Datepicker](https://github.com/jmcammond/react-input-datepicker/raw/master/example/assets/input-datepicker.png "Input Datepicker")

## TODO:
  - Write unit tests
  - Write component config
  - Add type definitions

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

## License

MIT © [JMcAmmond](https://github.com/JMcAmmond)


import React, { Component } from 'react';

import { StyledInputDatepicker, DateContainer } from './common/input-datepicker';
import { H3, Header } from './common/elements'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      maxValue: new Date(),
      minValue: new Date('01-01-1956')
    };
  }

  onDateChange = date => {
    this.setState({
      value: date
    });
  };

  onMaxDateChange = date => {
    this.setState({
      maxValue: date
    });
  };

  onMinDateChange = date => {
    this.setState({
      minValue: date
    });
  };

  render() {
    return (
      <div>
        <Header>React Input Datepicker</Header>

        <H3>Standard</H3>
        <DateContainer>
          <StyledInputDatepicker
            value={this.state.value}
            onDateChange={this.onDateChange}
          />
        </DateContainer>

        <H3>Max Date</H3>
        <DateContainer>
          <StyledInputDatepicker
            value={this.state.maxValue}
            onDateChange={this.onMaxDateChange}
            maxDate={new Date('01-01-2000')}
          />
        </DateContainer>

        <H3>Min Date</H3>
        <DateContainer>
          <StyledInputDatepicker
            value={this.state.minValue}
            onDateChange={this.onMinDateChange}
            minDate={new Date('01-01-2000')}
          />
        </DateContainer>
      </div>
    );
  }
}

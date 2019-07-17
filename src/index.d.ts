import * as React from "react";

export interface InputDatepickerProps {
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  maxDateMessage?: string;
  minDateMessage?: string;
  invalidMessage?: string;
  showLabels?: boolean;
  showErrors?: boolean;
  onDateChange?: () => void;
  className?: string;
  format?: 'day/month/year' | 'day/year/month' | 'month/day/year' | 'month/year/day' | 'year/month/day' | 'year/day/month';
}

declare class InputDatepicker extends React.Component<InputDatepickerProps, any> { }

export default InputDatepicker;
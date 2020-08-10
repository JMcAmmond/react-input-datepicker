/* eslint-disable react/no-array-index-key */
import React, {
  useState,
  useCallback,
  ChangeEvent,
  useMemo,
  useEffect,
} from 'react';
import { isValidDate, buildDateFromInput } from './validation/date';
import { IDate, IInputDatePicker } from './interfaces';
import { spreadDateToObject } from './helpers';
import { flexRow, flexColumn } from './styles';

const InputDatepicker: React.FC<IInputDatePicker> = (props) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [date, setDate] = useState<IDate>(spreadDateToObject(props.value));

  const orderArray = useMemo(() => props.format!.split('/'), [props.format]);

  /**
   * Call onDateChange prop with the provided date object
   */
  const onDateChange = useCallback(
    (newDate) => {
      props.onDateChange(newDate);
    },
    [props],
  );

  /**
   * Build a Date object and call the onDateChange function
   */
  const validDateChange = useCallback(() => {
    const newDate = buildDateFromInput(date.day, date.month, date.year);
    onDateChange(newDate);
  }, [date.day, date.month, date.year, onDateChange]);

  /**
   * Sets the error state and calls the onDateChange function with a null value
   */
  const renderError = useCallback(
    (err, hasErr) => {
      setError(err);
      setHasError(hasErr);
      onDateChange(null);
    },
    [onDateChange],
  );

  /**
   * Validates if a the inputs form a valid date
   * Returns null if values are not set
   * Returns null and errors if date is not valid
   * Returns a valid date object when everything passes
   */
  const validate = useCallback(() => {
    const { day, month, year } = date;

    // Must contain values
    if (!day || !month || !year) {
      onDateChange(null);
      return;
    }

    // Validate date input
    const errorString = isValidDate(day, month, year, props);
    if (errorString !== '') {
      renderError(errorString, true);
      return;
    }

    validDateChange();
  }, [date, onDateChange, props, renderError, validDateChange]);

  /**
   * Sets the date state when an input value changes
   */
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setDate({ ...date, [e.target.name]: e.target.value });
    },
    [date],
  );

  /**
   * Create an input field with a form label
   */
  const inputField = useCallback(
    (id, label, value) => {
      const className = `rid_${id}-container`;

      return (
        <div className={`${className}`} style={flexColumn}>
          {props.showLabels ? <label htmlFor={id}>{label}</label> : null}
          <input
            className={`${hasError ? 'has-error' : ''}`}
            type="number"
            id={id}
            name={id}
            value={value}
            onChange={onInputChange}
            onBlur={validate}
          />
        </div>
      );
    },
    [hasError, onInputChange, props.showLabels, validate],
  );

  /**
   * Creates an object with all input field elements
   */
  const dateField = useMemo(() => {
    const dayLabel = (props.labels && props.labels.day) || 'Day';
    const monthLabel = (props.labels && props.labels.month) || 'Month';
    const yearLabel = (props.labels && props.labels.year) || 'Year';

    const fields = {
      day: inputField('day', dayLabel, date.day),
      month: inputField('month', monthLabel, date.month),
      year: inputField('year', yearLabel, date.year),
    };

    return fields;
  }, [date.day, date.month, date.year, inputField, props]);

  /**
   * When ever the date state changes then clear errors and validate the date
   */
  useEffect(() => {
    setError('');
    setHasError(false);
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { value } = props;
    const { day, month, year } = date;

    if (value !== null && value !== buildDateFromInput(day, month, year)) {
      setDate(spreadDateToObject(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div className={`rid ${props.className}`}>
      <div className="rid_date-container" style={flexRow}>
        {orderArray.map((key, i) => {
          return (
            <React.Fragment key={`${key}-${i}`}>
              {dateField[key]}
            </React.Fragment>
          );
        })}
      </div>
      {props.showErrors && hasError && (
        <div className="error-message">{error}</div>
      )}
    </div>
  );
};

export default InputDatepicker;

InputDatepicker.defaultProps = {
  value: null,
  showLabels: true,
  showErrors: true,
  format: 'month/day/year',
  className: '',
};

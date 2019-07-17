import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { isValidDate, buildDateFromInput } from './validation/date'

import styles from './styles.css'

export default class InputDatepicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      error: null,
      hasError: false,
      ...this.getDateStateFromProps(props)
    }
  }

  componentDidMount = () => {
    this.validate()
  }

  /**
   * Update state when props change
   */
  componentWillReceiveProps = (props) => {
    if (props.value !== this.state.value) {
      this.setState({
        value: props.value,
        ...this.getDateStateFromProps(props)
      })
    }

    return null
  }

  /**
   * Parse date object into day, month, year state
   */
  getDateStateFromProps = (props) => {
    return {
      day: props.value ? props.value.getDate() : '',
      month: props.value ? props.value.getMonth() + 1 : '',
      year: props.value ? props.value.getFullYear() : ''
    }
  }

  /**
   * Handle input hange event
   */
  onInputChange = (e) => {
    this.setState({
      error: '',
      hasError: false,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Validate inputs. Varify that they are set and contain a valid date.
   */
  validate = () => {
    const { day, month, year } = this.state
    // const { minDate, maxDate } = this.props

    // Must contain values
    if (!day || !month || !year) {
      this.onDateChange(null)
      return
    }

    // Validate date input
    const error = isValidDate(day, month, year, this.props)
    if (error !== '') {
      this.renderError(error, true)
      return
    }

    this.validDateChange()
  }

  /**
   * Set error state
   */
  renderError = (error, hasError) => {
    this.setState({
      error: error,
      hasError: hasError
    })

    this.onDateChange(null)
  }

  /**
   * Convert inputs to date object and call onDateChange function
   */
  validDateChange = () => {
    const date = buildDateFromInput(this.state.day, this.state.month, this.state.year)

    this.onDateChange(date.toDate())
  }

  /**
   * Set date object in state and return new date
   */
  onDateChange = (date) => {
    this.setState({
      value: date
    }, () => {
      this.props.onDateChange(date)
    })
  }

  /**
   * Return requested date container
   */
  getDateFormat = (value) => {
    const format = {
      day: this.renderDayContainer(),
      month: this.renderMonthContainer(),
      year: this.renderYearContainer()
    }

    return format[value]
  }

  /**
   * Day date container
   */
  renderDayContainer = () => {
    return (
      <div className={`rid_day-container ${styles.flexColumn}`}>
        {this.props.showLabels ? <label htmlFor='day'>Day</label> : null}
        <input
          className={`${this.state.hasError ? 'has-error' : ''}`}
          type='number'
          id='day'
          name='day'
          value={this.state.day}
          onChange={this.onInputChange}
          onBlur={this.validate}
        />
      </div>
    )
  }

  /**
   * Month date container
   */
  renderMonthContainer = () => {
    return (
      <div className={`rid_month-container ${styles.flexColumn}`}>
        {this.props.showLabels ? <label htmlFor='month'>Month</label> : null}
        <input
          className={`${this.state.hasError ? 'has-error' : ''}`}
          type='number'
          id='month'
          name='month'
          value={this.state.month}
          onChange={this.onInputChange}
          onBlur={this.validate}
        />
      </div>
    )
  }

  /**
   * Year date container
   */
  renderYearContainer = () => {
    return (
      <div className={`rid_year-container ${styles.flexColumn}`}>
        {this.props.showLabels ? <label htmlFor='year'>Year</label> : null}
        <input
          className={`${this.state.hasError ? 'has-error' : ''}`}
          type='number'
          id='year'
          name='year'
          value={this.state.year}
          min={1}
          onChange={this.onInputChange}
          onBlur={this.validate}
        />
      </div>
    )
  }

  render() {
    const orderArray = this.props.format.split('/')

    return (
      <div className={`rid ${this.props.className}`}>
        <div className={`rid_date-container ${styles.flexRow}`}>
          {orderArray.map((value, i) => {
            return (
              <React.Fragment key={i}>
                {this.getDateFormat(value)}
              </React.Fragment>
            )
          })}
        </div>
        {this.props.showErrors && (
          <div className='error-message'>
            {this.state.error}
          </div>
        )}
      </div>
    )
  }
}

InputDatepicker.defaultProps = {
  value: null,
  showLabels: true,
  showErrors: true,
  format: 'month/day/year',
  className: ''
}

InputDatepicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/no-unused-prop-types
  minDate: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/no-unused-prop-types
  maxDate: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/no-unused-prop-types
  maxDateMessage: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  minDateMessage: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  invalidMessage: PropTypes.string,
  showLabels: PropTypes.bool,
  showErrors: PropTypes.bool,
  onDateChange: PropTypes.func,
  className: PropTypes.string,
  format: PropTypes.oneOf(
    [
      'day/month/year',
      'day/year/month',
      'month/day/year',
      'month/year/day',
      'year/month/day',
      'year/day/month'
    ]
  )
}

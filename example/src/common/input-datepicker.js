import styled from 'styled-components';
import InputDatepicker from 'react-input-datepicker';

const StyledInputDatepicker = styled(InputDatepicker)`
  .rid_date-container {
    > div {
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }

      label {
        font-size: 0.8rem;
        margin-bottom: 5px;
        font-weight: 600;
      }

      input {
        color: #444444;
        font-size: 13px;
        padding: 11px;
        border-radius: 3px;
        border: none;
        text-align: center;

        &.has-error {
          border: 2px solid #f97474;
        }
      }
    }

    .rid_day-container input {
      width: 60px;
    }
    .rid_month-container input {
      width: 60px;
    }
    .rid_year-container input {
      width: 80px;
    }
  }

  .error-message {
    color: #f97474;
    margin-top: 6px;
    font-size: 0.9rem;
  }
`

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .rid_date-container {
    justify-content: center;
  }
`;

export { StyledInputDatepicker, DateContainer }

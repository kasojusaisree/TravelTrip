import {useState} from 'react'
import './index.css'

const DateSelection = ({dates, setDates, setStep}) => {
  const [errors, setErrors] = useState({
    startDate: '',
    endDate: '',
  })

  const onChangeStartDate = event => {
    setDates({
      ...dates,
      startDate: event.target.value,
    })
  }

  const onChangeEndDate = event => {
    setDates({
      ...dates,
      endDate: event.target.value,
    })
  }

  const onNext = () => {
    const newErrors = {
      startDate: '',
      endDate: '',
    }

    if (dates.startDate === '') {
      newErrors.startDate = 'Select start date'
    }

    if (dates.endDate === '') {
      newErrors.endDate = 'Select end date'
    }

    if (
      dates.startDate !== '' &&
      dates.endDate !== '' &&
      dates.endDate < dates.startDate
    ) {
      newErrors.endDate = 'The end date cannot be less than the start date'
    }

    setErrors(newErrors)

    if (newErrors.startDate === '' && newErrors.endDate === '') {
      setStep(prev => prev + 1)
    }
  }

  return (
    <form className="date-container">
      <h1 className="form-heading">Date Selection</h1>
      <p>Select your Start and End Date</p>

      <div className="input-container">
        <label htmlFor="startDate" className="label">
          Start Date
        </label>

        <input
          id="startDate"
          type="date"
          className="input"
          value={dates.startDate}
          onChange={onChangeStartDate}
        />

        {errors.startDate && <p className="error">{errors.startDate}</p>}
      </div>

      <div className="input-container">
        <label htmlFor="endDate" className="label">
          End Date
        </label>

        <input
          id="endDate"
          type="date"
          className="input"
          value={dates.endDate}
          onChange={onChangeEndDate}
        />

        {errors.endDate && <p className="error">{errors.endDate}</p>}
      </div>

      <div className="buttons-container">
        <button
          type="button"
          className="previous-btn"
          onClick={() => setStep(1)}
        >
          Previous
        </button>

        <button type="button" className="next-btn" onClick={onNext}>
          Next
        </button>
      </div>
    </form>
  )
}

export default DateSelection

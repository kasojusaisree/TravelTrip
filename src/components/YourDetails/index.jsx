import {useState} from 'react'
import './index.css'

const YourDetails = ({userDetails, setUserDetails, setStep}) => {
  const [errors, setErrors] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
  })

  const onChangeName = event => {
    setUserDetails({
      ...userDetails,
      name: event.target.value,
    })
  }

  const onChangeStartLocation = event => {
    setUserDetails({
      ...userDetails,
      startLocation: event.target.value,
    })
  }

  const onChangeEndLocation = event => {
    setUserDetails({
      ...userDetails,
      endLocation: event.target.value,
    })
  }

  const onNext = () => {
    const newErrors = {
      name: '',
      startLocation: '',
      endLocation: '',
    }

    if (userDetails.name === '') {
      newErrors.name = 'Enter your name'
    }

    if (userDetails.startLocation === '') {
      newErrors.startLocation = 'Enter your start location'
    }

    if (userDetails.endLocation === '') {
      newErrors.endLocation = 'Enter your end location'
    }

    setErrors(newErrors)

    if (
      newErrors.name === '' &&
      newErrors.startLocation === '' &&
      newErrors.endLocation === ''
    ) {
      setStep(2)
    }
  }

  return (
    <form className="details-container">
      <h1 className="form-heading">Your Details</h1>
      <p>Enter your name and location details</p>

      <div className="input-container">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className="input"
          type="text"
          placeholder="Enter your name"
          value={userDetails.name}
          onChange={onChangeName}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="input-container">
        <label className="label" htmlFor="start">
          Start Location
        </label>
        <input
          id="start"
          className="input"
          type="text"
          placeholder="Enter start location"
          value={userDetails.startLocation}
          onChange={onChangeStartLocation}
        />
        {errors.startLocation && (
          <p className="error">{errors.startLocation}</p>
        )}
      </div>

      <div className="input-container">
        <label className="label" htmlFor="end">
          End Location
        </label>
        <input
          id="end"
          className="input"
          type="text"
          placeholder="Enter end location"
          value={userDetails.endLocation}
          onChange={onChangeEndLocation}
        />
        {errors.endLocation && <p className="error">{errors.endLocation}</p>}
      </div>

      <button className="next-btn" type="button" onClick={onNext}>
        Next
      </button>
    </form>
  )
}

export default YourDetails

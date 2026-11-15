import './index.css'

const Success = ({
  setStep,
  setUserDetails,
  setDates,
  setGuests,
  setTravelAssistance,
}) => {
  const onBookNewTrip = () => {
    setUserDetails({name: '', startLocation: '', endLocation: ''})
    setDates({startDate: '', endDate: ''})
    setGuests({adults: 1, children: 0, infants: 0})
    setTravelAssistance({needed: false, assistanceType: ''})
    setStep(1)
  }

  return (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
        alt="Success"
        className="success-image"
      />

      <h1>Awesome</h1>
      <p>Your booking has been confirmed</p>

      <button type="button" className="book-btn" onClick={onBookNewTrip}>
        Book New Trip
      </button>
    </div>
  )
}

export default Success

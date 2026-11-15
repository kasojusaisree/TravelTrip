import './index.css'

const Confirmation = ({
  userDetails,
  dates,
  guests,
  travelAssistance,
  setStep,
  setUserDetails,
  setDates,
  setGuests,
  setTravelAssistance,
}) => {
  const onCancel = () => {
    setUserDetails({name: '', startLocation: '', endLocation: ''})
    setDates({startDate: '', endDate: ''})
    setGuests({adults: 1, children: 0, infants: 0})
    setTravelAssistance({needed: false, assistanceType: ''})
    setStep(1)
  }

  const onConfirm = () => {
    setStep(6)
  }

  return (
    <form className="confirmation-container">
      <h1 className="form-heading">Confirmation</h1>
      <p>Confirm your details before proceeding</p>

      <div className="details-card">
        <h3>Personal Details</h3>
        <p>Name: {userDetails.name}</p>
        <p>Start Location: {userDetails.startLocation}</p>
        <p>End Location: {userDetails.endLocation}</p>
      </div>

      <div className="details-card">
        <h3>Selected Dates</h3>
        <p>Start Date: {dates.startDate}</p>
        <p>End Date: {dates.endDate}</p>
      </div>

      <div className="details-card">
        <h3>Guest Count</h3>
        <p className="total-guests">
          Guests: {guests.adults + guests.children + guests.infants}
        </p>
      </div>

      <div className="details-card">
        <h3>Assistance</h3>
        <p>Travel Assistance:</p>
        <p>
          {travelAssistance.needed
            ? travelAssistance.assistanceType
            : 'Not Required'}
        </p>
      </div>

      <div className="buttons-container">
        <button type="button" className="previous-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className="next-btn" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </form>
  )
}

export default Confirmation

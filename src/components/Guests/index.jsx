import './index.css'

const Guests = ({guests, setGuests, setStep}) => {
  const increaseCount = type => {
    setGuests({
      ...guests,
      [type]: guests[type] + 1,
    })
  }

  const decreaseCount = type => {
    if (type === 'adults' && guests.adults > 1) {
      setGuests({
        ...guests,
        adults: guests.adults - 1,
      })
    }

    if (type === 'children' && guests.children > 0) {
      setGuests({
        ...guests,
        children: guests.children - 1,
      })
    }

    if (type === 'infants' && guests.infants > 0) {
      setGuests({
        ...guests,
        infants: guests.infants - 1,
      })
    }
  }

  return (
    <form className="guests-container">
      <h1 className="form-heading">Guests</h1>
      <p>Select your guests</p>

      <div className="guest-card">
        <div>
          <p>Adults</p>
          <p>Age 13 or above</p>
        </div>

        <div className="counter">
          <button
            type="button"
            className="count-btn"
            onClick={() => decreaseCount('adults')}
          >
            -
          </button>

          <p className="count">{guests.adults}</p>

          <button
            type="button"
            className="count-btn"
            onClick={() => increaseCount('adults')}
          >
            +
          </button>
        </div>
      </div>

      <div className="guest-card">
        <div>
          <p>Children</p>
          <p>Age 2-12</p>
        </div>

        <div className="counter">
          <button
            type="button"
            className="count-btn"
            onClick={() => decreaseCount('children')}
          >
            -
          </button>

          <p className="count">{guests.children}</p>

          <button
            type="button"
            className="count-btn"
            onClick={() => increaseCount('children')}
          >
            +
          </button>
        </div>
      </div>

      <div className="guest-card">
        <div>
          <p>Infants</p>
          <p>under 2</p>
        </div>
        <div className="counter">
          <button
            type="button"
            className="count-btn"
            onClick={() => decreaseCount('infants')}
          >
            -
          </button>

          <p className="count">{guests.infants}</p>

          <button
            type="button"
            className="count-btn"
            onClick={() => increaseCount('infants')}
          >
            +
          </button>
        </div>
      </div>

      <div className="buttons-container">
        <button
          type="button"
          className="previous-btn"
          onClick={() => setStep(2)}
        >
          Previous
        </button>

        <button type="button" className="next-btn" onClick={() => setStep(4)}>
          Next
        </button>
      </div>
    </form>
  )
}

export default Guests

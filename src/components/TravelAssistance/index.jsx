import './index.css'

const travelAssistanceOptions = [
  {id: 1, displayText: 'Car'},
  {id: 2, displayText: 'Bus'},
  {id: 3, displayText: 'Flight'},
  {id: 4, displayText: 'Train'},
]

const TravelAssistance = ({travelAssistance, setTravelAssistance, setStep}) => {
  const onChangeCheckbox = event => {
    setTravelAssistance({
      ...travelAssistance,
      needed: event.target.checked,
    })
  }

  const onChangeOption = event => {
    setTravelAssistance({
      ...travelAssistance,
      assistanceType: event.target.value,
    })
  }

  return (
    <form className="travel-container">
      <h1 className="form-heading">Travel Assistance</h1>

      <p className="travel-description">Select your travel assistance</p>
      <div className="checkbox-container">
        <input
          id="travel"
          type="checkbox"
          checked={travelAssistance.needed}
          onChange={onChangeCheckbox}
        />

        <label htmlFor="travel" className="checkbox-label">
          Travel Assistance Needed
        </label>
      </div>

      {travelAssistance.needed && (
        <div className="select-container">
          <label htmlFor="assistance" className="label">
            Select Assistance
          </label>

          <select
            id="assistance"
            className="select"
            value={travelAssistance.assistanceType}
            onChange={onChangeOption}
          >
            {travelAssistanceOptions.map(eachOption => (
              <option key={eachOption.id} value={eachOption.displayText}>
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="buttons-container">
        <button
          type="button"
          className="previous-btn"
          onClick={() => setStep(3)}
        >
          Previous
        </button>

        <button type="button" className="next-btn" onClick={() => setStep(5)}>
          Next
        </button>
      </div>
    </form>
  )
}

export default TravelAssistance

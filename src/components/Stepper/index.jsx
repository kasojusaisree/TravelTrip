import './index.css'

const Stepper = ({stepsList, currentStep}) => (
  <ul className="steps-list">
    {stepsList.map(eachStep => {
      let status = ''

      if (eachStep.id < currentStep) {
        status = 'completed'
      } else if (eachStep.id === currentStep) {
        status = 'active'
      } else {
        status = 'upcoming'
      }

      return (
        <li key={eachStep.id} className="step-item">
          {status === 'completed' ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
              alt={eachStep.displayText}
              className="success-image"
            />
          ) : (
            <div className={`step-circle ${status}`}>{eachStep.id}</div>
          )}

          <p className={`step-name ${status}`}>{eachStep.displayText}</p>
        </li>
      )
    })}
  </ul>
)

export default Stepper

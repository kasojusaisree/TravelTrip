import {useState} from 'react'
import Stepper from '../Stepper'
import YourDetails from '../YourDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'
import Success from '../Success'
import './index.css'

const TravelTrip = () => {
  const [step, setStep] = useState(1)

  const [userDetails, setUserDetails] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
  })

  const [dates, setDates] = useState({
    startDate: '',
    endDate: '',
  })

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  })

  const [travelAssistance, setTravelAssistance] = useState({
    needed: false,
    assistanceType: '',
  })

  const stepsList = [
    {id: 1, displayText: 'Your Details'},
    {id: 2, displayText: 'Date Selection'},
    {id: 3, displayText: 'Guests'},
    {id: 4, displayText: 'Travel Assistance'},
    {id: 5, displayText: 'Confirmation'},
  ]

  return (
    <div className="container">
      <h1>Travel Trip</h1>

      <Stepper stepsList={stepsList} currentStep={step} />

      {step === 1 && (
        <YourDetails
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setStep={setStep}
        />
      )}

      {step === 2 && (
        <DateSelection dates={dates} setDates={setDates} setStep={setStep} />
      )}

      {step === 3 && (
        <Guests guests={guests} setGuests={setGuests} setStep={setStep} />
      )}

      {step === 4 && (
        <TravelAssistance
          travelAssistance={travelAssistance}
          setTravelAssistance={setTravelAssistance}
          setStep={setStep}
        />
      )}

      {step === 5 && (
        <Confirmation
          userDetails={userDetails}
          dates={dates}
          guests={guests}
          travelAssistance={travelAssistance}
          setStep={setStep}
          setUserDetails={setUserDetails}
          setDates={setDates}
          setGuests={setGuests}
          setTravelAssistance={setTravelAssistance}
        />
      )}

      {step === 6 && (
        <Success
          setStep={setStep}
          setUserDetails={setUserDetails}
          setDates={setDates}
          setGuests={setGuests}
          setTravelAssistance={setTravelAssistance}
        />
      )}
    </div>
  )
}

export default TravelTrip //  Write your code here

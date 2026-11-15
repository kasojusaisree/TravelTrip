### Project Description

In this project, you are going to build a **Travel Trip** Application.

### User stories

- When the page is opened, the user should be able to see a **Your Details** form with inputs **Name**, **Start Location**, **End Location** and **Next** button.
  - **Your Details** step should be displayed as an active step.
        
    ![https://res.cloudinary.com/do4qwwms8/image/upload/v1653301583/travel-trip-your-details-form_t3nxfb.png](https://res.cloudinary.com/do4qwwms8/image/upload/v1653301583/travel-trip-your-details-form_t3nxfb.png)
        
  - The user should be able to click the **Next** button. When clicked, the user should see
    - The error message `Enter your name`, if the **Name** input is empty.
    - The error message `Enter your start location`, if the **Start Location** input is empty.
    - The error message `Enter your end location`, if the **End Location** input is empty.
    - The **Date Selection** form, if the valid values are provided
- In the **Date Selection** form, the user should be able to see a form with inputs **Start Date** and **End Date**.
  - **Your Details** step should be displayed as a completed step and **Date Selection** should be displayed as an active step.
        
    ![https://res.cloudinary.com/do4qwwms8/image/upload/v1653387013/travel-trip-date-selection-form_e9em97.png](https://res.cloudinary.com/do4qwwms8/image/upload/v1653387013/travel-trip-date-selection-form_e9em97.png)
        
  - The user should be able to click the **Previous** button. When clicked, the user should see
    - The **[Your Details](https://res.cloudinary.com/do4qwwms8/image/upload/v1653387853/travel-trip-your-details-input-values_tdcmps.png)** form [](https://res.cloudinary.com/do4qwwms8/image/upload/v1653387853/travel-trip-your-details-input-values_tdcmps.png)and input values should be persisted and the user should be able to update the input values and submit them again.
  - The user should be able to click the **Next** button. When clicked, the user should see
    - The error message `Select start date`, if the **Start Date** input is empty.
    - The error message `Select end date`, if the **End Date** input is empty.
    - The error message `The end date cannot be less than the start date`, if the **End Date** input value is less than the **Start Date** input value.
    - The **Guests** section, if the valid values are provided.
- In the **Guests** section, the user should be able to see a section with **Adults**, **Children** and **Infants**.
  - **Your Details** and **Date Selection** steps should be displayed as completed steps.
  - **Guests** should be displayed as an active step.
        
    ![https://res.cloudinary.com/do4qwwms8/image/upload/v1653389151/travel-trip-guests-section_tkngtt.png](https://res.cloudinary.com/do4qwwms8/image/upload/v1653389151/travel-trip-guests-section_tkngtt.png)
        
  - The user should be able to see
    - By default, Adults are set to one (Considering the user) and can be increased, but cannot be decreased to a value less than one.
    - By default, Children are set to zero and can be increased, but cannot be decreased to a value less than zero.
    - By default, Infants are set to zero and can be increased, but cannot be decreased to a value less than zero.
  - The user should be able to click the **Previous** button. When clicked, the user should see
    - The [Date Selection](https://res.cloudinary.com/do4qwwms8/image/upload/v1653390150/travel-trip-date-selection-input-values_zoy2v6.png) form and input values should be persisted and the user should be able to update the input values and submit them again.
  - The user should be able to click the **Next** button. When clicked, the user should see
    - The **Travel Assistance** form.
- In the **Travel Assistance** form, the user should be able to see a form with Travel assistance needed input.
  - **Your Details, Date Selection** and **Guests** steps should be displayed as completed steps.
  - **Travel Assistance** should be displayed as an active step.
        
    ![https://res.cloudinary.com/do4qwwms8/image/upload/v1653391377/travel-trip-travel-assistance-form_kynpti.png](https://res.cloudinary.com/do4qwwms8/image/upload/v1653391377/travel-trip-travel-assistance-form_kynpti.png)
        
  - The user should be able to check the Travel Assistance Needed checkbox. When checked, the user should see,
    - [Travel Assistance](https://res.cloudinary.com/do4qwwms8/image/upload/v1653391577/travel-trip-travel-assistance-check-form_mbvcdn.png) should be displayed, and able to select an option.
  - The user should be able to click the **Previous** button. When clicked, the user should see
    - The [Guests](https://res.cloudinary.com/do4qwwms8/image/upload/v1653392335/travel-trip-guests-values_tpjt9h.png) section [](https://res.cloudinary.com/do4qwwms8/image/upload/v1653387853/travel-trip-your-details-input-values_tdcmps.png)and count should be persisted and the user should be able to update the counts.
  - The user should be able to click the **Next** button. When clicked, the user should see
    - The **Confirmation** form.
- In the **Confirmation** form, the user should be able to see all the steps details.
  - **Your Details, Date Selection, Guests** and **Travel Assistance** steps should be displayed as completed steps.
  - **Confirmation** should be displayed as an active step.
        
    ![https://res.cloudinary.com/do4qwwms8/image/upload/v1653393537/travel-trip-confirmation-form_rinxgy.png](https://res.cloudinary.com/do4qwwms8/image/upload/v1653393537/travel-trip-confirmation-form_rinxgy.png)
        
  - The user should be able to click the **Cancel** button. When clicked, the user should see
    - The **[Your Details](https://res.cloudinary.com/do4qwwms8/image/upload/v1653387853/travel-trip-your-details-input-values_tdcmps.png)** form with empty input values.
  - The user should be able to click the **Confirm** button. When clicked, the user should see
    - The Confirmed message and **Book New Trip** button to book a new trip. 

    ![https://res.cloudinary.com/do4qwwms8/image/upload/v1653452335/travel-trip-confirmed-message_gysiks.png](https://res.cloudinary.com/do4qwwms8/image/upload/v1653452335/travel-trip-confirmed-message_gysiks.png)


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Use **functional components** with **React hooks** (`useState`) for all components.
- Use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported. Test cases won't be passed if styled components are used.
- The successfully completed image which displayed before the step should have the alt as the value of the key `displayText` from the initial steps list provided.
- The successfully completed image which displayed in the confirmed message should have the alt as **success**.
- Responsiveness is not required.
- No need to use the Routes.

</details>

### Resources

<details>
<summary>Image URLs</summary>

[https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png](https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #304766; width: 150px; padding: 10px; color: white">Hex: #304766</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: white">Hex: #ffffff</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: white">Hex: #2563eb</div>
<div style="background-color: #dbeafe; width: 150px; padding: 10px; color: white">Hex: #dbeafe</div>

<br/>

**Text Colors**:

<div style="background-color: #334155; width: 150px; padding: 10px; color: black">Hex: #334155</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: black">Hex: #2563eb</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: black">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: white">Hex: #ffffff</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: white">Hex: #f1f5f9</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<br/>

**Border Colors**

<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #e2e8f0; width: 150px; padding: 10px; color: black">Hex: #e2e8f0</div>

</details>

<details>
<summary>Font-families</summary>

- Caveat
- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Use **functional components** with **React hooks** (`useState`) for all components.
> - **Do not remove the pre-filled code**

### Project submission instructions:

<details>
<summary>Project Submission should contain:</summary>

- GitHub repository link to your code.
- A video link. video should contain a code walkthrough and explain your application.
  - Make at least a 5-minute video explaining your code and the features that you have implemented.
  - Upload the recorded video to your YouTube account.
  - Refer to [**this**](https://www.youtube.com/watch?v=VtF2AgFSLAw) video to get a better understanding of uploading videos to your YouTube account.
- Follow the below points
  - Standard naming conventions
  - The code must be easily understandable
  - The code must be readable
</details>
import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log("daw");
    alert(JSON.stringify(reservation));
  }

  return (
    <div id="multipleFormDemo">
      <h1>Handling multiple inputs</h1>
      <form>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
          onChange={handleChange}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        /><br></br>
        <input
          name="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="Last name"
        />
        <br></br>
        <input
          name="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br></br>
        <input
          name="phone"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <br></br>
        <input
          name="street"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <br></br>
        <input
          name="city"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br></br>
        <input
          name="zip"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip"
        />
        <br></br>
        <input
          name="country"
          value={reservation.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <br></br>
        <input type="submit" onClick={handleSubmit} value="Submit" />
      </form>
      <p>{JSON.stringify(reservation)}</p>
      <br></br>
      <b>In a Controlled Component React state is made the "Single source of truth", so how:</b><br></br>
      <b>Do we ensure that input controls like text, textarea or select always presents the value found in the components state?</b>
      <p>By using state to control the value! We use REACT and controlled components to ensure that the inputs do not render data from the DOM but from state</p>
      <br></br>

      <b>Do we ensure that a controls state, always matches the value found in an input control?</b>
      <p>Yes</p>
      <br></br>

      <b>What is the purpose of doing event.preventDefault() in an event handler?</b>
      <p>For preventing the default behaviour of a submit button (Which is to reload the page upon submitting).</p>
      <br></br>

      <b>What would be the effect of NOT doing event.preventDefault in a submit handler</b>
      <p>The page would reload and the forms would be emptied</p>
      <br></br>

      <b>Why don't we want to submit the traditional way, in a single page application?</b>
      <p>The traditional way requires a page reload which would mess with navigation. If the user submits he/she will be returned to the frontpage</p>
      <br></br>

      <b>Explain in words what it takes to implement the "Controlled Component" pattern for a form</b>
      <p>You would need to "Grab" the <i>value</i> field of an input and assign it to state. Then we need to handle changes to the input so it's not static with an eventhandler like 'onChange'<br></br>
            It could look something like this (Can't escape curly braces): <br></br>  &lt;input value='this.state.name' onChange='e =&gt; this.setState( name: e.target.value )'  /&gt;</p>
      <br></br>

      <b>What is meant by the react term “Lifting State Up”? Where do you lift it up to?</b>
      <p>"Lifting state" enables components to "Share" or access the same source of truth. This can come in handy when trying to sync components</p>
      <br></br>

      <b>Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?</b>
      <p>Top to buttom / Parent to child. As data gets passed around the source wont change.</p>
      <br></br>

      <b>Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?</b>
      <p>Boilerplate is used everywhere and provides a fool proof, common ground for starting projects. Bootstrap code is a (Somewhat) risk-free way to save time and accomplish his/her goals</p>
      <br></br>
    </div>
  );
}
export default ReservationForm;
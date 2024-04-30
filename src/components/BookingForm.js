import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
  const myStyle = {
    display: "grid",
    maxWidth: "200px",
    gap: "20",
    margin: "4em auto",
  };
  const navigate = useNavigate();

  const timeOptions = props.availableTimes.map((item) => {
    return <option>{item}</option>;
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.updateTimes();
    navigate("/confirmed");
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={myStyle}>
        <label for="res-date">Date:</label>
        <input
          type="date"
          id="res-date"
          value={props.date}
          onChange={props.dateChange}
          required={true}
          aria-label="your reserve time"
        />
        <label htmlFor="res-time">Time:</label>
        <select
          id="res-time"
          value={props.time}
          onChange={props.timeChange}
          required={true}
          aria-label="your reserve time"
        >
          {timeOptions}
        </select>

        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={props.numberOfGuests}
          onChange={props.numberOfGuestsChange}
          required={true}
          aria-label="Number of guests"
        />
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          value={props.occasion}
          onChange={props.occasionChange}
          required={true}
          aria-label="Occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Wedding</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          disabled={
            props.time && props.numberOfGuests && props.occasion && props.date
              ? false
              : true
          }
          aria-label="On Click"

        />
      </form>
    </>
  );
}
export default BookingForm;

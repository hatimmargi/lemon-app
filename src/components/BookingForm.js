import { useState } from "react";
import { useNavigate } from 'react-router-dom';


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


  function handleSubmit (e) {

    e.preventDefault()
    props.updateTimes()
    navigate('/confirmed');

  }

  return (
    <>
      <form onSubmit={handleSubmit} style={myStyle}>
        <label for="res-date">Choose date</label>
        <input type="date" id="res-date" value={props.date} onChange={props.dateChange} />
        <h1>the date is {props.date}</h1>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={props.time} onChange={props.timeChange}>
          {timeOptions}
        </select>
        <h1>the time is {props.time}</h1>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={props.numberOfGuests}
          onChange={props.numberOfGuestsChange}
        />
        <h1>the time is {props.numberOfGuests}</h1>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={props.occasion} onChange={props.occasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Wedding</option>
        </select>
        <h1>the time is {props.occasion}</h1>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}
export default BookingForm;

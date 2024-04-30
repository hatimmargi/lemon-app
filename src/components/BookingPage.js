import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useState, useReducer, useEffect } from "react";




function BookingPage() {
  // const [availableTimes, setAvailableTimes] = useState([
  //     "17:00",
  //     "18:00",
  //     "19:00",
  // ])
  const [date, setDate] = useState("");

  const dateChange = (event) => {
    setDate(event.target.value);
  };
  const [time, setTime] = useState("");
  const timeChange = (event) => {
    setTime(event.target.value);
  };
  const [numberOfGuests, setNumberOfGuestsTime] = useState("");
  const numberOfGuestsChange = (event) => {
    setNumberOfGuestsTime(event.target.value);
  };

  const [occasion, setOccasion] = useState("");
  const occasionChange = (event) => {
    setOccasion(event.target.value);
  };

  function reducer(availableTimes, action) {
    return availableTimes.filter(function (item) {
      return item !== time;
    });
  }
  const [availableTimes, dispatch] = useReducer(reducer, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
    "01:00",
  ]);
  const availableSlots = availableTimes.map((item)=> {
    return <div>{item}</div>
  })
  function updateTimes() {
    dispatch()
  }




// module.exports = updateTimes


  return (
    <>
      <Header>
        <Nav />
      </Header>
      <BookingForm
        availableTimes={availableTimes}
        date={date}
        time={time}
        numberOfGuests={numberOfGuests}
        occasion={occasion}
        dateChange={dateChange}
        timeChange={timeChange}
        numberOfGuestsChange={numberOfGuestsChange}
        occasionChange={occasionChange}
        updateTimes={updateTimes}
      />
      <h1>{availableSlots}</h1>
      <Footer />
    </>
  );
}
export default BookingPage;

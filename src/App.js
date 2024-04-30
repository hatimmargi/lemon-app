import "./App.css";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmationBookingPage from "./pages/ConfirmationBookingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmationBookingPage />} />
      </Routes>
    </>
  );
}

export default App;

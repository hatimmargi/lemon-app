import { useNavigate } from "react-router-dom";

function ConfirmationBookingPage() {
  const navigate = useNavigate();

  return (
    <div className="confirmation">
      <h1
        style={{
          fontSize: "3em",
          margin: "auto",
          textAlign: "center",
        }}
      >
        Your Booking Confirmed
      </h1>
      <h1 style={{ fontSize: "1.5em", margin: "auto", textAlign: "center" }}>
        See You Soon
      </h1>
      <button
        style={{
          marginTop: "2em",
          border: "none",
          fontFamily: "inherit",
          backgroundColor: "black",
          borderRadius: ".3em",
          padding: "1em 2em",
          cursor: "pointer",
          color: "white",
          margin: "auto",
          textAlign: "center",
        }}
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}
export default ConfirmationBookingPage;

const updateTimes = require("./BookingPage");
const availableTimes = [
  "17:00",
  "18:00",
  "19:00",
]
// Unit Test

  test("updateTimes function to validate that it returns the same value", () => {
    expect(updateTimes).toBe(availableTimes);
  });
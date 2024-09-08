import React, { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                type="date"
                id="book-date"
                name="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                vlaue={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* Number of guests */}
            <div>
              <label htmlFor="guests">Number of Guests:</label>
              <input
                type="number"
                id="book-guest"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            {/* Occasion */}
            <div>
              <label htmlFor="occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
            </div>

            {/* Submit */}

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}

export default BookingForm;

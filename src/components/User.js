import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Fab } from "@material-ui/core";
import "./User.css";

function User() {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [availableSeats, setAvailableSeats] = useState([]);

  const handleFloorChange = (event) => {
    setSelectedFloor(parseInt(event.target.value));
  };

  const handleAvailableSeatsClick = () => {
    const seatsByFloor = {
      1: ["1.001", "1.002", "1.003", "1.004", "1.005", "1.006", "1.007"],
      2: [
        "2.001",
        "2.002",
        "2.003",
        "2.004",
        "2.005",
        "2.006",
        "2.007",
        "2.008",
      ],
      3: [],
      4: ["4.001", "4.002", "4.003", "4.004", "4.005", "4.006", "4.007"],
      5: ["5.001", "5.002", "5.003", "5.004", "5.005", "5.006", "5.007"],
      6: ["6.001", "6.002", "6.003", "6.004", "6.005", "6.006", "6.007"],
      7: ["7.001", "7.002", "7.003", "7.004", "7.005", "7.006", "7.007"],
      8: ["8.001", "8.002", "8.003", "8.004", "8.005", "8.006", "8.007"],
      9: ["9.001", "9.002", "9.003", "9.004", "9.005", "9.006", "9.007"],
      10: [
        "10.001",
        "10.002",
        "10.003",
        "10.004",
        "10.005",
        "10.006",
        "10.007",
      ],
      11: [
        "11.001",
        "11.002",
        "11.003",
        "11.004",
        "11.005",
        "11.006",
        "11.007",
      ],
      12: [
        "12.001",
        "12.002",
        "12.003",
        "12.004",
        "12.005",
        "12.006",
        "12.007",
      ],
      13: [
        "13.001",
        "13.002",
        "13.003",
        "13.004",
        "13.005",
        "13.006",
        "13.007",
      ],
      14: [
        "14.001",
        "14.002",
        "14.003",
        "14.004",
        "14.005",
        "14.006",
        "14.007",
      ],
      15: [
        "15.001",
        "15.002",
        "15.003",
        "15.004",
        "15.005",
        "15.006",
        "15.007",
      ],
    };

    const seats = seatsByFloor[selectedFloor] || [];
    setAvailableSeats(seats);
  };

  const floorOptions = Array.from({ length: 15 }, (_, index) => index + 1);

  const renderFloorSeats = () => {
    return (
      <div>
        {availableSeats.length > 0 ? (
          <div>
            <p>
              Floor {selectedFloor}: Total of {availableSeats.length} seats are
              available
            </p>
            <div className="seat-grid">
              {availableSeats.map((seat) => (
                <div className="seat-card" key={seat}>
                  <div className="seat-number">{seat}</div>
                  <img
                    className="seat-image"
                    src="https://previews.123rf.com/images/ruslanraqimov/ruslanraqimov2001/ruslanraqimov200100027/136976529-isolated-sport-car-seat-vector-10-eps.jpg"
                    alt={`Seat ${seat}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No available seats</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand style={{ justifyContent: "center" }}>
              Find It
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Jagan</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="\" style={{ marginTop: "20px" }}>
        <div className="container ">
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            Extended
          </Fab>
        </div>
        <div className="container">
          <h5>Select a floor:</h5>

          <select
            id="floor-select"
            value={selectedFloor}
            onChange={handleFloorChange}
          >
            {floorOptions.map((floor) => (
              <option key={floor} value={floor}>
                Floor {floor}
              </option>
            ))}
          </select>
        </div>
        <div className="availableseatsbutton">
          <button onClick={handleAvailableSeatsClick}>Available Seats</button>
        </div>

        {renderFloorSeats()}
      </div>
    </div>
  );
}

export default User;

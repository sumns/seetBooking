import React, { useState } from 'react';
import './App.css';
import SeatRow from './SeatRow';

const App = () => {
  const [seatData, setSeatData] = useState({
    A: [
      { id: 1, isBooked: true },
      { id: 2, isBooked: true },
      { id: 3, isBooked: false },
      { id: 4, isBooked: false },
      { id: 5, isBooked: false },
    ],
    B: [
      { id: 1, isBooked: false },
      { id: 2, isBooked: false },
      { id: 3, isBooked: false },
    ],
    C: [
      { id: 1, isBooked: false },
      { id: 2, isBooked: false },
      { id: 3, isBooked: false },
      { id: 4, isBooked: false },
      { id: 5, isBooked: false },
    ],
  });

  const handleSeatClick = (row, seatId) => {
    const updatedSeatData = { ...seatData };
    updatedSeatData[row] = updatedSeatData[row].map(seat =>
      seat.id === seatId ? { ...seat, isBooked: !seat.isBooked } : seat
    );
    setSeatData(updatedSeatData);
  };

  return (
    <div className="app">
      <h1>Booking Ticket</h1>
      <hr />
      {Object.keys(seatData).map(rowName => (
        <SeatRow
          key={rowName}
          rowName={rowName}
          seats={seatData[rowName]}
          onSeatClick={seatId => handleSeatClick(rowName, seatId)}
        />
      ))}
    </div>
  );
};

export default App;

import React from 'react';
import Seat from './Seat';

const SeatRow = ({ rowName, seats, onSeatClick }) => {
  return (
    <div className="seat-row">
      <h2>Row {rowName}</h2>
      <div className="seat-container">
        {seats.map(seat => (
          <Seat
            key={seat.id}
            id={seat.id}
            isBooked={seat.isBooked}
            onClick={onSeatClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SeatRow;

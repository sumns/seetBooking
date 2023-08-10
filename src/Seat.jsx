import React, { useState } from 'react';

const Seat = ({ id, isBooked, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`seat ${isBooked ? 'booked' : (isHovered ? 'hovered' : 'available')}`}
      onClick={() => onClick(id)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {id}
    </div>
  );
};

export default Seat;

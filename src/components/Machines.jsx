import React from 'react';
import machinesImage from "../asserts/machines.png";
import '../styles/Machines.css'; // Import the CSS file

const Machines = () => {
  return (
    <div className="machines-container">
      <span className="description">
        INSTALLED OVER 10 LARUS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 4,000 MILLION UNITS OF POWER FOR THE NATION.
      </span>
      <img className="machines-image" src={machinesImage} alt="" />
      <span className="description">
        Values - pumps - pipes - IoT device controller - wires and cables - solar systems and motors
      </span>
    </div>
  );
};

export default Machines;

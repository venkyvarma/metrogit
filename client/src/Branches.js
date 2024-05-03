
import React from 'react';
import './branches.css';

const Branches = () => {
  return (
    <div id="branches" className="branches-container">
      <h2>Our Branches</h2>
      <div className="branch-list">
        <div className="branch">
          <h3>Branch 1</h3>
          <p>Location: XYZ Street, ABC City</p>
          <p>Timings: 9:00 AM - 5:00 PM</p>
          <p>Contact: 123-456-7890</p>
        </div>
        <div className="branch">
          <h3>Branch 2</h3>
          <p>Location: PQR Street, DEF City</p>
          <p>Timings: 9:00 AM - 6:00 PM</p>
          <p>Contact: 987-654-3210</p>
        </div>
        {/* Add more branches here if needed */}
      </div>
    </div>
  );
};

export default Branches;

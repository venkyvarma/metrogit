import React from 'react';
import { Link } from 'react-router-dom';
import './booking.css';
import axios from 'axios';

const Booking = () => {
  return (
    <div id="booking" className="booking-container">
      <h2>Book an Appointment</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required />
        
        <label htmlFor="gender">Gender:</label>
        <div className="gender-options">
          <label htmlFor="male"><input type="radio" id="male" name="gender" value="male" /> Male</label>
          <label htmlFor="female"><input type="radio" id="female" name="gender" value="female" /> Female</label>
        </div>
        
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="location">Location:</label>
        <select id="location" name="location" required>
          <option value="">Select Location</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select>
        
        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" name="doctor" required>
          <option value="">Select Doctor</option>
          <option value="doctor1">Doctor 1</option>
          <option value="doctor2">Doctor 2</option>
        </select>
        
        <label htmlFor="details">Details:</label>
        <textarea id="details" name="details"></textarea>
        
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />
        
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;

import React, { useState } from 'react';
import './home.css'; // Import your CSS file for styling the slider
  // import pic1 from './images/pic1.jpg';


const images = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg'
  // Add more image paths as needed
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1>Hello Doctors!</h1>
      </div>
      <h2>Welcome to Our Medical Clinic</h2>
      <div className="slider">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
       
          <img src={require(`./files/${images[currentImageIndex]}`).default} alt={`Image ${currentImageIndex + 1}`} />
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Branches from './Branches';
import Booking from './Booking';
import PhoneEmailLogin from 'phone-email-auth';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/branches" component={Branches} />
          <Route path="/booking" component={Booking} />
        </Routes>
        <PhoneEmailLogin clientId = "12558854165779098259" position="left" buttonText="Sign in" redirectUrl="" />
        <Home />
        <AboutUs />
        <Branches />
        <Booking />
      </div>
    </Router>

   
  );
}

export default App;

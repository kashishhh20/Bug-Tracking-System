import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Register from './Register';
import LoginPage from './LoginPage';
import ContactUs from './ContactUs';
import Debugger from './Debugger';
import Reporter from './Reporter';
// import Header from './Header';
import Footer from './Footer';
import OpenBugs from './OpenBugs';
import ResolvedBugs from './ResolvedBugs';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/debugger" element={<Debugger />} />
            <Route path="/reporter" element={<Reporter />} />

            <Route path="/openbugs" element={<OpenBugs />} />
            <Route path="/resolvedbugs" element={<ResolvedBugs />} />

          </Routes>
        </div>
        <Footer />

      </div>



    </Router>

  );
};

export default App;


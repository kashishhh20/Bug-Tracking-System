import React from 'react';
import './App.css';
import './AboutUs.css';
import Navbar from './Navbar';

const AboutUs = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className="container">
                {/* Main content */}

                <h1 className="about-title">ABOUT BUG TRACKING SYSTEM</h1>

                <div className="about-content">
                    <img src="https://tse3.mm.bing.net/th/id/OIP.W4ToPFkWW590gHWdijagAgHaE3?rs=1&pid=ImgDetMain" alt="About Us" className="about-image" />
                    <div className="about-textbox">
                        <p className="about-text">
                            Welcome to our Bug Tracking System! Our mission is to simplify bug tracking, making it easy for developers and testers
                            to collaborate, identify issues, and resolve them efficiently. Built with the latest technologies, our platform ensures
                            seamless project management and clear communication. We strive to create a user-friendly experience for managing software
                            bugs, streamlining workflows, and boosting productivity. Join us in our journey to deliver high-quality software with minimal bugs!
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AboutUs;

import React from 'react';
import './ContactUs.css';
import Navbar from './Navbar';

const ContactUs = () => {
    return (
        <div className='main'>
             <Navbar />
            <div className="welcome-containerr">
                <h1>CONTACT US</h1>
            </div>

            <div className="card-containerrr">

                <div className="cardd">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.Sj4bhkhC37E8vMkPkWVEQgHaEP?w=304&h=180&c=7&r=0&o=5&pid=1.7" alt="Bug Report" className="card-image" />
                    <div className="card-contentt">
                        <h3>Address</h3>
                        <p>123 Bug Tracker Lane, Tech City, IN 400001</p>
                    </div>
                </div>

                <div className="cardd">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.vXf1L8RLvF9ZA4sLJIVoaQHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7" alt="Progress Tracking" className="card-image" />
                    <div className="card-contentt">
                        <h3>Business Hours</h3>
                        <p>Monday-Friday: 9:00 AM-6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>

                <div className="cardd">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.a07EpNrH9aUDwCrgVcpxXwHaHa?w=167&h=196&c=7&r=0&o=5&pid=1.7" alt="Team Collaboration" className="card-image" />
                    <div className="card-contentt">
                        <h3>Telephone</h3>
                        <p>+(144) 98765 434510</p>
                        <p>support@bugtracker.com</p>
                    </div>
                </div>

                <div className="cardd">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.UvnjT8cXpVlZgu6-9dbd6gHaF7?w=225&h=182&c=7&r=0&o=5&pid=1.7" alt="Team Collaboration" className="card-image" />
                    <div className="card-contenttmap">
                        <h3>Find Us</h3>
                        {/* <a href="https://maps.app.goo.gl/uzQFSmJMizuGHMxr6" target="_blank" rel="noopener noreferrer"> Visit Google</a> */}

                        <button onclick="window.open('https://maps.app.goo.gl/uzQFSmJMizuGHMxr6', '_blank', 'noopener noreferrer')">Visit Google Maps</button>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

import React from 'react';
import Navbar from './Navbar';
import './HomePage.css'; // Make sure to import your CSS

const HomePage = () => {
    return (
        <div className="main">
            <Navbar />

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h2 className="hero-title">Issue Tracker</h2>
                </div>
                <div className="hero-image">
                    <img
                        src="https://cdn.thenewstack.io/media/2023/05/f86616f5-shutterstock_1147590977-1024x511.jpg"
                        alt="Issue Tracker"
                    />
                </div>
            </div>

            {/* Welcome Message */}
            <div className="welcome-section">
                <h1 className="welcome-title">
                    WELCOME TO BUG TRACKING SYSTEM!!!
                </h1>
            </div>

            {/* Feature Cards */}
            <div className="features-section">
                <div className="feature-card">
                    <img
                        src="https://www.bing.com/th?id=OIP.gY_R8PFmfANyZtgagB6ecwHaFG&w=301&h=207&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                        alt="Bug Report"
                    />
                    <div className="card-content">
                        <h3>Bug Reporting</h3>
                        <p>Track and manage bugs efficiently with our powerful reporting system.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <img
                        src="https://th.bing.com/th?id=OIP.8Crh-vyJPWYQsbH03MysOQHaGH&w=275&h=227&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                        alt="Progress Tracking"
                    />
                    <div className="card-content">
                        <h3>Progress Tracking</h3>
                        <p>Monitor the status of bug fixes in real-time with interactive dashboards.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <img
                        src="https://th.bing.com/th?id=OIP.M5ylqN5dcsUCHlaRAFwqhgHaGa&w=268&h=232&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                        alt="Team Collaboration"
                    />
                    <div className="card-content">
                        <h3>Team Collaboration</h3>
                        <p>Enhance team coordination and communication for faster bug resolution.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

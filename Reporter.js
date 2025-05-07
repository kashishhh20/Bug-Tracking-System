import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reporter.css';
import AddBugModal from './AddBugModal';

function Reporter() {
    const [bugs, setBugs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchBugs();
    }, []);

    const fetchBugs = async () => {
        try {
            const response = await axios.get("http://localhost:8984/api/bugs");
            setBugs(response.data);
        } catch (err) {
            console.error("Failed to fetch bugs:", err);
        }
    };

    const handleLogout = () => {
        window.location.href = '/';
    };

    const handleAddBug = async (newBug) => {
        try {
            // 1. Add new bug
            const res = await axios.post("http://localhost:8984/api/bugs", newBug);
            const savedBug = res.data;

            // 2. Assign bug using returned bugId
            await axios.post(`http://localhost:8984/api/bugs/${savedBug.bugId}/assign`);

            // 3. Create a full bug object to display (use known values + some default fallbacks)
            const addedBug = {
                ...savedBug,
                empName: newBug.empName,
                title: newBug.title,
                bugStatus: "open",
                issueDate: newBug.issueDate,
                priority: newBug.priority,
                assigneeName: "Pending", // or fetch again if needed
                role: "Developer",       // you can update this if it's dynamic
            };

            // 4. Optimistically update UI
            setBugs(prevBugs => [...prevBugs, addedBug]);

            // 5. Close modal
            setShowModal(false);
        } catch (err) {
            console.error("Error adding bug:", err);
        }
    };

    return (

        <div className="reporter-page">

            <header className="header-new">
                <div className="logo-2i">|𓆣| Bug Tracking System</div>
                <button className="logout-btn-new" onClick={handleLogout}>

                    Logout

                </button>
            </header>
            <h2>Reporter Dashboard</h2>

            <div className="add-button-container">
                {/* <button className="add-btn" onClick={() => setShowModal(true)}>Add Bug</button> */}
                <button class="fancy-button" onClick={() => setShowModal(true)}>

                    <span class="btn-text">Add Bug</span>
                    <span class="btn-icon">»»</span>
                </button>

            </div>

            <div className="cards-container">
                {bugs.map((bug) => (
                    <div className="bug-card" key={bug.bugId}>
                        <h3>{bug.title}</h3>
                        <p><strong>Emp Name:</strong> {bug.empName}</p>
                        <p><strong>Issue Date:</strong> {bug.issueDate || 'N/A'}</p>
                        <p><strong>Assignee:</strong> {bug.assigneeName}</p>
                        <p><strong>Role:</strong> {bug.role}</p>
                        <p><strong>Priority:</strong> {bug.priority}</p>
                        <p><strong>Status:</strong> {bug.bugStatus}</p>
                    </div>
                ))}
            </div>



            {showModal && (
                <AddBugModal
                    onClose={() => setShowModal(false)}
                    onSubmit={handleAddBug}
                />
            )}
        </div>
    );
}

export default Reporter;

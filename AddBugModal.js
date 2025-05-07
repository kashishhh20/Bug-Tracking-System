// AddBugModal.jsx
import React, { useState } from 'react';
import './AddBugModal.css';

function AddBugModal({ onClose, onSubmit }) {
    const [newBug, setNewBug] = useState({
        title: '',
        empName: '',
        bugStatus: 'open',
        issueDate: new Date().toISOString().split('T')[0],
        priority: '',
    });

    const handleChange = (e) => {
        setNewBug({ ...newBug, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newBug);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Add New Bug</h3>
                <form onSubmit={handleSubmit} className="modal-form">
                    <select name="title"  value={newBug.title} onChange={handleChange} required >
                    <option value="">Select Title</option>
                        <option value="Ui/Ux">Ui/Ux</option>
                        <option value="Compatibility">Compatibility</option>
                        <option value="Database">Database</option>
                        <option value="Logical">Logical</option>
                        <option value="Security">Security</option>
                        <option value="Performance">Performance</option>
                    </select>
                    <input type="text" name="empName" placeholder="Employee Name" value={newBug.empName} onChange={handleChange} required />
                    <select name="priority" value={newBug.priority} onChange={handleChange} required>
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input type="text" name="bugStatus" value="open" readOnly />
                    <input type="date" name="issueDate" value={newBug.issueDate} readOnly />
                    <div className="modal-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBugModal;
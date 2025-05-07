import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Debugger.css';
import EditFormBundle from './EditFormBundle';

const Debugger = () => {
    const [bugs, setBugs] = useState([]);
    const [editingBug, setEditingBug] = useState(null);
    const [filterType, setFilterType] = useState('all');
    const [searchId, setSearchId] = useState('');
    const [searchError, setSearchError] = useState('')
    const navigate = useNavigate();

    const fetchAllBugs = () => {
        fetch('http://localhost:8984/api/bugs')
            .then(response => response.json())
            .then(data => {
                setBugs(data);
                setFilterType('all');
                setEditingBug(null);
            })
            .catch(error => console.error("Error fetching bugs:", error));
    };

    const fetchOpenBugs = () => {
        fetch('http://localhost:8984/api/openbugs')
            .then(res => res.json())
            .then(data => {
                setBugs(data);
                setFilterType('open');
                setEditingBug(null);
            })
            .catch(err => console.error('Error fetching open bugs:', err));
    };

    const fetchResolvedBugs = () => {
        fetch('http://localhost:8984/api/resolvedbugs')
            .then(res => res.json())
            .then(data => {
                setBugs(data);
                setFilterType('resolved');
                setEditingBug(null);
            })
            .catch(err => console.error('Error fetching resolved bugs:', err));
    };

    useEffect(() => {
        if (filterType === 'open') fetchOpenBugs();
        else if (filterType === 'resolved') fetchResolvedBugs();
        else fetchAllBugs();
    }, [filterType]);


    const handleDelete = (bug) => {
        if (bug.bugStatus.toLowerCase() === 'open') {
            alert("This bug is not resolved yet. You cannot delete it.");
            return;
        }

        if (!window.confirm(`Are you sure you want to delete Bug ID ${bug.bugId}?`)) return;

        fetch(`http://localhost:8984/api/bugs/${bug.bugId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setBugs(prev => prev.filter(b => b.bugId !== bug.bugId));
                    alert("Bug deleted successfully.");
                } else {
                    alert("Failed to delete the bug.");
                }
            })
            .catch(error => console.error("Error deleting bug:", error));
    };

    const handleEdit = (bug) => {
        setEditingBug({ ...bug });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingBug(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch('http://localhost:8984/api/bugs', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingBug),
            });

            const updatedBug = await response.json();

            if (editingBug.bugStatus.toLowerCase() === 'closed') {
                await fetch(`http://localhost:8984/api/updatestatus/${editingBug.bugId}/closed`, {
                    method: 'PUT',
                });

                setBugs(prev => prev.filter(bug => bug.bugId !== editingBug.bugId));
                alert("Bug marked as resolved and moved successfully.");
            } else {
                setBugs(prev => prev.map(bug => bug.bugId === updatedBug.bugId ? updatedBug : bug));
                alert("Bug updated successfully.");
            }

            setEditingBug(null);
        } catch (error) {
            console.error("Error updating bug:", error);
            alert("Failed to update bug.");
        }
    };

    const handleSearch = async () => {
        if (!searchId.trim()) {
            setSearchError('Please enter a Bug ID');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8984/api/bugs/${searchId}`);
            if (!response.ok) {
                throw new Error('Bug not found');
            }
            const bug = await response.json();
            setBugs([bug]);
            setSearchError('');
        } catch (error) {
            setSearchError(error.message);
            setBugs([]);
        }
    };

    // Reset search and show all bugs
    const handleResetSearch = () => {
        setSearchId('');
        setSearchError('');
        fetchAllBugs();
    };

    return (

        <div className="debugger-wrapper">
            <div className="sidebar">
                <div className='side-bar-button'>
                    <button onClick={() => navigate('/openbugs')}>
                        <span className="button-icon">🕷</span>
                        <span className="button-text">Open Bugs</span>
                    </button>
                    <button onClick={() => navigate('/resolvedbugs')}>
                        <span className="button-icon">✔</span>
                        <span className="button-text">Resolved Bugs</span>
                    </button>
                </div>

            </div>

            <div className="debugger-page">
                <header className="header-new-x">
                    <div className="logo-2-x">|𓆣|   Bug Tracking System</div>
                    <button className='logoutb' onClick={() => navigate('/')}>Logout</button>
                </header>




                <h1 style={{ textAlign: 'center' }}>
                    {filterType === 'all' && "Viewing All Bugs"}
                    {filterType === 'open' && "Viewing Open Bugs"}
                    {filterType === 'resolved' && "Viewing Resolved Bugs"}
                </h1>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter Bug ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                    <button onClick={handleResetSearch}>Reset</button>
                    {searchError && <p className="search-error">{searchError}</p>}
                </div>

                <div className="bug-card-container">
                    {bugs.map(bug => (
                        <div className="bug-card" key={bug.bugId}>
                            <h3>{bug.title}</h3>
                            <p><strong>ID:</strong> {bug.bugId}</p>
                            <p><strong>Employee:</strong> {bug.empName}</p>
                            <p><strong>Issue Date:</strong> {bug.issueDate}</p>
                            <p><strong>Assigned To:</strong> {bug.assigneeName}</p>
                            <p><strong>Role:</strong> {bug.role}</p>
                            <p><strong>Vacancy:</strong> {bug.vacancyStatus}</p>
                            <p><strong>Priority:</strong> {bug.priority}</p>
                            <p><strong>Status:</strong> {bug.bugStatus}</p>
                            <p><strong>Resolved:</strong> {bug.resolvedDate || "Pending"}</p>
                            <div className="button-group">
                                <button className="update-icon" onClick={() => handleEdit(bug)}>✎</button>
                                <button className="delete-icon" onClick={() => handleDelete(bug)}>🗑</button>
                            </div>
                        </div>
                    ))}
                </div>

                {editingBug && (
                    <EditFormBundle
                        bug={editingBug}
                        onChange={handleInputChange}
                        onSave={handleUpdate}
                        onCancel={() => setEditingBug(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default Debugger;

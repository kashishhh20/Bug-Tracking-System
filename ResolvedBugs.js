import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Debugger.css';
import './ResolvedBugs.css';

const ResolvedBugs = () => {
    const [resolvedBugs, setResolvedBugs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8984/api/resolvedbugs')
            .then(res => res.json())
            .then(data => setResolvedBugs(data))
            .catch(err => console.error("Error fetching resolved bugs:", err));
    }, []);

    return (
        <div className="debugger-wrapper-2">
            {/* Header with Back Button */}
            <header className="header-new">
                <button className="back-button" onClick={() => navigate('/debugger')}>
                ↩
                </button>
                <div className="logo-23">|𓆣| Bug Tracking System</div>
            </header>

            <div className="resolvedbugs-page">
                <div className='heading-row-y'>
                    <h2>Resolved Bugs</h2>
                </div>
                <div className="bug-card-container">
                    {resolvedBugs.map(bug => (
                        <div className="bug-card" key={bug.bugId}>
                            <h3>{bug.title}</h3>
                            <p><strong>ID:</strong> {bug.bugId}</p>
                            <p><strong>Issue Date:</strong> {bug.issueDate}</p>
                            <p><strong>Resolved Date:</strong> {bug.resolvedDate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResolvedBugs;
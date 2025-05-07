import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Debugger.css';
import './OpenBugs.css';

const OpenBugs = () => {
    const [openBugs, setOpenBugs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8984/api/openbugs')
            .then(res => res.json())
            .then(data => setOpenBugs(data))
            .catch(err => console.error("Error fetching open bugs:", err));
    }, []);

    return (
        <div className="debugger-wrapper-2">
        {/* New Header with Back Button */}
        <header className="header-new">
            <button className="back-button" onClick={() => navigate('/debugger')}>
            ↩
            </button>
            <div className="logo-2">|𓆣| Bug Tracking System</div>
        </header>

        <div className="openbugs-page">
            <div className='heading-row'>
                <h2>Open Bugs</h2>
            </div>
            <div className="bug-card-container">
                {openBugs.map(bug => (
                    <div className="bug-card" key={bug.bugId}>
                        <h3>{bug.title}</h3>
                        <p><strong>ID:</strong> {bug.bugId}</p>
                        <p><strong>Issue Date:</strong> {bug.issueDate}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default OpenBugs;

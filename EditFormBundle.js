import React from 'react';
import './EditFormBundle.css';

const EditFormBundle = ({ bug, onChange, onSave, onCancel }) => {
    return (
        <div className="edit-form-overlay">
            <div className="edit-form">
                <h2>Edit Bug</h2>

                <div className="readonly-fields">
                    <label>
                        BugId:
                        <input type="text" name="bugId" value={bug.bugId} readOnly />
                    </label>
                    <label>
                        Title:
                        <input type="text" name="Title" value={bug.title} readOnly />
                    </label>
                    <label>
                        Employee Name:
                        <input type="text" name="Employee Name" value={bug.empName} readOnly />
                    </label>
                    <label>
                        Issue Date:
                        <input type="text" name="Issue Date" value={bug.issueDate} readOnly />
                    </label>
                    <label>
                        Assignee:
                        <input type="text" name="Assignee" value={bug.assigneeName} readOnly />
                    </label>
                    <label>
                        Role:
                        <input type="text" name="Role" value={bug.role} readOnly />
                    </label>
                    <label>
                        VacancyStatus:
                        <input type="text" name="VacancyStatus" value={bug.vacancyStatus} readOnly />
                    </label>
                    <label>
                        Priority:
                        <input type="text" name="Priority" value={bug.priority} readOnly />
                    </label>
                </div>

                <div className="editable-fields">
                    <div className="form-row">
                        <label>Bug Status:</label>
                        <select name="bugStatus" value={bug.bugStatus} onChange={onChange}>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <label>Resolved Date:</label>
                        <input
                            type="date"
                            name="resolvedDate"
                            value={bug.resolvedDate || ''}
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="edit-buttons">
                    <button className="save-btn" onClick={onSave}>💾 Save</button>
                    <button className="cancel-btn" onClick={onCancel}>❌ Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditFormBundle;

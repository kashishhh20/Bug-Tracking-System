import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Navbar from './Navbar';

const Register = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        role: 'Debugger',
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8984/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registered successfully!');
                setFormData({
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    role: 'Debugger',
                });
                navigate('/login'); // redirect to login after success
            } else {
                alert('Registration failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error occurred during registration.');
        }
    };

    return (
        <div className='main'>
                <Navbar />

        <div className="register-container">


            <img
                src="https://cdn-icons-png.flaticon.com/512/4202/4202849.png"
                alt="Registration"
                className="register-image"
            />
            <div className="register-box">
                <div className='signup'>
                    <h2>Sign Up</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div className="form-group password-group">
                        <label>Password</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {passwordVisible ? '👁️' : '👁️‍🗨️'}
                        </span>
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select name="role" value={formData.role} onChange={handleChange} required>
                            <option value="Debugger">Debugger</option>
                            <option value="Reporter">Reporter</option>
                        </select>
                    </div>
                    <button type="submit" className="signup-btn">Register</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Register;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from './Navbar';


const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Debugger");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch all registered users from the backend
        fetch("http://localhost:8984/api/all")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Check credentials from fetched users
        const matchedUser = users.find(
            (user) =>
                user.username === username &&
                user.password === password &&
                user.role === role
        );

        if (matchedUser) {
            alert("Login successful!");
            if (role === "Debugger") {
                navigate("/debugger");
            } else if (role === "Reporter") {
                navigate("/reporter");
            }
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <Navbar />

            <div className="login-container">
                <div className="login-box">
                    <div className='signin'>
                        <h2 className="login-title">Sign In</h2>
                    </div>

                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <div className="password-container">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>

                        <select value={role} onChange={(e) => setRole(e.target.value)} required>
                            <option value="Debugger">Debugger</option>
                            <option value="Reporter">Reporter</option>
                        </select>

                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

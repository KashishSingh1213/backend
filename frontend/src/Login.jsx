import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to your backend
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="login-container">
            {/* Background Shapes */}
            <div className="background-shape shape-1" />
            <div className="background-shape shape-2" />

            <div className="login-header">
                <h2>Welcome Back</h2>
                <p>Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <div className="forgot-password">
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" className="login-btn">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;

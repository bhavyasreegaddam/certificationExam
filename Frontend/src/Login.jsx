import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from './services/api';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/', formData);
            alert(`Welcome, ${response.data.user.username}`);
            navigate('/home'); 
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /> <br /> <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /> <br /> <br />
                <button type="submit">Login</button>
            </form>
            <p className='p-1'>
                Don't have an account? <Link to="/signup">Create Account</Link>
            </p>
        </div>
    );
}

export default Login;

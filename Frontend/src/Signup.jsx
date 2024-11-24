import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from './services/api';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and container
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function Signup() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/signup', formData);
            toast.success('Signup successful! Redirecting to login...');
            setTimeout(() => navigate('/'), 3000); // Redirect after 3 seconds
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Something went wrong.';
            setError(errorMsg);
            toast.error(errorMsg);
        }
    };

    return (
        <div className="form-container">
            <ToastContainer /> 
            <h2>Signup</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /> <br /> <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /> <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br /> <br />
                <button type="submit">Signup</button>
            </form>
            <p className='p'>
                Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
    );
}

export default Signup;

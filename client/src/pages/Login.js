import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import API_URL from '../config'; // Import the config

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Using API_URL for dynamic connection
            const res = await axios.post(`${API_URL}/auth/login`, formData);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('nutrismart_user', JSON.stringify(res.data.user));

            navigate('/app');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Welcome Back</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                        className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                    <input
                        className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})}
                        required
                    />
                </div>

                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
                    Log In
                </button>
                <p className="mt-4 text-center text-slate-500">
                    No account? <Link to="/register" className="text-emerald-600 font-bold hover:underline">Sign up</Link>
                </p>
            </form>
        </div>
    );
}

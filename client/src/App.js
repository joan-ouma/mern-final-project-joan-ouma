import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/app/*" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
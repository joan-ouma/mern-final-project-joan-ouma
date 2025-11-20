const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

const API_URL = isLocal
    ? "http://localhost:5000/api" // Local Backend (Development)
    : "[https://nutrismart-2qpk.onrender.com]"; // Live Backend (Production)

export default API_URL;
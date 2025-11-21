// client/src/api.js
import axios from "axios";

const DEFAULT_LOCAL_URL = "http://localhost:5000/api";
const DEFAULT_PROD_URL = "https://nutrismart-2qpk.onrender.com/api";

const getIsLocalHost = () => {
    if (typeof window === "undefined" || !window.location?.hostname) {
        return false;
    }
    const hostname = window.location.hostname.toLowerCase();
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
};

export const API_URL =
    process.env.REACT_APP_API_URL ||
    (getIsLocalHost() ? DEFAULT_LOCAL_URL : DEFAULT_PROD_URL);

export const fetchTrendingRecipes = async () => {
    try {
        const res = await axios.get(`${API_URL}/recipes/trending`);
        return res.data;
    } catch (error) {
        console.error("Error fetching trending recipes:", error);
        throw error;
    }
};

export const updateUserProfile = async (updatedData) => {
    try {
        const res = await axios.post(`${API_URL}/user/profile`, updatedData);
        return res.data;
    } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }
};

export const getRecommendations = async (pantryInput, user) => {
    try {
        const res = await axios.post(`${API_URL}/recommend`, {
            pantry: pantryInput,
            userGoal: user.goals || "balanced",
            budget: user.budgetLevel || "medium",
        });
        return res.data;
    } catch (error) {
        console.error("Error getting recommendations:", error);
        throw error;
    }
};
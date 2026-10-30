// Central API configuration
// In development: uses localhost:8000
// In production: uses the VITE_API_URL environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default API_BASE_URL;

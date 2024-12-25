// src/utils/api.js
export async function fetchData() {
    const response = await fetch(import.meta.env.VITE_API_ENDPOINT);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}

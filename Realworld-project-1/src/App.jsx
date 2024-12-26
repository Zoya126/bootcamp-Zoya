import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
import pic from "./assets/Whole_Grains_and_Heart_Health.jpg" 

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchQuery) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.ebi.ac.uk/ols4/api/search`,
        {
          params: {
            q: searchQuery,
            ontology: "efo",
          },
        }
      );

      setResults(response.data.response.docs);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content"> 
          <h1 className="title">Disease Ontology Exploration</h1> 
          <h1>Search, Discover, Connect, Understand</h1>
        </div>
        <img src={pic} alt="" className="header-image" /> 
      </header>

      <main className="main-content"> 
        <div className="search-container"> 
          <input 
            type="text" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Enter any disease such as Asthma or ADHD..." 
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        <div className="results">
          {results.length > 0 ? (
            <div className="card-container">
              {results.map((result) => (
                <div key={result.obo_id} className="result-card">
                  <h3 className="result-title">{result.label}</h3>
                  <span className="short-form">{result.short_form}</span>
                  <p className="result-description">{result.description?.join(" ") || "No description available."}</p>
                </div>
              ))}
            </div>
          ) : (
            searchQuery && !error && <p className="no-results">No results found for "{searchQuery}".</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
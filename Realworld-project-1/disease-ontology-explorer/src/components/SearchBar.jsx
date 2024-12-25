import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    try {
      const response = await axios.get(
        `https://www.ebi.ac.uk/ols/api/ontologies/mondo/terms?short_form=${query}`
      );
      setResults(response.data._embedded?.terms || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a disease..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.iri} onClick={() => onSelect(result)}>
            {result.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

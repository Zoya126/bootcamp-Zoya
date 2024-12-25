import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import HierarchyTree from "./components/HierarchyTree";
import "./App.css";

const App = () => {
  const [selectedDisease, setSelectedDisease] = useState(null);

  return (
    <div className="app">
      <header>
        <h1>Disease Ontology Explorer</h1>
      </header>
      <main>
        <SearchBar onSelect={setSelectedDisease} />
        <div className="content">
          <HierarchyTree selectedDisease={selectedDisease} onSelect={setSelectedDisease} />
          <div className="details">
            <h3>Disease Details</h3>
            {selectedDisease ? (
              <div>
                <p><strong>Name:</strong> {selectedDisease.label}</p>
                <p><strong>IRI:</strong> {selectedDisease.iri}</p>
              </div>
            ) : (
              <p>Select a disease to see details.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

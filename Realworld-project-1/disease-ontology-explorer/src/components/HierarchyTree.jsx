import React, { useState, useEffect } from "react";
import axios from "axios";

const HierarchyTree = ({ selectedDisease, onSelect }) => {
  const [hierarchy, setHierarchy] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedDisease) {
      axios
        .get(
          `https://www.ebi.ac.uk/ols/api/ontologies/mondo/terms/${encodeURIComponent(
            selectedDisease.iri
          )}/hierarchicalParents`
        )
        .then((response) => {
          console.log("Hierarchy API response:", response.data); // Debugging
          setHierarchy(response.data._embedded?.terms || []);
        })
        .catch((err) => {
          console.error("Error fetching hierarchy:", err);
          setError("Unable to fetch hierarchy data.");
        });
    }
  }, [selectedDisease]);

  const renderTree = (nodes) =>
    nodes.map((node) => (
      <li key={node.iri}>
        <span onClick={() => onSelect(node)}>{node.label}</span>
        {node.children && <ul>{renderTree(node.children)}</ul>}
      </li>
    ));

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h3>Hierarchy</h3>
      {hierarchy.length > 0 ? (
        <ul>{renderTree(hierarchy)}</ul>
      ) : (
        <p>No hierarchy data available for this disease.</p>
      )}
    </div>
  );
};

export default HierarchyTree;

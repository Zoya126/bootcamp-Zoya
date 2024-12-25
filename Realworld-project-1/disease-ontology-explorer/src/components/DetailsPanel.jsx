import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailsPanel = ({ disease }) => {
  const [researchPapers, setResearchPapers] = useState([]);

  useEffect(() => {
    if (disease) {
      fetchResearchPapers(disease.label);
    }
  }, [disease]);

  const fetchResearchPapers = async (query) => {
    try {
      const response = await axios.get(
        `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi`,
        {
          params: {
            db: "pubmed",
            term: query,
            retmode: "json",
            retmax: 5, // Fetch top 5 results
          },
        }
      );

      const ids = response.data.esearchresult.idlist;
      if (ids.length > 0) {
        const detailsResponse = await axios.get(
          `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi`,
          {
            params: {
              db: "pubmed",
              id: ids.join(","),
              retmode: "json",
            },
          }
        );

        const papers = Object.values(detailsResponse.data.result).filter(
          (item) => item.uid
        );
        setResearchPapers(papers);
      } else {
        setResearchPapers([]);
      }
    } catch (error) {
      console.error("Error fetching research papers:", error);
    }
  };

  if (!disease) {
    return <p>Select a disease to see details</p>;
  }

  return (
    <div>
      <h3>Disease Details</h3>
      <p>
        <strong>Name:</strong> {disease.label}
      </p>
      <p>
        <strong>IRI:</strong> {disease.iri}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {disease.description || "No description available"}
      </p>

      <h3>Research Papers</h3>
      {researchPapers.length > 0 ? (
        <ul>
          {researchPapers.map((paper) => (
            <li key={paper.uid}>
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${paper.uid}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {paper.title}
              </a>
              <p>
                <strong>Authors:</strong> {paper.authors?.map(a => a.name).join(", ") || "N/A"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No research papers found for this disease.</p>
      )}
    </div>
  );
};

export default DetailsPanel;

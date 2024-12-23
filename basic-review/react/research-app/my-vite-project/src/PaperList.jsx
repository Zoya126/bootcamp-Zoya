import "react";

// eslint-disable-next-line react/prop-types
function PaperList({ papers }) {
  return (
    <div id="papers-list">
      {papers.map((paper) => (
        <div key={paper.id} className="paper">
          <h3>{paper.title}</h3>
          <p><strong>Author:</strong> {paper.author}</p>
          <p><strong>Year:</strong> {paper.year}</p>
          <p><strong>Category:</strong> {paper.category}</p>
          <p><strong>Date:</strong> {paper.date}</p>
          <p className="rating"><strong>Rating:</strong> {paper.rating}</p>
          <p><strong>Abstract:</strong> {paper.abstract}</p>
        </div>
      ))}
    </div>
  );
}

export default PaperList;

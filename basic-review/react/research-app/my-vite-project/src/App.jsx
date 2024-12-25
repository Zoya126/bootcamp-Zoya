import { useState } from "react";
import PaperList from "./PaperList";
import Filter from "./Filter";
import "./App.css";

// Import the papers data from the JSON file
import papersData from "./data/papers.json";

function App() {
  const [filteredPapers, setFilteredPapers] = useState(papersData);
  const [cardsPerPage, setCardsPerPage] = useState(12); // Default to 12 cards per page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to filter papers based on selected criteria
  const filterPapers = (filters) => {
    const { author, year, category, rating, date } = filters;
    const filtered = papersData.filter((paper) => {
      return (
        (author === "" || paper.author.toLowerCase().includes(author.toLowerCase())) &&
        (year === "" || paper.year === parseInt(year)) &&
        (category === "" || paper.category === category) &&
        (rating === "" ||
          (rating === "<3" && paper.rating < 3) ||
          (rating === "3-4" && paper.rating >= 3 && paper.rating < 4) ||
          (rating === "4-5" && paper.rating >= 4)) &&
        (date === "" || paper.date === date)
      );
    });
    setFilteredPapers(filtered);
  };

  // Calculate the start and end index for the papers to be displayed on the current page
  const indexOfLastPaper = currentPage * cardsPerPage;
  const indexOfFirstPaper = indexOfLastPaper - cardsPerPage;
  const currentPapers = filteredPapers.slice(indexOfFirstPaper, indexOfLastPaper);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle cards per page change
  const handleCardsPerPageChange = (event) => {
    setCardsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page when cards per page is changed
  };

  const totalPages = Math.ceil(filteredPapers.length / cardsPerPage);

  return (
    <div className="App">
      <header>
        <h1>Research Paper Bank</h1>
      </header>
      <main>
        <aside id="filters">
          <Filter filterPapers={filterPapers} />
          <label htmlFor="cards-per-page">Cards per page:</label>
          <select id="cards-per-page" value={cardsPerPage} onChange={handleCardsPerPageChange}>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="21">21</option>
          </select>
        </aside>
        <section id="papers">
          <h2>Research Papers</h2>
          <PaperList papers={currentPapers} />
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import  { useState } from "react";
import PaperList from "./PaperList";
import Filter from "./Filter";
import "./App.css";

// Import the papers data from the JSON file
import papersData from "./data/papers.json";

function App() {
  const [filteredPapers, setFilteredPapers] = useState(papersData);

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

  return (
    <div className="App">
      <header>
        <h1>Research Paper Bank</h1>
      </header>
      <main>
        <aside id="filters">
          <Filter filterPapers={filterPapers} />
        </aside>
        <section id="papers">
          <h2>Research Papers</h2>
          <PaperList papers={filteredPapers} />
        </section>
      </main>
    </div>
  );
}

export default App;

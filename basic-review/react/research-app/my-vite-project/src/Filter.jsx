import { useState, useEffect } from "react";

function Filter({ filterPapers }) {
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");

  // Function to handle filter change
  const handleFilterChange = () => {
    filterPapers({ author, year, category, rating, date });
  };

  useEffect(() => {
    handleFilterChange();
  }, [author, year, category, rating, date]);

  return (
    <div>
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Filter by Author"
      />

      <label>Year:</label>
      <select value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Filter by Year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Filter by Category</option>
        <option value="AI">AI</option>
        <option value="Web Development">Web Development</option>
        <option value="Quantum Computing">Quantum Computing</option>
      </select>

      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Filter by Rating</option>
        <option value="<3">Below 3</option>
        <option value="3-4">3 to 4</option>
        <option value="4-5">4 to 5</option>
      </select>

      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default Filter;

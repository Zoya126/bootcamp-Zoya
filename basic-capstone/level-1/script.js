let currentPage = 1;
let cardsPerPage = 6;
let filteredPapers = []; // Store the filtered papers globally

// Helper function to generate random IDs
function generateRandomId() {
  return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
}

// Fetch and load JSON data
fetch('papers.json')
  .then(response => response.json())
  .then(papers => {
    const yearFilter = document.getElementById("year");
    const categoryFilter = document.getElementById("category");
    const cardsPerPageSelect = document.getElementById("cardsPerPage");

    const years = [...new Set(papers.map(paper => paper.year))].sort((a, b) => b - a);
    const categories = [...new Set(papers.map(paper => paper.category))];

    years.forEach(year => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearFilter.appendChild(option);
    });

    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });

    document.getElementById("author").addEventListener("input", () => filterPapers(papers));
    yearFilter.addEventListener("change", () => filterPapers(papers));
    categoryFilter.addEventListener("change", () => filterPapers(papers));
    document.getElementById("rating").addEventListener("input", () => filterPapers(papers));
    document.getElementById("date").addEventListener("change", () => filterPapers(papers));
    cardsPerPageSelect.addEventListener("change", () => {
      cardsPerPage = parseInt(cardsPerPageSelect.value, 10);
      currentPage = 1;
      filterPapers(papers);
    });

    document.getElementById("exportBtn").addEventListener("click", () => exportData(filteredPapers));

    // Initial display
    filteredPapers = papers;
    displayPapers(filteredPapers);
  })
  .catch(error => console.error("Error loading JSON data:", error));

// Filter papers based on user input
function filterPapers(papers) {
  const author = document.getElementById("author").value.toLowerCase();
  const year = document.getElementById("year").value;
  const category = document.getElementById("category").value;
  const rating = document.getElementById("rating").value;
  const date = document.getElementById("date").value;

  filteredPapers = papers.filter(paper => {
    let ratingMatch = true;

    if (rating === "<3") {
      ratingMatch = paper.rating < 3;
    } else if (rating === "3-4") {
      ratingMatch = paper.rating >= 3 && paper.rating <= 4;
    } else if (rating === "4-5") {
      ratingMatch = paper.rating > 4 && paper.rating <= 5;
    }

    return (
      (paper.author.toLowerCase().includes(author) || !author) &&
      (paper.year.toString().includes(year) || !year) &&
      (paper.category.includes(category) || !category) &&
      ratingMatch &&
      (date ? paper.date === date : true)
    );
  });

  currentPage = 1; // Reset to the first page after filtering
  displayPapers(filteredPapers);
}

// Display papers with pagination
function displayPapers(papersToDisplay) {
  const paperList = document.getElementById("paper-list");
  const pagination = document.getElementById("pagination");

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const paginatedPapers = papersToDisplay.slice(startIndex, endIndex);

  paperList.innerHTML = "";
  paginatedPapers.forEach(paper => {
    const randomId = generateRandomId();

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${paper.title}</h3>
      <p><strong>Author:</strong> ${paper.author}</p>
      <p><strong>Year:</strong> ${paper.year}</p>
      <p><strong>Category:</strong> ${paper.category}</p>
      <p><strong>Rating:</strong> ${paper.rating}</p>
      <p><strong>Date:</strong> ${paper.date}</p>
      <p><strong>ID:</strong> ${randomId}</p>
      <p><strong>Abstract:</strong> <span class="abstract">${paper.abstract.slice(0, 150)}...</span><button class="read-more-btn">Read More</button></p>
    `;
    paperList.appendChild(card);

    const readMoreBtn = card.querySelector('.read-more-btn');
    const abstract = card.querySelector('.abstract');

    readMoreBtn.addEventListener('click', () => {
      if (readMoreBtn.textContent === 'Read More') {
        abstract.textContent = paper.abstract;
        readMoreBtn.textContent = 'Read Less';
      } else {
        abstract.textContent = paper.abstract.slice(0, 150) + '...';
        readMoreBtn.textContent = 'Read More';
      }
    });
  });

  const totalPages = Math.ceil(papersToDisplay.length / cardsPerPage);

  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.toggle("active", i === currentPage);
    button.addEventListener("click", () => {
      currentPage = i;
      displayPapers(papersToDisplay);
    });
    pagination.appendChild(button);
  }
}

// Handle Next Page button
document.getElementById('nextPageBtn').addEventListener('click', () => {
  const totalPages = Math.ceil(filteredPapers.length / cardsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayPapers(filteredPapers);
  } else {
    console.log('No more pages to display.');
  }
});

// Export data
function exportData(papers) {
  const jsonData = JSON.stringify(papers, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "filtered_papers.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

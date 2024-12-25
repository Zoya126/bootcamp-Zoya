document.addEventListener("DOMContentLoaded", function () {
    
    const searchButton = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchButton.addEventListener("click", function () {
        
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            // Replace this URL with the actual URL where you want to redirect
            window.location.href = `https://example.com/search?query=${encodeURIComponent(searchTerm)}`;
        } else {
            alert("Please enter a search term.");
        }
    });

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchButton.click(); 
        }
    });
});

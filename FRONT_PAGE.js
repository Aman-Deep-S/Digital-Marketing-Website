document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');

    searchIcon.addEventListener('click', function(event) {
        // Prevents the click from bubbling up to the document
        event.stopPropagation(); 
        searchBox.classList.toggle('active');
    });

    // Optional: Close the search box if you click anywhere else on the page
    document.addEventListener('click', function(event) {
        if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBox.classList.remove('active');
        }
    });
});


// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search button functionality
    const searchBtn = document.getElementById('searchBtn');
    const countrySearch = document.getElementById('countrySearch');
    const countryFilter = document.getElementById('countryFilter');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchCountry();
        });
        
        countrySearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCountry();
            }
        });
    }
    
    // Filter functionality
    if (countryFilter) {
        countryFilter.addEventListener('change', function() {
            const selectedCountry = this.value;
            if (selectedCountry) {
                window.location.href = `${selectedCountry}.html`;
            }
        });
    }
    
    // Country cards click functionality
    const countryCards = document.querySelectorAll('.country-card');
    countryCards.forEach(card => {
        card.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            window.location.href = `${country}.html`;
        });
    });
    
    // Function to search for a country
    function searchCountry() {
        const searchTerm = countrySearch.value.trim().toLowerCase();
        
        if (!searchTerm) {
            alert('Please enter a country name to search');
            return;
        }
        
        // Map search terms to country pages
        const countryMap = {
            'bangladesh': 'bangladesh.html',
            'bd': 'bangladesh.html',
            'usa': 'usa.html',
            'united states': 'usa.html',
            'america': 'usa.html',
            'uk': 'uk.html',
            'united kingdom': 'uk.html',
            'britain': 'uk.html',
            'australia': 'australia.html',
            'aus': 'australia.html',
            'canada': 'canada.html',
            'ca': 'canada.html'
        };
        
        if (countryMap[searchTerm]) {
            window.location.href = countryMap[searchTerm];
        } else {
            // Try partial match
            let found = false;
            for (const key in countryMap) {
                if (key.includes(searchTerm) || searchTerm.includes(key)) {
                    window.location.href = countryMap[key];
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                alert('Country not found. Please try one of these: Bangladesh, USA, UK, Australia, Canada');
            }
        }
    }
    
    // Update active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
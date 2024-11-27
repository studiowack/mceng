document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Get the current page URL
            const currentPage = window.location.pathname.split('/').pop();

            // Get all the nav links
            const navLinks = document.querySelectorAll('nav ul li');

            // Loop through the links and add the .current class to the matching link
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('current');
                }
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));
});

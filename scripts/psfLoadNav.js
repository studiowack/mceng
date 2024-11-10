document.addEventListener("DOMContentLoaded", function() {
    fetch('psfnavbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
});
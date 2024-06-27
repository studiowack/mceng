// Array of background images
const backgrounds = [
    "../imgs/bgs/solderbp1.png",
    "../imgs/bgs/solderbp2.png",
    "../imgs/bgs/solderbp3.png",
    "../imgs/bgs/solderbp4.png",
    "../imgs/bgs/solderbp5.png",
    "../imgs/bgs/solderbp6.png",
    "../imgs/bgs/solderbp7.png",
    "../imgs/bgs/solderbp8.png",
    "../imgs/bgs/solderbp9.png",
    "../imgs/bgs/solderbp10.png",
    // Add more background images here
];

// Function to change the background image
function changeBackground() {
    // Get a random index from the backgrounds array
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    
    // Get the body element
    const body = document.querySelector("body");
    
    // Set the background image of the body element
    
    body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
    // Darken the background image
    body.style.backgroundImage.filter = "brightness(0.5)";
}

// Call the changeBackground function when the page loads
window.addEventListener("load", changeBackground);
// Array of background images
const backgrounds = [
    "../imgs/bgs/solderbpe1.png",
    "../imgs/bgs/solderbpe2.png",
    "../imgs/bgs/solderbpe3.png",
    "../imgs/bgs/solderbpe4.png",
    "../imgs/bgs/solderbpe5.png",
    "../imgs/bgs/solderbpe6.png",
    "../imgs/bgs/solderbpe7.png",
    "../imgs/bgs/solderbpe8.png",
    "../imgs/bgs/solderbpe9.png",
    "../imgs/bgs/solderbpe10.png",
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
    // DO: Darken the background image
    
}

// Call the changeBackground function when the page loads
// window.addEventListener("load", changeBackground);
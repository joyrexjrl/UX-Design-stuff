const bodyElement = document.getElementById('webpageBodySelector');
const modeToggleImage = document.getElementById('modeToggleImage');

function lightDarkModeChanger(){
    if (bodyElement.classList.contains("dark-mode")) {
        // If dark mode is active, switch to light mode
        bodyElement.classList.remove("dark-mode");
        modeToggleImage.src = "images/lightmode.png";
    } else {
        // If light mode is active, switch to dark mode
        bodyElement.classList.add("dark-mode");
        modeToggleImage.src = "images/darkmode.png";
    }
}
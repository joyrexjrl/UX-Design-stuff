const bodyElement = document.getElementById('webpageBodySelector');
const modeToggleImage = document.getElementById('modeToggleImage');
const lightModeH1 = document.getElementById('lightModeH1');
const darkModeH1 = document.getElementById('darkModeH1');
const heroElement = document.getElementById('heroElement');

function lightDarkModeChanger(){
    if (bodyElement.classList.contains("dark-mode")) {
        // If dark mode is active, switch to light mode
        bodyElement.classList.remove("dark-mode");
        darkModeH1.classList.remove("show");
        darkModeH1.classList.add("hide");
        lightModeH1.classList.add("show");
        lightModeH1.classList.remove("hide");
        modeToggleImage.src = "images/lightmode.png";
        heroElement.style.backgroundImage = "url('/images/heroBackgroundLightMode.webp')"
    } else {
        // If light mode is active, switch to dark mode
        bodyElement.classList.add("dark-mode");
        darkModeH1.classList.add("show");
        darkModeH1.classList.remove("hide");
        lightModeH1.classList.remove("show");
        lightModeH1.classList.add("hide");
        modeToggleImage.src = "images/darkmode.png";
        heroElement.style.backgroundImage = "url('/images/heroBackgroundDarkMode.webp')"
    }
}

window.onload = function() {
    if (bodyElement.classList.contains("dark-mode")) {
        heroElement.style.backgroundImage = "url('/images/heroBackgroundDarkMode.webp')";
        modeToggleImage.src = "images/darkmode.png";
    } else {
        heroElement.style.backgroundImage = "url('/images/heroBackgroundLightMode.webp')";
        modeToggleImage.src = "images/lightmode.png";
    }
}
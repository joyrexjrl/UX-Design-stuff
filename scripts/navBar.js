const homeSection = document.getElementById('homeSection');
const transportationSection = document.getElementById('transportationSection');
const entertainmentSection = document.getElementById('entertainmentSection');
const lodgingSection = document.getElementById('lodgingSection');
const aboutSection = document.getElementById('aboutSection');

const innerEntertainmentBeach = document.getElementById('innerEntertainmentBeach');
const innerEnterainmentRestaurants = document.getElementById('innerEnterainmentRestaurants');
const innerEntertainmentNightLife = document.getElementById('innerEntertainmentNightLife');

const sectionsArray = [homeSection, transportationSection, entertainmentSection, lodgingSection, aboutSection];
const entertainmentNavArray = [innerEntertainmentBeach, innerEnterainmentRestaurants, innerEntertainmentNightLife];

function navBarFuncationality(index){
    sectionsArray.forEach(section => {
        section.classList.add("hide");
        section.classList.remove("show");
    });

    sectionsArray[index].classList.remove("hide");
    sectionsArray[index].classList.add("show");
}

function entertainNavBar(index){
    entertainmentNavArray.forEach(section => {
        section.classList.add("hide");
        section.classList.remove("show");
    });

    entertainmentNavArray[index].classList.remove("hide");
    entertainmentNavArray[index].classList.add("show");
}
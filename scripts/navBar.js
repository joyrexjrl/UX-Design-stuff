const homeSection = document.getElementById('homeSection');
const transportationSection = document.getElementById('transportationSection');
const entertainmentSection = document.getElementById('entertainmentSection');
const lodgingSection = document.getElementById('lodgingSection');
const aboutSection = document.getElementById('aboutSection');

const sectionsArray = [homeSection, transportationSection, entertainmentSection, lodgingSection, aboutSection];

function navBarFuncationality(index){
    sectionsArray.forEach(section => {
        section.classList.add("hide");
        section.classList.remove("show");
    });

    sectionsArray[index].classList.remove("hide");
    sectionsArray[index].classList.add("show");
}
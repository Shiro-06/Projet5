// Tableau définissant toutes mes slides avec leurs tagline correspondante //

const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Initialisation des variables //

let banner = document.getElementById("banner");
let tagLineElement = document.querySelector(".tagline"); 
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    updateSlide();

    document.getElementById("prevBtn").addEventListener("click", () => {
        console.log("Previous button clicked");
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        console.log("Next button clicked");
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    // Ajoute des gestionnaires d'événements aux dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            console.log(`Dot ${index + 1} clicked`);
            currentSlide = index;
            updateSlide();
        });
    });
});

function updateSlide() {
    const imageElement = document.querySelector(".slide img");
    
    imageElement.src = slides[currentSlide].image;
    tagLineElement.innerHTML = slides[currentSlide].tagLine;

    // Met à jour la classe active pour les dots
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

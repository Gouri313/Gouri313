// =========================
// AOS Animation
// =========================
AOS.init({
    duration: 1000,
    once: true
});

// =========================
// Typing Effect
// =========================
const words = [
    "B.Tech CSE Student",
    "AI Enthusiast",
    "DSA in C++",
    "Graphic Designer",
    "Creative Editor"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// =========================
// Scroll To Top
// =========================

const topBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// =========================
// Dark Mode
// =========================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

};


// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

    navLinks.classList.toggle("active");

};


// =========================
// Active Navbar Links
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top)
            current = section.id;

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current)
            link.classList.add("active");

    });

});

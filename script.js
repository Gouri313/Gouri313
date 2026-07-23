// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Typing Animation
// ===============================

const typing = document.getElementById("typing");

const words = [
    "B.Tech CSE Student",
    "AI Enthusiast",
    "DSA in C++ Learner",
    "Graphic Designer",
    "Creative Editor"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();


// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// Mobile Menu
// ===============================

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});

// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Active Navbar Link
// ===============================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")
        == "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const cards = document.querySelectorAll(
".project-card,.skill-card,.timeline-item"
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

cards.forEach(card=>{

observer.observe(card);

});

// ===============================
// Counter Animation (Optional)
// ===============================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=
+counter.getAttribute("data-target");

const c=
+counter.innerText;

const increment=
target/100;

if(c<target){

counter.innerText=
`${Math.ceil(c+increment)}`;

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});

// ===============================
// Smooth Hover Glow
// ===============================

document.querySelectorAll(
".project-card,.skill-card"
).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(56,189,248,.2),
rgba(30,41,59,.9))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=
"rgba(30,41,59,.85)";

});

});

console.log(
"Portfolio Loaded Successfully 🚀"
);

// ==========================
// Typing Animation
// ==========================

const texts = [
  "Aspiring Software Developer",
  "Frontend Developer",
  "DSA Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }
    else{

        setTimeout(type,100);

    }

})();


// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});


// ==========================
// Scroll To Top Button
// ==========================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


// ==========================
// Dark Mode
// ==========================

const theme=document.querySelector(".theme");

let dark=false;

theme.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="#111";
document.body.style.color="white";

document.querySelectorAll(".card,.project-card,.edu-card").forEach(card=>{

card.style.background="#1f1f1f";
card.style.color="white";

});

theme.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

document.body.style.background="linear-gradient(135deg,#eef5ff,#ffffff)";
document.body.style.color="#222";

document.querySelectorAll(".card,.project-card,.edu-card").forEach(card=>{

card.style.background="white";
card.style.color="#222";

});

theme.innerHTML='<i class="fa-solid fa-moon"></i>';

}

}


// ==========================
// Reveal Animation
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


// ==========================
// Active Navbar
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// Skill Bar Animation
// ==========================

const fills=document.querySelectorAll(".fill");

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.animation="grow 2s forwards";

}

});

});

fills.forEach(fill=>{

skillObserver.observe(fill);

});


// ==========================
// Console Message
// ==========================

console.log("Welcome to Gouri's Portfolio 🚀");

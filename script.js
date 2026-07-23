// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀️";

    }
    else{

        themeBtn.innerHTML = "🌙";

    }

});





// Back To Top Button

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }


});



topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});





// Scroll Animation

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });



});



sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s ease";


    observer.observe(section);


});

// Page loading animation
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {

        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";

        setTimeout(() => {

            section.style.transition = "0.8s ease";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }, index * 200);

    });

});


// Current Year in Footer (optional)
const footer = document.querySelector("footer");

if(footer){

    const year = new Date().getFullYear();

    const small = document.createElement("p");

    small.innerHTML = `© ${year} Gouri Parashar | All Rights Reserved`;

    footer.appendChild(small);

}

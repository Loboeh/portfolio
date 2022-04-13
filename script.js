const hamburger = document.querySelectorAll(".hamB, .nav-links li, .overlay");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// activates the listener when a link is clicked within the dropdown menu
hamburger.forEach((hamburger) => {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        //toggles hamB transform
        document.body.classList.toggle("open");
        // toggle for ham button and fade effect for links within drop-down menu
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    });
});
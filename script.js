/* ============================
   Smooth Scrolling for Nav Links
============================ */
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ============================
   Fade-In Animation on Scroll
============================ */
const fadeElements = document.querySelectorAll("section, .project-card, .hero");

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);


/* ============================
   Mobile Menu Toggle (Future-Proof)
============================ */
const header = document.querySelector("header");
const nav = document.querySelector("nav");

header.addEventListener("click", () => {
    if (window.innerWidth < 700) {
        nav.classList.toggle("open");
    }
});

// =========================
// Current year
// =========================

document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// Reveal animation on scroll
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-facts, .expertise-card, .timeline-item, .project-card, .skill-group, .career-container, .contact-content"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================
// Active navigation
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// =========================
// Smooth navigation
// =========================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// Small hero animation
// =========================

const visualCard = document.querySelector(".visual-card");

if (visualCard) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 80;
        const y = (window.innerHeight / 2 - event.clientY) / 80;

        visualCard.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

    });

}

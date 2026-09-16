/* =========================================
   AMAL BEN KHELIFA — PORTFOLIO
========================================= */


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}


window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-grid, .experience, .project, .skill-group, .skills-note"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");


if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinksContainer.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking a link */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinksContainer.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   ESCAPE KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navLinksContainer?.classList.remove("open");

        menuToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});

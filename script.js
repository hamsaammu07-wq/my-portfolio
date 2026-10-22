/* =====================================
   HAMSAVENI S. - DEVELOPER PORTFOLIO
   JavaScript Functionality
===================================== */

// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after clicking a navigation link

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .timeline-item, .cert-box, .contact-panel"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

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

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    // Show content if IntersectionObserver is unsupported

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


// CURRENT YEAR IN FOOTER

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// UPDATE RESUME DOWNLOAD LINK

const resumeLinks = document.querySelectorAll(".resume-link");

resumeLinks.forEach(function (link) {
    link.setAttribute("href", "resume.pdf");
    link.setAttribute("download", "Hamsaveni_S_Resume.pdf");
});


// PROJECT LINK CONFIGURATION

/*
Replace the example links below with your real URLs.
Do not leave placeholder links in your published portfolio.
*/

const projectLinks = {
    multimedia: "YOUR_MULTIMEDIA_WEBSITE_URL",
    multimediaGithub: "YOUR_MULTIMEDIA_GITHUB_URL",
    emotionGithub: "YOUR_EMOTION_PROJECT_GITHUB_URL",
    githubProfile: "YOUR_GITHUB_PROFILE_URL",
    linkedin: "YOUR_LINKEDIN_PROFILE_URL"
};


// Connect project links using their data-link attributes

document.querySelectorAll("[data-link]").forEach(function (link) {

    const linkName = link.getAttribute("data-link");
    const url = projectLinks[linkName];

    if (url && !url.startsWith("YOUR_")) {
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    } else {
        link.removeAttribute("href");
    }

});


// CONTACT EMAIL LINK

const emailLinks = document.querySelectorAll("[data-email]");

emailLinks.forEach(function (link) {
    const email = link.getAttribute("data-email");

    if (email && email.includes("@")) {
        link.href = "mailto:" + email;
    }
});


// CONSOLE MESSAGE

console.log(
    "Welcome to Hamsaveni S.'s Developer Portfolio!"
);
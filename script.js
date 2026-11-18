
const themeButton = document.getElementById("theme-toggle");

// Funktion 1: Växla mellan mörkt och ljust tema
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }
});

// Funktion 2: Filtrera projekt
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        projectCards.forEach(function (card) {
            if (
                selectedFilter === "alla" ||
                card.dataset.category === selectedFilter
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });

        filterButtons.forEach(function (filterButton) {
            filterButton.setAttribute(
                "aria-pressed",
                String(filterButton === button)
            );
        });
    });
});

/* Kontaktformulär */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Vänligen fyll i alla fält.";
        return;
    }

    formMessage.textContent =
        "Tack " + name + "! Formuläret har kontrollerats. Inget meddelande har skickats.";

    contactForm.reset();
});

/* Hamburgermeny */

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Stäng menyn");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Öppna menyn");
    }
});

/* Stäng menyn när man väljer en länk */
const menuLinks = navLinks.querySelectorAll("a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Öppna menyn");
    });
});

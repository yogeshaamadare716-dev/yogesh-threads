/* =========================
   URBAN THREADS JAVASCRIPT
========================= */


/* 1. WELCOME MESSAGE */

window.addEventListener("load", function () {

    console.log("Welcome to Urban Threads!");

});


/* 2. PRODUCT ENQUIRY */

const enquiryButtons = document.querySelectorAll(".product-info a");

enquiryButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Thank you for your interest! 😊\n\n" +
            "Please contact Urban Threads on WhatsApp " +
            "for product availability and details."
        );

    });

});


/* 3. WHATSAPP BUTTON */

const whatsappButton = document.querySelector(".whatsapp-btn");

whatsappButton.addEventListener("click", function () {

    console.log("WhatsApp button clicked");

});


/* 4. NAVBAR SHADOW ON SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* 5. CATEGORY CLICK MESSAGE */

const categoryLinks =
    document.querySelectorAll(".category-card a");

categoryLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Collection section opened");

    });

});


/* 6. OFFER BUTTON */

const offerButton =
    document.querySelector(".offer .main-btn");

offerButton.addEventListener("click", function () {

    console.log("Customer wants showroom directions");

});


/* 7. CURRENT YEAR IN FOOTER */

const footerText =
    document.querySelector("footer p");

const currentYear = new Date(7-11-2026).getFullYear(2026);

footerText.innerHTML =
    "© " + currentYear +
    " YOGESH. All Rights Reserved.";


/* 8. SIMPLE SCROLL ANIMATION */

const cards = document.querySelectorAll(
    ".category-card, .product-card, .feature"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


/* 9. CONSOLE MESSAGE */

console.log(
    "YOGESH Threads website is running successfully! 🚀"
);
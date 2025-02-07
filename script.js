document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Event Countdown Timer
    function countdown(eventDate, elementId) {
        let countDownDate = new Date(eventDate).getTime();
        let x = setInterval(function () {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));

            document.getElementById(elementId).innerHTML = `Countdown: ${days} days left`;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById(elementId).innerHTML = "Event Over";
            }
        }, 1000);
    }

    countdown("March 15, 2025", "dashain-countdown");
    countdown("November 1, 2025", "tihar-countdown");
    countdown("July 20, 2025", "picnic-countdown");

    // Lightbox for Gallery
    window.openLightbox = function (img) {
        document.getElementById("lightbox").style.display = "block";
        document.getElementById("lightbox-img").src = img.src;
    };

    window.closeLightbox = function () {
        document.getElementById("lightbox").style.display = "none";
    };

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully!");
        this.reset();
    });
});

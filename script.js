<script>
document.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY + window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= documentHeight) {
        document.getElementById("social-icons").style.opacity = "1"; // Show icons
    } else {
        document.getElementById("social-icons").style.opacity = "0"; // Hide icons
    }
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
</script>

        alert("Message sent successfully!");
        this.reset();
    });
});

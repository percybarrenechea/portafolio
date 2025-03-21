function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

function scrollToTop() {
    document.getElementById('presentacion').scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function() {
    var btn = document.getElementById('btnScrollTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function initializeIconCarousel() {
    $('.languages-icons').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

$(document).ready(function() {
    initializeIconCarousel();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.target;

    // Submit the form using fetch
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    }).then(response => {
        if (response.ok) {
            // Clear form fields after successful submission
            form.reset();
            alert("Mensaje enviado exitosamente.");
            // Redirect to the "presentacion" section
            document.getElementById('presentacion').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
        }
    }).catch(() => {
        alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
    });
});

// Ensure form fields are cleared on page reload
window.addEventListener("load", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.reset();
    }
});
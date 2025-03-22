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
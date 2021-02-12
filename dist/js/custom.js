const prevIcon = '<img src="dist/images/arrow-prev.svg"class="prev-btn prev-arrow">';
const nextIcon = '<img src="dist/images/arrow-next.svg"class="prev-btn next-arrow">';

$('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.testimonial-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
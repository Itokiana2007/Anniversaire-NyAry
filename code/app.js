var swiper = new Swiper(".swiper", {
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: true, // Pour swipe tactile
    effect: "coverflow",
    coverflowEffect: {
        rotate: -10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: true,
    },
    mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        600: { slidesPerView: 3 },
        1200: { slidesPerView: 5 },
    },
});

const audio = document.getElementById("myAudio");
let musicStarted = false;

const slides = document.querySelectorAll(".swiper-slide");

// Ajoute un seul écouteur par bouton
slides.forEach((slide) => {
    const button = slide.querySelector("button");
    if (button) {
        button.addEventListener("click", (e) => {
            e.stopPropagation();

            // Lancer la musique au premier clic seulement
            if (!musicStarted) {
                audio.play().catch(() => {
                    console.log("Lecture audio bloquée par le navigateur");
                });
                musicStarted = true;
            }

            // Flip uniquement si la slide est active
            if (slide.classList.contains("swiper-slide-active")) {
                slide.classList.toggle("flipped");
            }
        });
    }
});

// Enlever le flip lors du changement de slide
swiper.on("slideChangeTransitionStart", () => {
    slides.forEach((slide) => {
        slide.classList.remove("flipped");
    });
});

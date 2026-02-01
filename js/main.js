/* ===== Typing Effect ===== */
const words = ["thoughtful", "clean", "meaningful", "modern"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
    const current = words[wordIndex];
    if (!isDeleting) {
        typedText.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typedText.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

/* ===== Scroll Progress ===== */
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    progressBar.style.width = (scrollTop / height) * 100 + "%";
});

/* ===== Active Nav Link ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ===== Button Ripple ===== */
document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple-circle");

        const ripple = this.querySelector(".ripple-circle");
        if (ripple) ripple.remove();

        this.appendChild(circle);
    });
});
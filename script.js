function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function contact() {
    window.location.href = "mailto:youremail@gmail.com";
}

function goToPage(page) {
    window.location.href = page;
}

function goToSection() {
    window.location.href = "index.html#portfolio";
}

/* SCROLL REVEAL */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* 🔝 HERO ON REFRESH, BUT KEEP #portfolio NAVIGATION */
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.addEventListener("load", () => {
        // Check if coming with #portfolio (from other pages)
        if (!window.location.hash) {
            window.scrollTo(0, 0); // only force top if NO hash
        }
    });

}

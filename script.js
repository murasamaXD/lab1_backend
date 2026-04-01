document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById("burger-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Функція відкриття бургер-меню [cite: 247, 292, 295]
    burgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Анімація поступової появи карток при завантаженні [cite: 215, 248, 296]
    const cards = document.querySelectorAll(".course-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * (index + 1));
    });
});
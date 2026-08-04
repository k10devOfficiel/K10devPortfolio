const menu = document.getElementById("menu");
const liste = document.querySelector(".liste");
const liens = document.querySelectorAll(".liste ul a");

function toggleMenu() {
    liste.classList.toggle("active");
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-xmark");
    document.body.classList.toggle("no-scroll");
}

menu.addEventListener("click", toggleMenu);

// Ferme le menu quand on clique sur un lien
liens.forEach((lien) => {
    lien.addEventListener("click", () => {
        if (liste.classList.contains("active")) {
            toggleMenu();
        }
    });
});

// Ferme le menu avec la touche Échap
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && liste.classList.contains("active")) {
        toggleMenu();
    }
});
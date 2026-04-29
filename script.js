document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        console.log("El usuario está interesado en: " + button.innerText);
    });

    button.addEventListener('click', (e) => {
        // Efecto de feedback visual al hacer clic
        button.style.transform = "scale(0.95)";
    });
});

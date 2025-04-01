document.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
       const menuToggle = document.getElementById("menu-toggle");
       const navLinks = document.querySelector(".nav-links");

       if (menuToggle && navLinks) {
           menuToggle.addEventListener("click", () => {
               navLinks.classList.toggle("nav-active");
           });
       }
   }, 100); // Retraso para asegurar que la navbar ya esté cargada
});

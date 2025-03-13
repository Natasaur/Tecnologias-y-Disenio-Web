document.addEventListener("DOMContentLoaded", () => {
   const footerContainer = document.getElementById("footer-container");
   const footer = document.createElement("footer");
   footer.classList.add("footer");

   footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} MiSitio - Todos los derechos reservados.</p>`;

   footerContainer.appendChild(footer);
});

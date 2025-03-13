document.addEventListener("DOMContentLoaded", () => {
   const navbarContainer = document.getElementById("navbar-container");
   const navbar = document.createElement("nav");
   navbar.classList.add("navbar");

   navbar.innerHTML = `
       <div class="logo">NavBar</div>
       <ul class="nav-links">
           <li><a href="../../Proyecto UX IU/index.html">Inicio</a></li>
           <li><a href="#">Servicios</a></li>
           <li><a href="#">Contacto</a></li>
       </ul>
       <div class="menu-toggle" id="menu-toggle">☰</div>
   `;

   navbarContainer.appendChild(navbar);
});

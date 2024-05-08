const register = document.getElementById("regbtn");
const descr = document.getElementById("descripcion");

const estudios = document.getElementById("estudios");

const currentYearElement = document.getElementById("currentYear");

const currentYear = new Date().getFullYear();

const apiUrl =
  "https://bk-assistant-interactive-profile.onrender.com/verificar-dominio";

register.addEventListener("click", () => {
  window.location.href =
    "https://fr-assistant-interactive-profile.onrender.com";
  // try {
  //   const resp = axios
  //     .get(apiUrl)
  //     .then(function (response) {
  //       //console.log("Página web recibida:", response.data);
  //       window.location.href = response.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // } catch (error) {
  //   console.error("Error:", error);
  // }
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.add("navbar-shrink");
    } else {
      navbarCollapsible.classList.remove("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: [
      "Desarrollador Frontend y Backend",
      "Además, soy experto en implementar soluciones avanzadas de Asterisk.",
      "Fusionando desarrollo y comunicaciones para Contact Center y IPPBX.",
    ],
    typeSpeed: 90, // Velocidad de escritura en milisegundos
    backSpeed: 40, // Velocidad de retroceso en milisegundos
    loop: false, // Repetir la transcripción automáticamente
  };

  var typed = new Typed("#typed-text", options);
});

currentYearElement.textContent = currentYear;
estudios.innerHTML = `✔️ Ingenieria Electronica.Instituto Politecnico Santiago Marino / 2011</li> <br> ✔️ Diplomado en Programacion / 2023`;

descr.innerHTML = `Soy Ingeniero Electronico con experiencia en telecomunicaciones y 
conocimientos sólidos en GNU/Linux, seguridad informática, redes IP y Telefonia IP. Cuento con
 habilidades como desarrollador web en JavaScript y Node.js para soluciones en VoIP y Asterisk y otras soluciones. 
 Puedo ayudarte implementar soluciones de comunicación de alta calidad en tu empresa. 
 Puedo llevar tus soluciones de comunicación al siguiente nivel, 
 la combinacion de mis habilidades en telecomunicaciones, seguridad informática y desarrollo de software 
 te permitirá mejorar la eficiencia y efectividad de tus sistemas de comunicación de manera significativa.`;
const conect = async (e) => {
  e.preventDefault();
};

// register.addEventListener("click", async (e) => {
//   try {
//     axios
//       .get(apiUrl)
//       .then(function (response) {
//         //console.log("Página web recibida:", response.data);
//         return response.data;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });

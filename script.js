// ============================================================
// Portafolio de Sebastian Vite — script.js
// ============================================================

// ---------- Variables y referencias al DOM ----------
const botonTema = document.getElementById("theme-toggle");
const etiquetaTema = document.getElementById("theme-toggle-label");
const CLAVE_TEMA = "portafolio-tema";

const botonVolverArriba = document.getElementById("volver-arriba");

const formularioContacto = document.querySelector(".contact-form");
const campoNombre = document.getElementById("nombre");
const campoCorreo = document.getElementById("correo");
const campoMensaje = document.getElementById("mensaje");
const mensajeFormulario = document.getElementById("form-mensaje");
const CLAVE_NOMBRE = "portafolio-nombre-visitante";

const saludoVisitante = document.getElementById("saludo-visitante");


// ---------- Funcion 1: aplicar el modo claro/oscuro ----------
function aplicarTema(tema) {
  if (tema === "claro") {
    document.body.classList.add("tema-claro");
    etiquetaTema.textContent = "Modo oscuro";
  } else {
    document.body.classList.remove("tema-claro");
    etiquetaTema.textContent = "Modo claro";
  }
}

// Al cargar la pagina, recuperamos el tema guardado en localStorage
const temaGuardado = localStorage.getItem(CLAVE_TEMA);

if (temaGuardado) {
  aplicarTema(temaGuardado);
} else {
  aplicarTema("oscuro");
}

// Evento 1: click en el boton de tema
botonTema.addEventListener("click", function () {
  const temaActual = document.body.classList.contains("tema-claro") ? "claro" : "oscuro";
  const nuevoTema = temaActual === "claro" ? "oscuro" : "claro";

  aplicarTema(nuevoTema);
  localStorage.setItem(CLAVE_TEMA, nuevoTema);
});


// ---------- Funcion 2: validar el formulario de contacto ----------
function validarFormulario(nombre, correo, mensaje) {
  if (nombre === "" || correo === "" || mensaje === "") {
    return false;
  }
  return true;
}

// ---------- Guardar y recuperar el borrador del formulario ----------
const CLAVE_BORRADOR = "portafolio-borrador-formulario";

function guardarBorrador() {
  const borrador = {
    nombre: campoNombre.value,
    correo: campoCorreo.value,
    mensaje: campoMensaje.value
  };
  localStorage.setItem(CLAVE_BORRADOR, JSON.stringify(borrador));
}

function cargarBorrador() {
  const borradorGuardado = localStorage.getItem(CLAVE_BORRADOR);

  if (borradorGuardado) {
    const borrador = JSON.parse(borradorGuardado);
    campoNombre.value = borrador.nombre;
    campoCorreo.value = borrador.correo;
    campoMensaje.value = borrador.mensaje;
  }
}

// Al cargar la pagina, restauramos lo que se haya escrito antes
cargarBorrador();

// Evento: input en cualquier campo del formulario (mientras el visitante escribe)
formularioContacto.addEventListener("input", guardarBorrador);


// Evento 2: submit del formulario de contacto
formularioContacto.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = campoNombre.value.trim();
  const correo = campoCorreo.value.trim();
  const mensaje = campoMensaje.value.trim();

  const esValido = validarFormulario(nombre, correo, mensaje);

  if (esValido) {
    mensajeFormulario.textContent = "Gracias " + nombre + ", tu mensaje fue recibido.";
    mensajeFormulario.classList.remove("form-mensaje-error");
    mensajeFormulario.classList.add("form-mensaje-exito");
    mensajeFormulario.hidden = false;

    // Guardamos el nombre del visitante en localStorage
    localStorage.setItem(CLAVE_NOMBRE, nombre);
    mostrarSaludo(nombre);

    // Ya se envio el mensaje, borramos el borrador guardado
    localStorage.removeItem(CLAVE_BORRADOR);

    formularioContacto.reset();
  } else {
    mensajeFormulario.textContent = "Por favor completa nombre, correo y mensaje antes de enviar.";
    mensajeFormulario.classList.remove("form-mensaje-exito");
    mensajeFormulario.classList.add("form-mensaje-error");
    mensajeFormulario.hidden = false;
  }
});


// ---------- Funcion 3: mostrar saludo personalizado ----------
function mostrarSaludo(nombre) {
  saludoVisitante.textContent = "Hola de nuevo, " + nombre + ".";
  saludoVisitante.hidden = false;
}

// Al cargar la pagina, revisamos si ya hay un nombre guardado
const nombreGuardado = localStorage.getItem(CLAVE_NOMBRE);

if (nombreGuardado) {
  mostrarSaludo(nombreGuardado);
}


// ---------- Boton "Volver arriba" ----------

// Evento 3: scroll de la ventana
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    botonVolverArriba.hidden = false;
  } else {
    botonVolverArriba.hidden = true;
  }
});

// Evento 4: click en el boton de volver arriba
botonVolverArriba.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

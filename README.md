# Portafolio Personal — Sebastian Vite

**Estudiante:** Sebastian Andrés Vite Díaz
**Carrera:** Ingeniería en Sistemas

## Descripción

Portafolio personal que presenta quién soy, mis habilidades técnicas y de idioma,
dos proyectos académicos y un formulario de contacto. Ahora incluye funcionalidades
interactivas con JavaScript.

## Funcionalidades agregadas con JavaScript

- **Modo claro / oscuro**: un botón en el encabezado cambia el tema del sitio. La
  preferencia se guarda en `localStorage` y se mantiene al recargar la página.
- **Botón "Volver arriba"**: aparece al hacer scroll hacia abajo y regresa suavemente
  al inicio de la página al hacer clic.
- **Validación del formulario de contacto**: al enviar, se valida que nombre, correo
  y mensaje no estén vacíos. Muestra un mensaje de confirmación o de error según
  corresponda, sin recargar la página.
- **Borrador del formulario persistente**: lo que se escribe en el formulario se
  guarda automáticamente en `localStorage` mientras se escribe, y se restaura si la
  página se recarga sin haber enviado el mensaje.
- **Saludo personalizado**: al enviar el formulario correctamente, el nombre se guarda
  en `localStorage`; en visitas posteriores, el sitio saluda al visitante por su nombre.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Flexbox, variables en :root, diseño responsivo)
- JavaScript (DOM, eventos, localStorage)
- Git y GitHub

## Cómo visualizar el proyecto

1. Clonar este repositorio.
2. Abrir index.html en cualquier navegador.

## Captura de pantalla

![Portafolio de Sebastian Vite](img/captura-portafolio.png)

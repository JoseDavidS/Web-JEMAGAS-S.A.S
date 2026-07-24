# JEMAGAS S.A.S. — Sitio Web

Sitio web institucional de **JEMAGAS S.A.S.**, empresa dedicada a la operación de estaciones de servicio (combustibles, lubricantes y tienda de conveniencia) en la provincia de Córdoba, Argentina.

Sitio estático (HTML, CSS y JavaScript puro, sin frameworks ni build tools) pensado para ser rápido, responsivo y fácil de mantener.

## Páginas

| Archivo | Descripción |
|---|---|
| [index.html](index.html) | Página principal: hero, servicios, estaciones con mapa embebido, alianzas (Puma / YPF) y contacto. |
| [indexlub.html](indexlub.html) | Catálogo de lubricantes Puma y YPF. |
| [indexfull.html](indexfull.html) | Información sobre el servicio "FULL" (tienda de conveniencia). |

## Características

- **Fondo animado con partículas** (`particles.js`) sobre un `<canvas>`.
- **Carrusel de imágenes** de las estaciones en el hero.
- **Mapas interactivos** embebidos (Google Maps) para cada una de las 4 estaciones.
- **Botón flotante de WhatsApp** para contacto directo.
- **Sección de alianzas estratégicas** con Puma Energy e YPF.
- **Diseño responsivo**, con tipografías Inter y Playfair Display (Google Fonts).

## Estructura del proyecto

```
├── index.html          # Página principal
├── indexlub.html        # Lubricantes
├── indexfull.html        # Servicio FULL
├── styles.css            # Estilos principales
├── estilos.css           # Estilos adicionales
├── particles.js          # Animación de fondo (canvas)
├── particles-lines.js     # Variante de animación de partículas
└── img/                  # Imágenes y logos
```

## Cómo ejecutarlo localmente

Al ser un sitio 100% estático, no requiere instalación de dependencias. Alcanza con abrir los archivos HTML en un navegador o, para evitar restricciones de origen local, servirlos con un servidor estático simple:

```bash
# Opción 1: con Python
python -m http.server 8080

# Opción 2: con Node.js (npx)
npx serve .
```

Luego abrí [http://localhost:8080](http://localhost:8080) en tu navegador.

## Despliegue

Al no requerir build ni backend, el sitio puede publicarse directamente en **GitHub Pages**, Netlify, Vercel o cualquier hosting estático apuntando a `index.html`.

## Contacto

Consultas, reclamos o propuestas laborales: [RRHH@grupojemagas.com](mailto:rrhh@grupojemagas.com)

## Licencia

© 2026 JEMAGAS S.A.S. Todos los derechos reservados.

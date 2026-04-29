# NATALY AYOLA — Media Kit Landing Page

Proyecto web para el media kit de Nataly Ayola. Construido con **HTML + CSS + JavaScript vanilla**, sin frameworks. Listo para despliegue en **Vercel**.

---

## Estructura del proyecto

```
nataly-ayola/
│
├── index.html              # HTML principal (toda la landing)
├── vercel.json             # Configuración de Vercel (headers, cache)
│
├── css/
│   └── style.css           # Todos los estilos (variables, animaciones, layout, responsive)
│
├── js/
│   └── main.js             # Lógica JS (carousel, animaciones, scroll, cursor, etc.)
│
└── assets/
    └── images/             # Carpeta para tus imágenes locales
        ├── hero-01.jpg     # → Slide 1 del carousel
        ├── hero-02.jpg     # → Slide 2 del carousel
        ├── hero-03.jpg     # → Slide 3 del carousel
        ├── about-main.jpg  # → Foto principal sección "Sobre mí"
        ├── about-mini-1.jpg# → Mini foto 1 sección "Sobre mí"
        ├── about-mini-2.jpg# → Mini foto 2 sección "Sobre mí"
        ├── gallery-01.jpg  # → Galería imagen 1 (tall, columna izquierda)
        ├── gallery-02.jpg  # → Galería imagen 2 (cuadrada, centro arriba)
        ├── gallery-03.jpg  # → Galería imagen 3 (cuadrada, derecha arriba)
        ├── gallery-04.jpg  # → Galería imagen 4 (ancha, centro-derecha medio)
        ├── gallery-05.jpg  # → Galería imagen 5 (ancha, izquierda-centro abajo)
        └── gallery-06.jpg  # → Galería imagen 6 (cuadrada, derecha abajo)
```

---

## Dónde están las imágenes en el HTML

Todas las imágenes tienen un **comentario de bloque** justo encima indicando:
- Qué imagen es
- En qué posición del layout aparece
- El formato ideal para esa posición

Busca en `index.html` los comentarios con este patrón:

```html
<!-- ─── IMAGEN HERO 1 ─────────── -->
<!-- ─── IMAGEN ABOUT PRINCIPAL ── -->
<!-- ─── IMAGEN ABOUT MINI 1 ───── -->
<!-- ─── GALERÍA IMAGEN 1 ──────── -->
```

Para reemplazar una imagen local, cambia la URL así:

```html
<!-- ANTES (URL externa) -->
<img src="https://lh3.googleusercontent.com/..." />

<!-- DESPUÉS (imagen local en assets/images/) -->
<img src="assets/images/gallery-01.jpg" />
```

---

## Despliegue en Vercel

### Opción A — CLI de Vercel (recomendada)

```bash
# 1. Instalar Vercel CLI (una sola vez)
npm install -g vercel

# 2. Entrar a la carpeta del proyecto
cd nataly-ayola

# 3. Desplegar
vercel

# 4. Seguir las instrucciones en pantalla
#    - Set up and deploy → Y
#    - Which scope → tu cuenta
#    - Link to existing project → N
#    - Project name → nataly-ayola (o el que quieras)
#    - In which directory is your code? → ./
#    - Override settings → N
```

### Opción B — GitHub + Vercel Dashboard

1. Sube la carpeta a un repositorio de GitHub.
2. Ve a [vercel.com/new](https://vercel.com/new).
3. Importa el repositorio.
4. Vercel detecta automáticamente que es HTML estático.
5. Haz clic en **Deploy**.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5 semántico | Estructura y accesibilidad |
| CSS3 con variables custom | Estilos, animaciones, responsive |
| JavaScript vanilla (ES6+) | Carousel, scroll animations, cursor, tilt 3D |
| Google Fonts (Cinzel, Playfair Display, Inter) | Tipografía |
| IntersectionObserver API | Animaciones de entrada eficientes |
| CSS `backdrop-filter` | Efecto glass/frosted |
| `requestAnimationFrame` | Animaciones de alta performance |

**Sin frameworks. Sin dependencias. Sin npm.**

---

## Animaciones incluidas

- **Hero**: Entrada editorial de título con `@keyframes char-enter` + stagger por línea
- **Scroll reveal**: Fade+translateY, slide-left, slide-right, scale — todas con IntersectionObserver
- **Stagger**: Los hijos de `.stagger-parent` aparecen en cascada con delay progresivo
- **Contadores**: Números animados con easeOutExpo al entrar al viewport
- **Carousel**: Ken Burns en imágenes, crossfade entre slides, swipe en móvil
- **Cursor**: Cursor personalizado con anillo retrasado (lag magnético) — solo desktop
- **Tilt 3D**: Tarjetas con rotación perspectiva al hover — solo desktop
- **Magnetic buttons**: Botones que se atraen suavemente al cursor — solo desktop
- **Parallax**: Imagen principal de About con desplazamiento sutil en scroll
- **Brands ticker**: Loop infinito con pausa en hover y fade en los bordes

---

## Personalización rápida

### Cambiar números de stats
En `index.html`, edita el texto inicial de cada `<span id="stat-...">`.
En `js/main.js`, dentro de `initCounters()`, actualiza los valores `end`.

### Cambiar colores
Todas las variables de color están en `css/style.css` bajo `:root { }`.

### Cambiar número de WhatsApp
Busca `wa.me/573246614697` en `index.html` y reemplaza por el número correcto.

### Agregar marcas al ticker
Añade `<span class="brand-name">NUEVA MARCA</span>` dentro de `.brands-track` (agrégalo en ambas copias para que el loop sea correcto).

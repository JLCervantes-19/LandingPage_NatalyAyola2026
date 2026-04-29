# 🎨 Guía Visual de Personalización

Esta guía te muestra exactamente dónde hacer cambios comunes en el proyecto.

---

## 📸 Cambiar Imágenes

### Ubicación de las Imágenes en el HTML

Todas las imágenes tienen comentarios que las identifican. Busca estos patrones en `index.html`:

```html
<!-- ─── IMAGEN HERO 1 ─────────── -->
<!-- ─── IMAGEN ABOUT PRINCIPAL ── -->
<!-- ─── GALERÍA IMAGEN 1 ──────── -->
```

### Mapa de Imágenes

```
HERO CAROUSEL (3 imágenes)
├─ Línea ~90:  hero-01.jpg  → Slide 1 (vertical)
├─ Línea ~120: hero-02.jpg  → Slide 2 (vertical)
└─ Línea ~150: hero-03.jpg  → Slide 3 (vertical)

SECCIÓN "SOBRE MÍ" (3 imágenes)
├─ Línea ~280: about-main.jpg   → Foto principal (4:5)
├─ Línea ~320: about-mini-1.jpg → Mini foto 1 (cuadrada)
└─ Línea ~340: about-mini-2.jpg → Mini foto 2 (cuadrada)

GALERÍA (6 imágenes)
├─ Línea ~520: gallery-01.jpg → Imagen vertical
├─ Línea ~540: gallery-02.jpg → Imagen cuadrada
├─ Línea ~560: gallery-03.jpg → Imagen cuadrada
├─ Línea ~580: gallery-04.jpg → Imagen horizontal
├─ Línea ~600: gallery-05.jpg → Imagen horizontal
└─ Línea ~620: gallery-06.jpg → Imagen cuadrada
```

### Ejemplo de Reemplazo

**ANTES:**
```html
<img src="https://lh3.googleusercontent.com/..." alt="..." />
```

**DESPUÉS:**
```html
<img src="assets/images/hero-01.jpg" alt="Nataly Ayola — Slide 1" />
```

---

## 📱 Cambiar Número de WhatsApp

### Ubicaciones (5 lugares en total)

Busca en `index.html` todas las instancias de:
```
wa.me/573246614697
```

**Ubicaciones aproximadas:**
- Línea ~40: Menú móvil
- Línea ~60: Header desktop
- Línea ~220: Hero - Botón "CONTACTO DIRECTO"
- Línea ~680: Sección CTA final
- Línea ~700: Footer

**Reemplazar con:**
```
wa.me/57TUNUMERO
```

**Formato del número:**
- Sin espacios
- Sin guiones
- Sin el símbolo +
- Código de país + número
- Ejemplo: `wa.me/573001234567`

---

## 🎨 Cambiar Colores

### Archivo: `css/style.css` (líneas 20-30)

```css
:root {
  /* COLORES PRINCIPALES */
  --c-primary:      #1d1d1f;    /* Negro/Gris oscuro - Texto principal */
  --c-secondary:    #795832;    /* Bronce oscuro - Acentos */
  --c-bronze:       #b38b59;    /* Bronce claro - Detalles */
  
  /* FONDOS */
  --c-bg:           #faf8fe;    /* Fondo general de la página */
  --c-surface:      #ffffff;    /* Fondo de tarjetas */
  --c-surface-dim:  #f4f3f8;    /* Fondo alternativo */
  
  /* TEXTOS */
  --c-text:         #1a1b1f;    /* Texto principal */
  --c-text-muted:   #6b6b6f;    /* Texto secundario */
  --c-text-light:   #c7c6ca;    /* Texto claro */
}
```

### Paletas Sugeridas

**Elegante Minimalista (actual):**
```css
--c-primary:   #1d1d1f;  /* Negro */
--c-secondary: #795832;  /* Bronce */
--c-bg:        #faf8fe;  /* Blanco roto */
```

**Moderno Vibrante:**
```css
--c-primary:   #2d3748;  /* Gris azulado */
--c-secondary: #ed8936;  /* Naranja */
--c-bg:        #f7fafc;  /* Blanco azulado */
```

**Sofisticado Oscuro:**
```css
--c-primary:   #1a202c;  /* Azul oscuro */
--c-secondary: #d69e2e;  /* Dorado */
--c-bg:        #2d3748;  /* Gris oscuro */
```

---

## ✍️ Cambiar Fuentes

### Archivo: `css/style.css` (líneas 32-34)

```css
:root {
  --f-display:   'Cinzel', serif;           /* Títulos grandes (NATALY AYOLA) */
  --f-editorial: 'Playfair Display', serif; /* Subtítulos y citas */
  --f-body:      'Inter', sans-serif;       /* Texto normal */
}
```

### Fuentes Alternativas

**Elegante Clásico:**
```css
--f-display:   'Cormorant Garamond', serif;
--f-editorial: 'Crimson Text', serif;
--f-body:      'Lato', sans-serif;
```

**Moderno Geométrico:**
```css
--f-display:   'Montserrat', sans-serif;
--f-editorial: 'Raleway', sans-serif;
--f-body:      'Open Sans', sans-serif;
```

**Minimalista Suizo:**
```css
--f-display:   'Helvetica Neue', sans-serif;
--f-editorial: 'Georgia', serif;
--f-body:      'Arial', sans-serif;
```

**⚠️ Importante:** Si cambias las fuentes, actualiza también el `<link>` de Google Fonts en `index.html` (línea ~19).

---

## 📊 Cambiar Estadísticas

### Archivo: `js/main.js` (líneas ~180-190)

```javascript
const stats = [
  { id: 'stat-followers',   end: 64.5, suffix: 'K' },  // Seguidores
  { id: 'stat-reach',       end: 400,  suffix: 'K' },  // Alcance
  { id: 'stat-impressions', end: 1.7,  suffix: 'M' },  // Impresiones
  { id: 'stat-engagement',  end: 8.2,  suffix: '%' },  // Engagement
  { id: 'stat-gender',      end: 75,   suffix: '%' },  // % Mujeres
  { id: 'stat-location',    end: 92,   suffix: '%' },  // % Colombia
];
```

**Ejemplos de cambio:**

```javascript
// Para 125.3K seguidores:
{ id: 'stat-followers', end: 125.3, suffix: 'K' }

// Para 2.5M impresiones:
{ id: 'stat-impressions', end: 2.5, suffix: 'M' }

// Para 12.5% engagement:
{ id: 'stat-engagement', end: 12.5, suffix: '%' }
```

---

## 🔗 Cambiar Enlaces de Redes Sociales

### Archivo: `index.html` (líneas ~480-520)

Busca la sección "Ecosistema Social":

```html
<!-- Instagram -->
<a class="social-card" href="#" aria-label="Instagram de Nataly Ayola">
  <!-- Cambia href="#" por tu URL de Instagram -->
</a>

<!-- TikTok -->
<a class="social-card" href="#" aria-label="TikTok de Nataly Ayola">
  <!-- Cambia href="#" por tu URL de TikTok -->
</a>

<!-- Facebook -->
<a class="social-card" href="#" aria-label="Facebook de Nataly Ayola">
  <!-- Cambia href="#" por tu URL de Facebook -->
</a>
```

**Ejemplo:**
```html
<a class="social-card" href="https://instagram.com/natalyayola" target="_blank" rel="noopener">
```

---

## 🏷️ Cambiar Marcas Colaboradoras

### Archivo: `index.html` (líneas ~650-680)

Busca la sección "Marcas que Confían":

```html
<div class="brands-track">
  <span class="brand-name">ENERGY HAIR</span>
  <span class="brand-name">AQA</span>
  <span class="brand-name">DETODITO</span>
  <!-- Agrega más marcas aquí -->
  <span class="brand-name">TU MARCA</span>
  
  <!-- IMPORTANTE: Duplica las marcas para el loop infinito -->
  <span class="brand-name">ENERGY HAIR</span>
  <span class="brand-name">AQA</span>
  <!-- ... duplica todas ... -->
</div>
```

**⚠️ Importante:** Las marcas deben aparecer dos veces (duplicadas) para que el loop infinito funcione sin glitches.

---

## ⚙️ Cambiar Velocidad de Animaciones

### Carousel del Hero

**Archivo:** `js/main.js` (línea ~180)

```javascript
const delay = 5000;  // 5 segundos entre slides
```

Cambia a:
```javascript
const delay = 3000;  // 3 segundos (más rápido)
const delay = 8000;  // 8 segundos (más lento)
```

### Contadores Animados

**Archivo:** `js/main.js` (línea ~190)

```javascript
animateCounter(entry.target, cfg.end, 2200, cfg.suffix);
//                                     ↑
//                                  duración en ms
```

Cambia `2200` a:
- `1500` para más rápido
- `3000` para más lento

### Ken Burns (zoom en imágenes del hero)

**Archivo:** `css/style.css` (línea ~120)

```css
animation: ken-burns 28s linear infinite alternate both;
/*                    ↑
/*                 duración
```

Cambia `28s` a:
- `20s` para más rápido
- `40s` para más lento

---

## 📝 Cambiar Textos Principales

### Título del Hero

**Archivo:** `index.html` (líneas ~200-205)

```html
<h1 class="hero-title">
  <span class="line-1">NATALY</span>
  <span class="line-2">AYOLA</span>
</h1>
```

### Subtítulo del Hero

**Archivo:** `index.html` (línea ~210)

```html
<p class="hero-subtitle">"El contenido conecta cuando es honesto."</p>
```

### Sección "Sobre Mí"

**Archivo:** `index.html` (líneas ~290-310)

```html
<h2 class="t-h1">Autenticidad<br>como Estrategia</h2>

<p class="t-body-lg t-muted">
  Desarrollo contenido estratégico, visual y auténtico...
</p>
```

### Cita en "Sobre Mí"

**Archivo:** `index.html` (línea ~360)

```html
<blockquote class="about-quote">
  "Mi audiencia confía en mí porque solo recomiendo lo que realmente forma parte de mi vida."
</blockquote>
```

---

## 🎯 Cambiar Servicios

### Archivo: `index.html` (líneas ~600-650)

Cada servicio tiene esta estructura:

```html
<div class="service-card glass stagger-child tilt-card">
  <div class="service-icon">
    <!-- Icono SVG aquí -->
  </div>
  <div>
    <h3 class="service-name">Unboxing Estético</h3>
    <p class="service-desc">Experiencia premium</p>
  </div>
</div>
```

**Para agregar un nuevo servicio:**
1. Copia todo el bloque `<div class="service-card">...</div>`
2. Cambia el nombre y descripción
3. Cambia el icono SVG (busca iconos en [Feather Icons](https://feathericons.com/))

---

## 🔍 Meta Tags y SEO

### Archivo: `index.html` (líneas ~5-15)

```html
<meta name="description" content="Nataly Ayola — Creadora de contenido premium..." />

<!-- Open Graph (para compartir en redes) -->
<meta property="og:title" content="NATALY AYOLA | Creadora de Contenido" />
<meta property="og:description" content="Autenticidad como estrategia..." />
<meta property="og:type" content="website" />
<meta property="og:image" content="URL_DE_TU_IMAGEN" />  <!-- ⚠️ Agregar -->
<meta property="og:url" content="https://tu-dominio.com" />  <!-- ⚠️ Agregar -->
```

**⚠️ Importante:** Agrega una imagen para compartir (og:image) de al menos 1200x630px.

---

## 🎨 Cambiar Border Radius (Redondez)

### Archivo: `css/style.css` (líneas 45-52)

```css
:root {
  --r-sm:   4px;    /* Pequeño */
  --r-md:   12px;   /* Mediano */
  --r-lg:   16px;   /* Grande */
  --r-xl:   24px;   /* Extra grande */
  --r-2xl:  32px;   /* 2X grande */
  --r-3xl:  48px;   /* 3X grande */
  --r-full: 9999px; /* Completamente redondo */
}
```

**Para un diseño más cuadrado:**
```css
--r-md:  4px;
--r-lg:  8px;
--r-xl:  12px;
```

**Para un diseño más redondeado:**
```css
--r-md:  16px;
--r-lg:  24px;
--r-xl:  32px;
```

---

## 💡 Tips Rápidos

### Encontrar Elementos Rápidamente

Usa la búsqueda de tu editor (Cmd+F o Ctrl+F) con estos términos:

- `<!-- ─── IMAGEN` → Todas las imágenes
- `wa.me/` → Enlaces de WhatsApp
- `href="#"` → Enlaces sin configurar
- `.t-h1` → Títulos principales
- `.t-body-lg` → Párrafos grandes
- `stat-` → Estadísticas

### Previsualizar Cambios

Después de cada cambio:
1. Guarda el archivo (Cmd+S o Ctrl+S)
2. Recarga el navegador (Cmd+R o Ctrl+R)
3. Si no ves cambios, recarga con caché limpia (Cmd+Shift+R)

### Deshacer Cambios

Si algo sale mal:
```bash
# Ver cambios
git diff

# Deshacer cambios en un archivo
git checkout -- nombre-archivo.html

# Deshacer todos los cambios
git reset --hard
```

---

## 🆘 Ayuda Rápida

### Consola del Navegador

Presiona F12 o:
- Mac: Cmd + Option + I
- Windows: Ctrl + Shift + I

Aquí verás errores de JavaScript o CSS.

### Validar HTML

```bash
tidy -e index.html
```

### Validar CSS

Usa [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

---

¡Listo para personalizar! 🎨✨

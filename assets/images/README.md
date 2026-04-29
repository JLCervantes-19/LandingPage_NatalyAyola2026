# 📸 Carpeta de Imágenes

Coloca aquí tus imágenes para el Media Kit.

## Imágenes Necesarias

### Hero Carousel (3 imágenes)
- `hero-01.jpg` - Slide 1 del carousel (formato vertical/portrait recomendado)
- `hero-02.jpg` - Slide 2 del carousel
- `hero-03.jpg` - Slide 3 del carousel

### Sección "Sobre Mí" (3 imágenes)
- `about-main.jpg` - Foto principal (formato 4:5 recomendado)
- `about-mini-1.jpg` - Mini foto 1 (formato cuadrado 1:1)
- `about-mini-2.jpg` - Mini foto 2 (formato cuadrado 1:1)

### Galería Visual (6 imágenes)
- `gallery-01.jpg` - Imagen vertical/tall (formato 2:3)
- `gallery-02.jpg` - Imagen cuadrada (formato 1:1)
- `gallery-03.jpg` - Imagen cuadrada (formato 1:1)
- `gallery-04.jpg` - Imagen horizontal/wide (formato 16:9 o 3:2)
- `gallery-05.jpg` - Imagen horizontal/wide (formato 16:9 o 3:2)
- `gallery-06.jpg` - Imagen cuadrada (formato 1:1)

## Formatos Recomendados

- **Formato**: JPG o WebP
- **Calidad**: Alta (80-90%)
- **Tamaño máximo**: 2MB por imagen
- **Resolución**: 
  - Hero: 1200x1600px (vertical)
  - About main: 800x1000px
  - About mini: 600x600px
  - Galería: según layout (ver arriba)

## Optimización

Para mejor rendimiento, optimiza tus imágenes antes de subirlas:
- Usa herramientas como TinyPNG, Squoosh, o ImageOptim
- Considera usar formato WebP para mejor compresión
- Mantén el tamaño de archivo bajo sin sacrificar calidad visual

## Reemplazar URLs en HTML

Una vez que tengas las imágenes aquí, busca en `index.html` los comentarios:

```html
<!-- ─── IMAGEN HERO 1 ─────────── -->
<!-- ─── IMAGEN ABOUT PRINCIPAL ── -->
<!-- ─── GALERÍA IMAGEN 1 ──────── -->
```

Y reemplaza las URLs de Google Photos por:

```html
<img src="assets/images/hero-01.jpg" alt="..." />
```

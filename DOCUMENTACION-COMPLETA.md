# 📚 Documentación Completa - Nataly Ayola Media Kit 2026

> **Landing Page Premium con Seguridad Implementada**

---

## 📋 Tabla de Contenidos

1. [Inicio Rápido](#-inicio-rápido)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Personalización](#-personalización)
4. [Seguridad](#-seguridad)
5. [Despliegue](#-despliegue)
6. [Comandos Útiles](#-comandos-útiles)
7. [Mantenimiento](#-mantenimiento)

---

## 🚀 Inicio Rápido

### Ejecutar Localmente

```bash
# Opción 1: Script automático (Recomendado)
./start-local.sh

# Opción 2: Python directo
python3 -m http.server 8000

# Opción 3: npx
npx serve -l 8000
```

**URL:** http://localhost:8000

### Verificar Proyecto

```bash
# Verificar estado general
./verificar-proyecto.sh

# Verificar seguridad
./verificar-seguridad.sh

# Preparar para producción
./preparar-produccion.sh
```

---

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html                    # HTML principal
├── css/
│   └── style.css                 # Estilos
├── js/
│   └── main.js                   # JavaScript
├── assets/
│   └── images/
│       └── images/               # Imágenes del proyecto
│           ├── FOTO1.jpeg        # About principal
│           ├── FOTO2.jpeg        # Hero slide 1
│           ├── FOTO3.jpeg        # About mini 1
│           ├── FOTO4.jpeg        # Hero slide 2
│           ├── FOTO5.jpeg        # Hero slide 3
│           ├── FOTO6.jpeg        # Galería 1
│           ├── FOTO7.jpeg        # Galería 6
│           ├── FOTO8.jpeg        # (Reserva)
│           └── FOTO9.jpeg        # Galería 2
├── vercel.json                   # Configuración Vercel + Seguridad
├── package.json                  # Configuración npm
├── .gitignore                    # Archivos ignorados
├── start-local.sh                # Script servidor local
├── verificar-proyecto.sh         # Script verificación
├── verificar-seguridad.sh        # Script seguridad
├── preparar-produccion.sh        # Script pre-despliegue
└── DOCUMENTACION-COMPLETA.md     # Este archivo
```

---

## 🎨 Personalización

### 1. Cambiar Imágenes

#### Hero Carousel (3 imágenes)

**Ubicación en `index.html`:**

```html
<!-- Slide 1 - Líneas ~95-110 -->
<div class="slide-bg">
  <img src="assets/images/images/FOTO2.jpeg" />
</div>
<div class="slide-img">
  <img src="assets/images/images/FOTO2.jpeg" />
</div>

<!-- Slide 2 - Líneas ~115-130 -->
<div class="slide-bg">
  <img src="assets/images/images/FOTO4.jpeg" />
</div>
<div class="slide-img">
  <img src="assets/images/images/FOTO4.jpeg" />
</div>

<!-- Slide 3 - Líneas ~135-150 -->
<div class="slide-bg">
  <img src="assets/images/images/FOTO5.jpeg" />
</div>
<div class="slide-img">
  <img src="assets/images/images/FOTO5.jpeg" />
</div>
```

#### Sección About (3 imágenes)

```html
<!-- Imagen principal - Línea ~260 -->
<img src="assets/images/images/FOTO1.jpeg" />

<!-- Mini imagen 1 - Línea ~290 -->
<img src="assets/images/images/FOTO3.jpeg" />

<!-- Mini imagen 2 - Línea ~300 -->
<img src="assets/images/images/FOTO2.jpeg" />
```

#### Galería Visual (6 imágenes)

```html
<!-- Imagen 1 - Línea ~540 -->
<img src="assets/images/images/FOTO6.jpeg" />

<!-- Imagen 2 - Línea ~555 -->
<img src="assets/images/images/FOTO9.jpeg" />

<!-- Imagen 3 - Línea ~570 -->
<img src="assets/images/images/FOTO2.jpeg" />

<!-- Imagen 4 - Línea ~585 -->
<img src="assets/images/images/FOTO4.jpeg" />

<!-- Imagen 5 - Línea ~600 -->
<img src="assets/images/images/FOTO3.jpeg" />

<!-- Imagen 6 - Línea ~615 -->
<img src="assets/images/images/FOTO7.jpeg" />
```

### 2. Cambiar Textos

#### Título Principal (Hero)

```html
<!-- Línea ~195 -->
<h1 class="hero-title">
  <span class="line-1">NATALY</span>
  <span class="line-2">AYOLA</span>
</h1>
```

#### Subtítulo Hero

```html
<!-- Línea ~202 -->
<p class="hero-subtitle">"El contenido conecta cuando es honesto."</p>
```

#### Título About

```html
<!-- Línea ~254 -->
<h2 class="t-h1" id="about-heading">
  Una creadora auténtica,<br>no un vehículo publicitario.
</h2>
```

#### Descripción About

```html
<!-- Línea ~260 -->
<p class="t-body-lg t-muted">
  Soy <strong>Nataly Ayola</strong>, creadora de contenido digital basada en Turbaco, Bolivar. 
  Desarrollo contenido estratégico, visual y auténtico para marcas de 
  <strong>lifestyle, moda y belleza</strong>, enfocado en generar conexión, 
  visibilidad y confianza con audiencias reales.
</p>
```

### 3. Cambiar Estadísticas

**Ubicación en `js/main.js` (líneas ~230-245):**

```javascript
const stats = [
  { id: 'stat-followers',  end: 64.5, suffix: 'K' },   // Seguidores
  { id: 'stat-reach',      end: 400,  suffix: 'K' },   // Alcance
  { id: 'stat-impressions',end: 1.7,  suffix: 'M' },   // Impresiones
  { id: 'stat-engagement', end: 8.2,  suffix: '%' },   // Engagement
  // Demografía
  { id: 'stat-women',      end: 75,   suffix: '%' },   // Mujeres
  { id: 'stat-men',        end: 25,   suffix: '%' },   // Hombres
  { id: 'stat-age-25-35',  end: 75,   suffix: '%' },   // 25-35 años
  { id: 'stat-age-18-24',  end: 18,   suffix: '%' },   // 18-24 años
  // Geografía
  { id: 'stat-colombia',   end: 92,   suffix: '%' },   // Colombia
  { id: 'stat-latam',      end: 68,   suffix: '%' },   // Latinoamérica
  { id: 'stat-usa',        end: 6,    suffix: '%' },   // USA/Hispano
  { id: 'stat-spain',      end: 3,    suffix: '%' },   // España
];
```

### 4. Cambiar Enlaces de Redes Sociales

**Ubicación en `index.html` (líneas ~470-510):**

```html
<!-- Instagram -->
<a href="https://www.instagram.com/nataly_ayola1101" target="_blank" rel="noopener noreferrer">

<!-- TikTok -->
<a href="https://www.tiktok.com/@nataly_ayola1101" target="_blank" rel="noopener noreferrer">

<!-- Facebook -->
<a href="https://www.facebook.com/share/1BuWhcVB7C/" target="_blank" rel="noopener noreferrer">
```

### 5. Cambiar Número de WhatsApp

**Buscar y reemplazar en `index.html`:**

```
Buscar: 573246614697
Reemplazar con: TU_NUMERO (sin espacios ni guiones)
```

**Ubicaciones:**
- Línea ~65: Menú móvil
- Línea ~85: Header desktop
- Línea ~210: Hero CTA
- Línea ~730: CTA final

### 6. Cambiar Colores

**Ubicación en `css/style.css` (líneas ~30-45):**

```css
:root {
  /* Colores principales */
  --c-primary:      #1d1d1f;    /* Negro principal */
  --c-secondary:    #795832;    /* Bronce/Dorado */
  --c-bronze:       #b38b59;    /* Bronce claro */
  --c-bg:           #faf8fe;    /* Fondo general */
  --c-surface:      #ffffff;    /* Superficies */
  --c-text:         #1a1b1f;    /* Texto principal */
  --c-text-muted:   #6b6b6f;    /* Texto secundario */
}
```

### 7. Cambiar Fuentes

**Ubicación en `css/style.css` (líneas ~47-49):**

```css
:root {
  --f-display:   'Cinzel', serif;           /* Títulos grandes */
  --f-editorial: 'Playfair Display', serif; /* Subtítulos */
  --f-body:      'Inter', sans-serif;       /* Texto general */
}
```

**Para cambiar fuentes:**
1. Ve a Google Fonts: https://fonts.google.com
2. Selecciona tu fuente
3. Copia el link en `index.html` (línea ~25)
4. Actualiza las variables en `css/style.css`

### 8. Cambiar Velocidad del Carousel

**Ubicación en `js/main.js` (línea ~280):**

```javascript
const delay = 2000;  // Milisegundos (2000 = 2 segundos)
```

---

## 🔒 Seguridad

### Capas de Seguridad Implementadas

#### 1. Headers HTTP (vercel.json)

```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": "default-src 'self'; ..."
}
```

#### 2. Protecciones Activas

- ✅ **Clickjacking**: X-Frame-Options: DENY
- ✅ **XSS**: Filtro XSS del navegador activo
- ✅ **MIME Sniffing**: Content-Type respetado
- ✅ **HTTPS Forzado**: HSTS por 1 año
- ✅ **APIs Sensibles**: Deshabilitadas (cámara, micrófono, geolocalización)
- ✅ **Enlaces Seguros**: noopener noreferrer en todos los externos

#### 3. Verificar Seguridad

```bash
# Local
./verificar-seguridad.sh

# Producción
curl -I https://tu-sitio.vercel.app

# Auditoría Online
# - https://observatory.mozilla.org
# - https://securityheaders.com
# - https://www.ssllabs.com/ssltest/
```

#### 4. Puntuación de Seguridad

```
Headers HTTP:     ████████████████████ 100%
Meta Tags:        ████████████████████ 100%
Enlaces:          ████████████████████ 100%
Archivos:         ████████████████████ 100%
HTTPS:            ████████████████████ 100%
─────────────────────────────────────────
TOTAL:            ████████████████████ 100%
```

---

## 🚀 Despliegue

### Opción 1: Vercel CLI (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Desplegar
vercel --prod
```

### Opción 2: GitHub + Vercel Dashboard

1. **Conectar Repositorio:**
   - Ve a: https://vercel.com/new
   - Selecciona tu repositorio de GitHub
   - Click "Import"

2. **Configuración:**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (dejar vacío)
   - Output Directory: (dejar vacío)

3. **Deploy:**
   - Click "Deploy"
   - Espera 2-3 minutos

4. **Verificar:**
   - Abre la URL generada
   - Verifica que todo funciona

### Opción 3: Drag & Drop

1. Ve a: https://vercel.com/new
2. Arrastra la carpeta del proyecto
3. Espera el despliegue
4. Listo!

### Dominio Personalizado

```bash
# Agregar dominio
vercel domains add tu-dominio.com

# Configurar DNS
# A record: 76.76.21.21
# CNAME: cname.vercel-dns.com
```

### Actualizaciones

```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción del cambio"
git push

# Vercel despliega automáticamente
```

---

## ⚡ Comandos Útiles

### Desarrollo

```bash
# Iniciar servidor local
./start-local.sh

# Ver en navegador
open http://localhost:8000

# Detener servidor
Ctrl + C
```

### Git

```bash
# Ver estado
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción"

# Push
git push

# Ver historial
git log --oneline

# Deshacer cambios
git checkout -- archivo.html
```

### Vercel

```bash
# Ver deployments
vercel ls

# Ver logs
vercel logs

# Eliminar deployment
vercel rm deployment-url

# Ver dominios
vercel domains ls
```

### Optimización de Imágenes

```bash
# Con ImageMagick
convert input.jpg -quality 85 -resize 1200x output.jpg

# Con sips (macOS)
sips -Z 1200 input.jpg --out output.jpg

# Batch
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1200x "optimized-$img"
done
```

### Búsqueda

```bash
# Buscar texto
grep -r "texto" .

# Buscar en HTML
grep -r "wa.me" *.html

# Reemplazar
sed -i '' 's/viejo/nuevo/g' archivo.html
```

### Análisis

```bash
# Tamaño de archivos
du -sh *

# Contar líneas
wc -l index.html css/style.css js/main.js

# Archivos más grandes
find . -type f -exec du -h {} \; | sort -rh | head -10
```

---

## 🔧 Mantenimiento

### Checklist Mensual

- [ ] Ejecutar `./verificar-seguridad.sh`
- [ ] Revisar logs de Vercel
- [ ] Verificar que no hay errores en Analytics
- [ ] Probar funcionalidad en diferentes navegadores

### Checklist Trimestral

- [ ] Auditoría con Mozilla Observatory
- [ ] Auditoría con Security Headers
- [ ] Auditoría con SSL Labs
- [ ] Lighthouse audit completo
- [ ] Optimizar imágenes si es necesario

### Checklist Semestral

- [ ] Revisar y actualizar headers de seguridad
- [ ] Revisar Content Security Policy
- [ ] Actualizar documentación
- [ ] Backup completo del proyecto

### Backup

```bash
# Crear backup
tar -czf backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  .

# Restaurar backup
tar -xzf backup-20260429.tar.gz
```

---

## 🆘 Solución de Problemas

### El servidor local no inicia

```bash
# Verificar Python
python3 --version

# Usar puerto diferente
python3 -m http.server 8080
```

### Las imágenes no cargan

1. Verificar rutas (case-sensitive)
2. Verificar que las imágenes existen
3. Limpiar caché: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

### Los cambios no se ven

1. Limpiar caché del navegador
2. Abrir en modo incógnito
3. Force reload: Cmd+Shift+R

### Error en Vercel

1. Verificar `vercel.json` es válido JSON
2. Revisar logs: `vercel logs`
3. Redesplegar: `vercel --prod --force`

### Headers de seguridad no aparecen

1. Verificar `vercel.json` en la raíz
2. Esperar 2-3 minutos para propagación
3. Redesplegar si es necesario

---

## 📊 Métricas de Rendimiento

### Objetivos

- **Performance**: > 90
- **Accessibility**: > 90
- **Best Practices**: > 90
- **SEO**: > 90

### Verificar con Lighthouse

```bash
# Instalar
npm install -g lighthouse

# Ejecutar
lighthouse https://tu-sitio.vercel.app --view
```

---

## 📞 Recursos

### Documentación

- **Vercel**: https://vercel.com/docs
- **Git**: https://git-scm.com/doc
- **MDN Web Docs**: https://developer.mozilla.org

### Herramientas de Seguridad

- **Mozilla Observatory**: https://observatory.mozilla.org
- **Security Headers**: https://securityheaders.com
- **SSL Labs**: https://www.ssllabs.com/ssltest/

### Optimización

- **Google Fonts**: https://fonts.google.com
- **TinyPNG**: https://tinypng.com
- **ImageOptim**: https://imageoptim.com

---

## ✅ Checklist Final

### Antes de Desplegar

- [ ] Todas las imágenes optimizadas
- [ ] Textos revisados sin errores
- [ ] Enlaces funcionando
- [ ] Número de WhatsApp correcto
- [ ] Redes sociales actualizadas
- [ ] Estadísticas correctas
- [ ] `./verificar-proyecto.sh` exitoso
- [ ] `./verificar-seguridad.sh` 100%
- [ ] Probado en local sin errores

### Después de Desplegar

- [ ] Sitio accesible vía HTTPS
- [ ] Todas las secciones funcionan
- [ ] Carousel funciona
- [ ] Animaciones funcionan
- [ ] Enlaces externos abren en nueva pestaña
- [ ] WhatsApp funciona
- [ ] Menú móvil funciona
- [ ] Sin errores en consola (F12)
- [ ] Auditoría de seguridad pasada

---

## 🎉 ¡Proyecto Completo!

Tu Media Kit está listo con:

- ✅ Diseño premium y profesional
- ✅ Animaciones suaves y elegantes
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Seguridad nivel producción (100%)
- ✅ Optimizado para rendimiento
- ✅ SEO friendly
- ✅ Fácil de mantener y actualizar

---

**Versión:** 1.0.0  
**Última actualización:** Abril 2026  
**Estado:** ✅ Producción Ready  
**Repositorio:** https://github.com/JLCervantes-19/LandingPage_NatalyAyola2026

---

**¿Necesitas ayuda?** Revisa esta documentación o los scripts de verificación incluidos.

**¡Éxito con tu Media Kit!** 🚀✨

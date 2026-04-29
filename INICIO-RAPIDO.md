# 🚀 Guía de Inicio Rápido — Nataly Ayola Media Kit

## 📋 Requisitos Previos

Este proyecto es **HTML + CSS + JavaScript puro**, sin dependencias. Solo necesitas un navegador web y un servidor local.

---

## 🖥️ Ejecutar Localmente

### Opción 1: Con Python (Recomendado - Más Simple)

Python viene preinstalado en macOS. Solo ejecuta:

```bash
# Dar permisos al script (solo la primera vez)
chmod +x start-local.sh

# Iniciar servidor
./start-local.sh
```

O directamente:

```bash
python3 -m http.server 8000
```

Luego abre tu navegador en: **http://localhost:8000**

---

### Opción 2: Con Node.js

Si tienes Node.js instalado:

```bash
npm run dev
```

O sin instalar nada:

```bash
npx serve -l 8000
```

Luego abre tu navegador en: **http://localhost:8000**

---

### Opción 3: Extensión de VS Code

Si usas Visual Studio Code:

1. Instala la extensión **"Live Server"**
2. Haz clic derecho en `index.html`
3. Selecciona **"Open with Live Server"**

---

## 📸 Agregar Tus Imágenes

Las imágenes actualmente usan URLs de Google Photos. Para usar imágenes locales:

1. **Coloca tus imágenes** en la carpeta `assets/images/`

2. **Nombres sugeridos** (según el README):
   ```
   assets/images/
   ├── hero-01.jpg          # Slide 1 del carousel
   ├── hero-02.jpg          # Slide 2 del carousel
   ├── hero-03.jpg          # Slide 3 del carousel
   ├── about-main.jpg       # Foto principal "Sobre mí"
   ├── about-mini-1.jpg     # Mini foto 1
   ├── about-mini-2.jpg     # Mini foto 2
   ├── gallery-01.jpg       # Galería imagen 1 (vertical)
   ├── gallery-02.jpg       # Galería imagen 2 (cuadrada)
   ├── gallery-03.jpg       # Galería imagen 3 (cuadrada)
   ├── gallery-04.jpg       # Galería imagen 4 (horizontal)
   ├── gallery-05.jpg       # Galería imagen 5 (horizontal)
   └── gallery-06.jpg       # Galería imagen 6 (cuadrada)
   ```

3. **Reemplaza las URLs** en `index.html`:
   
   Busca los comentarios como:
   ```html
   <!-- ─── IMAGEN HERO 1 ─────────── -->
   ```
   
   Y cambia:
   ```html
   <!-- ANTES -->
   <img src="https://lh3.googleusercontent.com/..." />
   
   <!-- DESPUÉS -->
   <img src="assets/images/hero-01.jpg" />
   ```

---

## 🎨 Personalización Rápida

### Cambiar Colores

Edita las variables CSS en `css/style.css` (líneas 20-30):

```css
:root {
  --c-primary:      #1d1d1f;    /* Color principal */
  --c-secondary:    #795832;    /* Color secundario (bronce) */
  --c-bronze:       #b38b59;    /* Acento bronce */
  --c-bg:           #faf8fe;    /* Fondo general */
  /* ... más colores ... */
}
```

### Cambiar Números de Stats

En `js/main.js`, busca la función `initCounters()` (línea ~180):

```javascript
const stats = [
  { id: 'stat-followers',  end: 64.5, suffix: 'K' },  // ← Cambia aquí
  { id: 'stat-reach',      end: 400,  suffix: 'K' },
  { id: 'stat-impressions',end: 1.7,  suffix: 'M' },
  { id: 'stat-engagement', end: 8.2,  suffix: '%' },
  // ...
];
```

### Cambiar Número de WhatsApp

Busca en `index.html` todas las instancias de:
```
wa.me/573246614697
```

Y reemplaza con tu número (formato internacional sin +):
```
wa.me/57TUNUMERO
```

---

## 🌐 Desplegar en Vercel

### Método 1: CLI de Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI (solo una vez)
npm install -g vercel

# 2. Desplegar
vercel

# 3. Seguir las instrucciones:
#    - Set up and deploy → Y
#    - Which scope → tu cuenta
#    - Link to existing project → N
#    - Project name → nataly-ayola
#    - In which directory is your code? → ./
#    - Override settings → N
```

### Método 2: GitHub + Vercel Dashboard

1. **Sube el proyecto a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Nataly Ayola Media Kit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/nataly-ayola.git
   git push -u origin main
   ```

2. **Conecta con Vercel**:
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Importa tu repositorio de GitHub
   - Vercel detecta automáticamente que es HTML estático
   - Haz clic en **"Deploy"**

3. **¡Listo!** Tu sitio estará en: `https://tu-proyecto.vercel.app`

---

## 📁 Estructura del Proyecto

```
nataly-ayola/
│
├── index.html              # HTML principal
├── vercel.json             # Configuración de Vercel
├── package.json            # Scripts npm (opcional)
├── start-local.sh          # Script para servidor local
│
├── css/
│   └── style.css           # Todos los estilos
│
├── js/
│   └── main.js             # Toda la lógica JavaScript
│
└── assets/
    └── images/             # Tus imágenes locales
        ├── hero-01.jpg
        ├── hero-02.jpg
        └── ...
```

---

## ✅ Checklist de Despliegue

Antes de desplegar a producción:

- [ ] Reemplazar todas las imágenes de Google Photos por locales
- [ ] Actualizar número de WhatsApp
- [ ] Actualizar estadísticas (seguidores, alcance, etc.)
- [ ] Actualizar enlaces de redes sociales
- [ ] Revisar meta tags (título, descripción, Open Graph)
- [ ] Probar en móvil y desktop
- [ ] Verificar que todas las animaciones funcionen
- [ ] Comprobar tiempos de carga

---

## 🆘 Solución de Problemas

### Las imágenes no cargan

- Verifica que las rutas sean correctas: `assets/images/nombre.jpg`
- Asegúrate de que los nombres de archivo coincidan (case-sensitive)
- Revisa la consola del navegador (F12) para ver errores

### El servidor no inicia

- **Python**: Verifica que Python esté instalado: `python3 --version`
- **Node**: Verifica que Node esté instalado: `node --version`

### Las animaciones no funcionan

- Abre la consola del navegador (F12)
- Busca errores en JavaScript
- Verifica que `js/main.js` esté cargando correctamente

---

## 📞 Soporte

Para más información, consulta el `README.md` principal.

**Tecnologías**: HTML5 • CSS3 • JavaScript ES6+ • Sin frameworks • Sin dependencias

---

¡Listo para brillar! ✨

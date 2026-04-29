# 🚀 EMPIEZA AQUÍ

## ¡Bienvenido a tu Media Kit!

Este archivo te guiará en **3 simples pasos** para tener tu sitio funcionando.

---

## ⚡ Inicio en 3 Pasos

### Paso 1: Previsualizar Localmente (2 minutos)

Abre tu terminal en esta carpeta y ejecuta:

```bash
./start-local.sh
```

Luego abre tu navegador en: **http://localhost:8000**

**¿No funciona?** Prueba:
```bash
python3 -m http.server 8000
```

---

### Paso 2: Personalizar (10-30 minutos)

Abre estos archivos y edita:

#### A. Cambiar Número de WhatsApp

**Archivo:** `index.html`

Busca (Cmd+F o Ctrl+F):
```
wa.me/573246614697
```

Reemplaza con tu número (sin espacios, sin +):
```
wa.me/57TUNUMERO
```

#### B. Cambiar Enlaces de Redes Sociales

**Archivo:** `index.html` (líneas ~480-520)

Busca:
```html
<a class="social-card" href="#"
```

Cambia `href="#"` por tus URLs:
```html
<a class="social-card" href="https://instagram.com/tuusuario"
```

#### C. Actualizar Estadísticas

**Archivo:** `js/main.js` (líneas ~180-190)

Busca:
```javascript
const stats = [
  { id: 'stat-followers', end: 64.5, suffix: 'K' },
```

Cambia los números por los tuyos.

#### D. Agregar Tus Imágenes (Opcional)

1. Coloca tus imágenes en `assets/images/`
2. En `index.html`, busca los comentarios:
   ```html
   <!-- ─── IMAGEN HERO 1 ─────────── -->
   ```
3. Reemplaza las URLs de Google Photos por:
   ```html
   <img src="assets/images/hero-01.jpg" />
   ```

**Guía completa:** [assets/images/README.md](assets/images/README.md)

---

### Paso 3: Desplegar en Vercel (5 minutos)

#### Opción A: Con CLI (Recomendado)

```bash
# Instalar Vercel CLI (solo una vez)
npm install -g vercel

# Desplegar
vercel

# Seguir las instrucciones en pantalla
```

#### Opción B: Con GitHub

1. Sube el proyecto a GitHub
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa tu repositorio
4. Click en "Deploy"

**Guía completa:** [DESPLIEGUE-VERCEL.md](DESPLIEGUE-VERCEL.md)

---

## ✅ Verificar Antes de Desplegar

Ejecuta este comando para verificar que todo está listo:

```bash
./preparar-produccion.sh
```

---

## 📚 Documentación Completa

### Guías Principales

1. **[RESUMEN-CONFIGURACION.md](RESUMEN-CONFIGURACION.md)**
   - Todo lo que se configuró
   - Próximos pasos detallados

2. **[GUIA-VISUAL.md](GUIA-VISUAL.md)**
   - Dónde cambiar cada elemento
   - Ejemplos visuales
   - Tips y trucos

3. **[DESPLIEGUE-VERCEL.md](DESPLIEGUE-VERCEL.md)**
   - Guía completa de despliegue
   - Configuración de dominio
   - Solución de problemas

4. **[COMANDOS-RAPIDOS.md](COMANDOS-RAPIDOS.md)**
   - Todos los comandos útiles
   - Atajos de teclado
   - Automatización

5. **[INDICE-DOCUMENTACION.md](INDICE-DOCUMENTACION.md)**
   - Índice completo de toda la documentación

---

## 🎨 Personalización Rápida

### Cambiar Colores

**Archivo:** `css/style.css` (líneas 20-30)

```css
:root {
  --c-primary:   #1d1d1f;  /* Negro principal */
  --c-secondary: #795832;  /* Bronce */
  --c-bg:        #faf8fe;  /* Fondo */
}
```

### Cambiar Textos

**Archivo:** `index.html`

Busca y edita:
- Línea ~200: Título del hero (NATALY AYOLA)
- Línea ~210: Subtítulo del hero
- Línea ~295: Título "Sobre Mí"
- Línea ~305: Descripción "Sobre Mí"

---

## 🔧 Scripts Útiles

```bash
# Iniciar servidor local
./start-local.sh

# Verificar proyecto
./verificar-proyecto.sh

# Preparar para producción
./preparar-produccion.sh
```

---

## 🆘 Solución Rápida de Problemas

### El servidor no inicia

```bash
# Verificar Python
python3 --version

# Si no está instalado:
# macOS: brew install python3
# O descarga desde python.org
```

### Los cambios no se ven

1. Guarda el archivo (Cmd+S o Ctrl+S)
2. Recarga el navegador con caché limpia:
   - Mac: Cmd + Shift + R
   - Windows: Ctrl + Shift + R

### Las imágenes no cargan

- Verifica que las rutas sean correctas
- Revisa la consola del navegador (F12)
- Asegúrate de que los nombres coincidan (case-sensitive)

---

## 📊 Checklist de Lanzamiento

Antes de compartir tu sitio:

- [ ] Previsualizado localmente
- [ ] Número de WhatsApp actualizado
- [ ] Enlaces de redes sociales actualizados
- [ ] Estadísticas actualizadas
- [ ] Imágenes agregadas (opcional)
- [ ] Ejecutado `./preparar-produccion.sh`
- [ ] Probado en móvil y desktop
- [ ] Desplegado en Vercel

---

## 🎯 Próximos Pasos

### Ahora Mismo

1. Ejecuta `./start-local.sh`
2. Abre http://localhost:8000
3. Explora el sitio

### Hoy

1. Personaliza textos y enlaces
2. Actualiza estadísticas
3. Agrega tus imágenes (opcional)

### Esta Semana

1. Despliega en Vercel
2. Configura dominio personalizado (opcional)
3. Comparte tu Media Kit

---

## 💡 Tips Importantes

### Guarda Cambios Frecuentemente

Usa Git para guardar tu progreso:

```bash
git add .
git commit -m "Descripción del cambio"
```

### Prueba en Diferentes Dispositivos

- Desktop (Chrome, Safari, Firefox)
- Móvil (iOS, Android)
- Tablet

### Optimiza Imágenes

Usa herramientas como:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

---

## 🌟 Características del Proyecto

### Tecnología

- ✅ HTML5 + CSS3 + JavaScript vanilla
- ✅ Sin frameworks
- ✅ Sin dependencias
- ✅ 100% estático
- ✅ Optimizado para Vercel

### Diseño

- 🎨 Estética editorial minimalista
- 🎨 Animaciones suaves
- 🎨 Totalmente responsive
- 🎨 Cursor personalizado (desktop)
- 🎨 Glass morphism effects

### Performance

- ⚡ Carga rápida
- ⚡ Lazy loading de imágenes
- ⚡ Animaciones optimizadas
- ⚡ Headers de seguridad

---

## 📞 Recursos

### Documentación

- [README.md](README.md) - Documentación técnica completa
- [GUIA-VISUAL.md](GUIA-VISUAL.md) - Guía visual de personalización
- [DESPLIEGUE-VERCEL.md](DESPLIEGUE-VERCEL.md) - Guía de despliegue

### Herramientas

- [Vercel](https://vercel.com/) - Hosting
- [TinyPNG](https://tinypng.com/) - Optimizar imágenes
- [Google Fonts](https://fonts.google.com/) - Fuentes

### Soporte

- [Documentación de Vercel](https://vercel.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 🎉 ¡Listo para Empezar!

Tu Media Kit está completamente configurado y listo para usar.

**Siguiente paso:** Ejecuta `./start-local.sh` y abre http://localhost:8000

---

**¿Necesitas ayuda?** Consulta [INDICE-DOCUMENTACION.md](INDICE-DOCUMENTACION.md) para ver toda la documentación disponible.

**¡Éxito con tu Media Kit!** ✨🚀

---

**Proyecto:** Nataly Ayola Media Kit  
**Versión:** 1.0.0  
**Última actualización:** Configuración inicial completada

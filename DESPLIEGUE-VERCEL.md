# 🚀 Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu Media Kit en Vercel paso a paso.

---

## 📋 Pre-requisitos

- Una cuenta en [Vercel](https://vercel.com) (gratis)
- Git instalado (opcional, solo para Método 2)
- Vercel CLI instalado (opcional, solo para Método 1)

---

## 🎯 Método 1: Despliegue con Vercel CLI (Recomendado)

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

O con Homebrew en macOS:

```bash
brew install vercel-cli
```

### Paso 2: Login en Vercel

```bash
vercel login
```

Sigue las instrucciones para autenticarte (email, GitHub, GitLab, o Bitbucket).

### Paso 3: Desplegar

Desde la carpeta raíz del proyecto:

```bash
vercel
```

Responde las preguntas:

```
? Set up and deploy "~/path/to/nataly-ayola"? [Y/n] Y
? Which scope do you want to deploy to? → Selecciona tu cuenta
? Link to existing project? [y/N] N
? What's your project's name? → nataly-ayola (o el nombre que prefieras)
? In which directory is your code located? → ./ (presiona Enter)
? Want to override the settings? [y/N] N
```

### Paso 4: ¡Listo!

Vercel te dará una URL como:
```
https://nataly-ayola-xxx.vercel.app
```

### Despliegue a Producción

Para desplegar a producción (dominio principal):

```bash
vercel --prod
```

---

## 🎯 Método 2: Despliegue con GitHub + Vercel Dashboard

### Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `nataly-ayola-media-kit`
3. Descripción: "Media Kit Landing Page para Nataly Ayola"
4. Visibilidad: Público o Privado (tu elección)
5. Click en **"Create repository"**

### Paso 2: Subir el Proyecto a GitHub

Desde la carpeta del proyecto:

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Nataly Ayola Media Kit"

# Agregar el repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/nataly-ayola-media-kit.git

# Renombrar rama a main
git branch -M main

# Subir a GitHub
git push -u origin main
```

### Paso 3: Conectar con Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Click en **"Import Git Repository"**
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración
5. Click en **"Deploy"**

### Paso 4: ¡Listo!

Vercel construirá y desplegará tu sitio automáticamente.

---

## 🎯 Método 3: Despliegue Drag & Drop

### Paso 1: Preparar Archivos

Asegúrate de que todos los archivos estén listos:
- `index.html`
- `css/style.css`
- `js/main.js`
- `assets/images/` (con tus imágenes)
- `vercel.json`

### Paso 2: Subir a Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra la carpeta del proyecto a la zona de "Drop"
3. Vercel subirá y desplegará automáticamente

---

## ⚙️ Configuración Avanzada

### Dominio Personalizado

1. Ve a tu proyecto en Vercel Dashboard
2. Click en **"Settings"** → **"Domains"**
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

### Variables de Entorno

Si necesitas variables de entorno:

1. Ve a **"Settings"** → **"Environment Variables"**
2. Agrega las variables necesarias
3. Redeploy el proyecto

### Configuración de Build

El archivo `vercel.json` ya incluye:
- Headers de seguridad
- Cache para assets estáticos
- Clean URLs
- Sin trailing slashes

---

## 🔄 Actualizaciones Automáticas

### Con GitHub (Método 2)

Cada vez que hagas push a GitHub, Vercel desplegará automáticamente:

```bash
# Hacer cambios en el código
git add .
git commit -m "Actualización: descripción del cambio"
git push
```

### Con CLI (Método 1)

```bash
# Desplegar cambios
vercel --prod
```

---

## 📊 Monitoreo y Analytics

### Ver Estadísticas

1. Ve a tu proyecto en Vercel Dashboard
2. Click en **"Analytics"**
3. Verás:
   - Visitas
   - Tiempo de carga
   - Países de origen
   - Dispositivos

### Ver Logs

1. Ve a **"Deployments"**
2. Click en un deployment
3. Ve a **"Logs"** para ver detalles

---

## 🐛 Solución de Problemas

### Error: "Build Failed"

- Verifica que todos los archivos estén presentes
- Revisa los logs en Vercel Dashboard
- Asegúrate de que no haya errores en el código

### Imágenes no cargan

- Verifica que las rutas sean correctas
- Asegúrate de que las imágenes estén en `assets/images/`
- Revisa que los nombres de archivo coincidan (case-sensitive)

### Cambios no se reflejan

- Espera unos segundos (el despliegue toma tiempo)
- Limpia la caché del navegador (Cmd+Shift+R en Mac)
- Verifica que el despliegue se haya completado en Vercel

---

## ✅ Checklist Pre-Despliegue

Antes de desplegar a producción:

- [ ] Todas las imágenes están optimizadas
- [ ] Número de WhatsApp actualizado
- [ ] Enlaces de redes sociales actualizados
- [ ] Estadísticas actualizadas
- [ ] Meta tags revisados (título, descripción)
- [ ] Probado en móvil y desktop
- [ ] Sin errores en la consola del navegador
- [ ] Todas las animaciones funcionan correctamente

---

## 🎉 Post-Despliegue

### Compartir tu sitio

Tu sitio estará disponible en:
```
https://tu-proyecto.vercel.app
```

O en tu dominio personalizado si lo configuraste.

### Optimizaciones

Vercel automáticamente:
- ✅ Comprime archivos
- ✅ Optimiza imágenes
- ✅ Usa CDN global
- ✅ Habilita HTTPS
- ✅ Configura cache

---

## 📞 Soporte

- [Documentación de Vercel](https://vercel.com/docs)
- [Comunidad de Vercel](https://github.com/vercel/vercel/discussions)
- [Status de Vercel](https://www.vercel-status.com/)

---

¡Tu Media Kit está listo para el mundo! 🌍✨

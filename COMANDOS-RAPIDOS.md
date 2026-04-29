# ⚡ Comandos Rápidos

Referencia rápida de comandos para trabajar con el proyecto.

---

## 🚀 Desarrollo Local

### Iniciar Servidor

```bash
# Opción 1: Script automático (Recomendado)
./start-local.sh

# Opción 2: Python directo
python3 -m http.server 8000

# Opción 3: Node.js
npm run dev

# Opción 4: npx (sin instalar nada)
npx serve -l 8000
```

**URL:** http://localhost:8000

### Detener Servidor

Presiona `Ctrl + C` en la terminal

---

## 🔍 Verificación

### Verificar Estado del Proyecto

```bash
./verificar-proyecto.sh
```

### Verificar Seguridad

```bash
./verificar-seguridad.sh
```

### Preparar para Producción

```bash
./preparar-produccion.sh
```

### Ver Estructura de Archivos

```bash
tree -L 2 -I 'node_modules'
```

O sin tree:

```bash
find . -maxdepth 2 -not -path '*/\.*' | sort
```

---

## 🌐 Despliegue en Vercel

### Primera Vez

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Desplegar
vercel
```

### Actualizaciones

```bash
# Preview (prueba)
vercel

# Producción
vercel --prod
```

### Ver Deployments

```bash
vercel ls
```

### Ver Logs

```bash
vercel logs
```

---

## 📦 Git

### Inicializar Repositorio

```bash
git init
git add .
git commit -m "Initial commit: Nataly Ayola Media Kit"
```

### Conectar con GitHub

```bash
git remote add origin https://github.com/TU-USUARIO/nataly-ayola.git
git branch -M main
git push -u origin main
```

### Commits Regulares

```bash
# Ver cambios
git status

# Agregar archivos
git add .

# Commit
git commit -m "Descripción del cambio"

# Push
git push
```

### Deshacer Cambios

```bash
# Ver diferencias
git diff

# Deshacer cambios en un archivo
git checkout -- archivo.html

# Deshacer todos los cambios
git reset --hard

# Volver a un commit anterior
git log --oneline
git reset --hard COMMIT_ID
```

---

## 🖼️ Optimización de Imágenes

### Con ImageMagick

```bash
# Instalar (macOS)
brew install imagemagick

# Redimensionar
convert input.jpg -resize 1200x output.jpg

# Comprimir
convert input.jpg -quality 85 output.jpg

# Batch (todas las imágenes)
for img in *.jpg; do
  convert "$img" -quality 85 -resize 1200x "optimized-$img"
done
```

### Con sips (macOS nativo)

```bash
# Redimensionar
sips -Z 1200 input.jpg --out output.jpg

# Convertir formato
sips -s format jpeg input.png --out output.jpg
```

---

## 🔧 Mantenimiento

### Limpiar Archivos Temporales

```bash
# Limpiar node_modules
rm -rf node_modules

# Limpiar .DS_Store (macOS)
find . -name ".DS_Store" -delete

# Limpiar archivos de respaldo
find . -name "*~" -delete
find . -name "*.bak" -delete
```

### Actualizar Dependencias (si usas npm)

```bash
npm update
```

---

## 🔍 Búsqueda y Reemplazo

### Buscar en Archivos

```bash
# Buscar texto
grep -r "texto a buscar" .

# Buscar en archivos específicos
grep -r "wa.me" *.html

# Contar ocurrencias
grep -c "wa.me" index.html
```

### Reemplazar en Archivos

```bash
# Reemplazar en un archivo (macOS)
sed -i '' 's/texto-viejo/texto-nuevo/g' archivo.html

# Reemplazar en múltiples archivos
find . -name "*.html" -exec sed -i '' 's/viejo/nuevo/g' {} \;
```

---

## 📊 Análisis

### Tamaño de Archivos

```bash
# Ver tamaño de archivos
du -sh *

# Ver tamaño de imágenes
du -sh assets/images/*

# Archivos más grandes
find . -type f -exec du -h {} \; | sort -rh | head -10
```

### Contar Líneas de Código

```bash
# Total
find . -name "*.html" -o -name "*.css" -o -name "*.js" | xargs wc -l

# Por tipo
wc -l index.html
wc -l css/style.css
wc -l js/main.js
```

---

## 🧪 Testing

### Validar HTML

```bash
# Con tidy
tidy -e index.html

# Con validator.nu (online)
curl -H "Content-Type: text/html; charset=utf-8" \
  --data-binary @index.html \
  https://validator.nu/?out=gnu
```

### Validar CSS

```bash
# Con stylelint (si está instalado)
npx stylelint "css/**/*.css"
```

### Validar JavaScript

```bash
# Con ESLint (si está instalado)
npx eslint js/main.js
```

### Lighthouse (Performance)

```bash
# Instalar
npm install -g lighthouse

# Ejecutar
lighthouse http://localhost:8000 --view
```

---

## 🔐 Seguridad

### Verificar Configuración de Seguridad

```bash
./verificar-seguridad.sh
```

### Verificar Headers en Producción

```bash
# Con curl
curl -I https://tu-sitio.vercel.app

# Verificar headers específicos
curl -I https://tu-sitio.vercel.app | grep -i "x-frame-options"
curl -I https://tu-sitio.vercel.app | grep -i "content-security-policy"
curl -I https://tu-sitio.vercel.app | grep -i "strict-transport-security"
```

### Auditoría de Seguridad Online

```bash
# Abrir herramientas de auditoría
open https://observatory.mozilla.org
open https://securityheaders.com
open https://www.ssllabs.com/ssltest/
```

### Escanear Vulnerabilidades

```bash
# Con npm audit (si usas npm)
npm audit

# Arreglar automáticamente
npm audit fix
```

---

## 📱 Testing Responsive

### Abrir en Diferentes Tamaños

```bash
# Abrir Chrome en modo móvil
open -a "Google Chrome" --args --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)" http://localhost:8000
```

### Usar ngrok para Testing Remoto

```bash
# Instalar
brew install ngrok

# Exponer servidor local
ngrok http 8000

# Te dará una URL pública temporal
```

---

## 🎨 Desarrollo

### Watch para Cambios (con fswatch)

```bash
# Instalar
brew install fswatch

# Watch y reload automático
fswatch -o . | xargs -n1 -I{} echo "Cambio detectado"
```

### Servidor con Live Reload

```bash
# Con browser-sync
npx browser-sync start --server --files "**/*"
```

---

## 📦 Backup

### Crear Backup

```bash
# Backup completo
tar -czf backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='.git' \
  .

# Backup solo código
tar -czf backup-code-$(date +%Y%m%d).tar.gz \
  index.html css/ js/ vercel.json
```

### Restaurar Backup

```bash
tar -xzf backup-20240101.tar.gz
```

---

## 🔄 Sincronización

### Rsync a Servidor

```bash
rsync -avz --exclude 'node_modules' \
  . usuario@servidor:/ruta/destino/
```

---

## 💡 Tips

### Alias Útiles

Agrega a tu `~/.bashrc` o `~/.zshrc`:

```bash
# Alias para este proyecto
alias na-start='cd ~/ruta/nataly-ayola && ./start-local.sh'
alias na-verify='cd ~/ruta/nataly-ayola && ./verificar-proyecto.sh'
alias na-deploy='cd ~/ruta/nataly-ayola && vercel --prod'
```

Luego:
```bash
source ~/.bashrc  # o ~/.zshrc
```

### Atajos de Teclado

**VS Code:**
- `Cmd + P` → Buscar archivo
- `Cmd + Shift + F` → Buscar en proyecto
- `Cmd + D` → Seleccionar siguiente ocurrencia
- `Cmd + /` → Comentar línea
- `Alt + Shift + F` → Formatear documento

**Terminal:**
- `Ctrl + C` → Detener proceso
- `Ctrl + L` → Limpiar pantalla
- `Ctrl + R` → Buscar en historial
- `!!` → Repetir último comando
- `cd -` → Volver al directorio anterior

---

## 🆘 Ayuda

### Ver Ayuda de Comandos

```bash
# Ayuda de Vercel
vercel --help

# Ayuda de Git
git --help

# Ayuda de npm
npm help
```

### Documentación

- Vercel: https://vercel.com/docs
- Git: https://git-scm.com/doc
- MDN Web Docs: https://developer.mozilla.org

---

¡Comandos listos para usar! ⚡

# 🚀 Guía para Subir el Proyecto a GitHub

## ⚠️ Problema Actual

Hay un conflicto de credenciales. Estás autenticado como `JLCervantes-19` pero el repositorio pertenece a `JhanCervantes2003`.

---

## ✅ Solución 1: Usar Token de Acceso Personal (Recomendado)

### Paso 1: Crear un Token de Acceso Personal

1. Ve a GitHub: https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. Dale un nombre: `Nataly Ayola Landing Page`
4. Selecciona los permisos:
   - ✅ `repo` (todos los sub-permisos)
5. Click en **"Generate token"**
6. **COPIA EL TOKEN** (solo se muestra una vez)

### Paso 2: Actualizar el Remote con el Token

```bash
# Eliminar el remote actual
git remote remove origin

# Agregar el remote con el token
git remote add origin https://TU_TOKEN@github.com/JhanCervantes2003/LandingPage_NatalyAyola2026.git

# Hacer push
git push -u origin main
```

**Reemplaza `TU_TOKEN` con el token que copiaste.**

---

## ✅ Solución 2: Usar SSH (Más Seguro)

### Paso 1: Generar una Llave SSH

```bash
# Generar llave SSH
ssh-keygen -t ed25519 -C "tu-email@example.com"

# Presiona Enter 3 veces (usa valores por defecto)

# Copiar la llave pública
cat ~/.ssh/id_ed25519.pub
```

### Paso 2: Agregar la Llave a GitHub

1. Copia el contenido de la llave pública
2. Ve a GitHub: https://github.com/settings/keys
3. Click en **"New SSH key"**
4. Título: `Mac - Nataly Ayola Project`
5. Pega la llave pública
6. Click en **"Add SSH key"**

### Paso 3: Cambiar el Remote a SSH

```bash
# Eliminar el remote actual
git remote remove origin

# Agregar el remote con SSH
git remote add origin git@github.com:JhanCervantes2003/LandingPage_NatalyAyola2026.git

# Hacer push
git push -u origin main
```

---

## ✅ Solución 3: Cambiar de Cuenta en GitHub Desktop (Más Fácil)

Si tienes GitHub Desktop instalado:

1. Abre **GitHub Desktop**
2. Ve a **Preferences** → **Accounts**
3. Cierra sesión de la cuenta actual
4. Inicia sesión con la cuenta `JhanCervantes2003`
5. Luego en la terminal:

```bash
git push -u origin main
```

---

## ✅ Solución 4: Usar GitHub CLI (gh)

```bash
# Instalar GitHub CLI (si no lo tienes)
brew install gh

# Autenticarte
gh auth login

# Selecciona:
# - GitHub.com
# - HTTPS
# - Login with a web browser

# Hacer push
git push -u origin main
```

---

## 🔍 Verificar el Estado Actual

```bash
# Ver el remote configurado
git remote -v

# Ver el estado del repositorio
git status

# Ver el último commit
git log --oneline -1
```

---

## 📋 Comandos Completos (Opción Token)

```bash
# 1. Eliminar remote actual
git remote remove origin

# 2. Agregar remote con token (REEMPLAZA TU_TOKEN)
git remote add origin https://TU_TOKEN@github.com/JhanCervantes2003/LandingPage_NatalyAyola2026.git

# 3. Verificar
git remote -v

# 4. Push
git push -u origin main
```

---

## 📋 Comandos Completos (Opción SSH)

```bash
# 1. Generar llave SSH
ssh-keygen -t ed25519 -C "tu-email@example.com"

# 2. Copiar llave pública
cat ~/.ssh/id_ed25519.pub
# (Copia el output y agrégalo a GitHub)

# 3. Eliminar remote actual
git remote remove origin

# 4. Agregar remote con SSH
git remote add origin git@github.com:JhanCervantes2003/LandingPage_NatalyAyola2026.git

# 5. Push
git push -u origin main
```

---

## ✅ Después de Subir Exitosamente

Una vez que el push sea exitoso, verás:

```
Enumerating objects: 35, done.
Counting objects: 100% (35/35), done.
Delta compression using up to 8 threads
Compressing objects: 100% (31/31), done.
Writing objects: 100% (35/35), 2.5 MiB | 1.2 MiB/s, done.
Total 35 (delta 2), reused 0 (delta 0)
To https://github.com/JhanCervantes2003/LandingPage_NatalyAyola2026.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🚀 Próximos Pasos Después de Subir

1. **Verificar en GitHub**
   - Ve a: https://github.com/JhanCervantes2003/LandingPage_NatalyAyola2026
   - Verifica que todos los archivos estén ahí

2. **Desplegar en Vercel**
   - Opción 1: Conectar GitHub con Vercel (automático)
   - Opción 2: Usar Vercel CLI

---

## 🆘 Si Nada Funciona

Puedes crear un nuevo repositorio y subir el código manualmente:

1. Ve a: https://github.com/new
2. Crea un nuevo repositorio: `LandingPage_NatalyAyola2026`
3. NO inicialices con README, .gitignore o licencia
4. Copia la URL del nuevo repositorio
5. En la terminal:

```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/LandingPage_NatalyAyola2026.git
git push -u origin main
```

---

## 📞 Ayuda Adicional

- **GitHub Docs - Personal Access Tokens**: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- **GitHub Docs - SSH Keys**: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- **GitHub CLI**: https://cli.github.com/

---

**¡Elige la solución que prefieras y sigue los pasos!** 🚀

# ✅ Checklist de Seguridad - Pre-Despliegue

## 📋 Verificación Antes de Desplegar

### 1. Verificación Local

- [ ] Ejecutar `./verificar-seguridad.sh`
- [ ] Resultado: 100% de verificaciones exitosas
- [ ] Sin errores en la consola del navegador (F12)
- [ ] Todos los enlaces funcionan correctamente

### 2. Archivos de Configuración

- [ ] `vercel.json` contiene todos los headers de seguridad
- [ ] `.gitignore` protege archivos sensibles
- [ ] No hay archivos `.env` o `.key` en el repositorio
- [ ] No hay credenciales hardcodeadas en el código

### 3. HTML y Meta Tags

- [ ] Meta tags de seguridad presentes en `<head>`
- [ ] Todos los enlaces externos tienen `rel="noopener noreferrer"`
- [ ] No hay scripts inline sin necesidad
- [ ] Favicon configurado correctamente

### 4. Contenido

- [ ] Todas las imágenes están optimizadas
- [ ] No hay contenido sensible o privado
- [ ] Textos revisados y sin errores
- [ ] Enlaces de redes sociales actualizados

### 5. Funcionalidad

- [ ] Carousel funciona correctamente
- [ ] Animaciones se ejecutan sin problemas
- [ ] Menú móvil funciona
- [ ] Todos los botones son clickeables
- [ ] Enlaces de WhatsApp funcionan

---

## 🚀 Durante el Despliegue

### Comando de Despliegue

```bash
# 1. Verificar seguridad
./verificar-seguridad.sh

# 2. Verificar proyecto
./verificar-proyecto.sh

# 3. Preparar producción
./preparar-produccion.sh

# 4. Desplegar
vercel --prod
```

### Verificar Output

- [ ] Despliegue completado sin errores
- [ ] URL de producción generada
- [ ] Certificado SSL activo (https://)

---

## 🔍 Verificación Post-Despliegue

### 1. Verificación Manual

- [ ] Abrir sitio en navegador
- [ ] Verificar que HTTPS está activo (candado verde)
- [ ] Probar en diferentes navegadores:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Probar en diferentes dispositivos:
  - [ ] Desktop
  - [ ] Tablet
  - [ ] Móvil

### 2. Verificar Headers HTTP

```bash
# Verificar todos los headers
curl -I https://tu-sitio.vercel.app

# Verificar headers específicos
curl -I https://tu-sitio.vercel.app | grep -i "x-frame-options"
curl -I https://tu-sitio.vercel.app | grep -i "content-security-policy"
curl -I https://tu-sitio.vercel.app | grep -i "strict-transport-security"
```

**Verificar que aparecen:**
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] Permissions-Policy
- [ ] Strict-Transport-Security
- [ ] Content-Security-Policy

### 3. Auditoría Online

#### Mozilla Observatory
- [ ] Ir a: https://observatory.mozilla.org
- [ ] Ingresar URL del sitio
- [ ] Puntuación esperada: A+ o A
- [ ] Sin fallos críticos

#### Security Headers
- [ ] Ir a: https://securityheaders.com
- [ ] Ingresar URL del sitio
- [ ] Puntuación esperada: A o A+
- [ ] Todos los headers presentes

#### SSL Labs
- [ ] Ir a: https://www.ssllabs.com/ssltest/
- [ ] Ingresar URL del sitio
- [ ] Puntuación esperada: A o A+
- [ ] Certificado válido

### 4. Lighthouse Audit

```bash
# Instalar Lighthouse (si no está instalado)
npm install -g lighthouse

# Ejecutar auditoría
lighthouse https://tu-sitio.vercel.app --view
```

**Verificar puntuaciones:**
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

### 5. Consola del Navegador

- [ ] Abrir DevTools (F12)
- [ ] Ir a Console
- [ ] Sin errores en rojo
- [ ] Sin advertencias de seguridad

### 6. Funcionalidad en Producción

- [ ] Carousel funciona
- [ ] Animaciones funcionan
- [ ] Enlaces externos abren en nueva pestaña
- [ ] WhatsApp funciona
- [ ] Menú móvil funciona
- [ ] Imágenes cargan correctamente

---

## 📊 Puntuación Mínima Aceptable

| Categoría | Mínimo | Ideal |
|-----------|--------|-------|
| Mozilla Observatory | B | A+ |
| Security Headers | B | A |
| SSL Labs | A- | A+ |
| Lighthouse Performance | 80 | 90+ |
| Lighthouse Best Practices | 90 | 100 |

---

## ⚠️ Problemas Comunes y Soluciones

### Headers no aparecen

**Problema:** Los headers de seguridad no se muestran en producción

**Solución:**
1. Verificar que `vercel.json` está en la raíz del proyecto
2. Redesplegar: `vercel --prod --force`
3. Esperar 2-3 minutos para propagación

### CSP bloquea recursos

**Problema:** Content-Security-Policy bloquea Google Fonts u otros recursos

**Solución:**
1. Verificar que las URLs están en la whitelist del CSP
2. Actualizar `vercel.json` si es necesario
3. Redesplegar

### Certificado SSL no activo

**Problema:** El sitio no muestra HTTPS

**Solución:**
1. Vercel activa HTTPS automáticamente
2. Esperar 5-10 minutos después del primer despliegue
3. Si persiste, contactar soporte de Vercel

### Imágenes no cargan

**Problema:** Las imágenes no se muestran en producción

**Solución:**
1. Verificar que las rutas son relativas (no absolutas)
2. Verificar que las imágenes están en el repositorio
3. Verificar que los nombres de archivo coinciden (case-sensitive)

---

## 🔄 Mantenimiento Continuo

### Cada Mes

- [ ] Ejecutar `./verificar-seguridad.sh`
- [ ] Revisar logs de Vercel
- [ ] Verificar que no hay errores en Analytics

### Cada 3 Meses

- [ ] Auditoría completa con Mozilla Observatory
- [ ] Auditoría con Security Headers
- [ ] Auditoría con SSL Labs
- [ ] Lighthouse audit completo

### Cada 6 Meses

- [ ] Revisar y actualizar headers de seguridad
- [ ] Revisar Content Security Policy
- [ ] Actualizar documentación si hay cambios

---

## 📞 Contacto de Emergencia

### Si encuentras una vulnerabilidad

1. **NO** la publiques públicamente
2. Documenta el problema
3. Contacta de manera responsable
4. Espera respuesta antes de divulgar

### Recursos de Ayuda

- **Vercel Support:** https://vercel.com/support
- **Vercel Docs:** https://vercel.com/docs
- **Security Best Practices:** https://owasp.org

---

## ✅ Checklist Final

Antes de considerar el despliegue completo:

- [ ] Todas las verificaciones locales pasadas
- [ ] Despliegue exitoso en Vercel
- [ ] Headers de seguridad verificados
- [ ] Auditorías online completadas
- [ ] Funcionalidad probada en producción
- [ ] Sin errores en consola
- [ ] Documentación actualizada
- [ ] Equipo notificado del despliegue

---

## 🎉 ¡Despliegue Seguro Completado!

Si todas las verificaciones están marcadas, tu sitio está:

✅ Seguro
✅ Optimizado
✅ Listo para producción
✅ Protegido contra vulnerabilidades comunes

---

**Última actualización:** Abril 2026  
**Versión:** 1.0.0  
**Estado:** ✅ Producción Ready

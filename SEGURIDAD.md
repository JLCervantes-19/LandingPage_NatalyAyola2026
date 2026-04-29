# 🔒 Seguridad del Proyecto - Nataly Ayola Media Kit

## Capas de Seguridad Implementadas

### 1. Headers de Seguridad HTTP (vercel.json)

#### ✅ X-Content-Type-Options: nosniff
- Previene ataques MIME-sniffing
- El navegador respeta el Content-Type declarado

#### ✅ X-Frame-Options: DENY
- Protección contra clickjacking
- Impide que el sitio sea embebido en iframes

#### ✅ X-XSS-Protection: 1; mode=block
- Activa el filtro XSS del navegador
- Bloquea la página si detecta un ataque XSS

#### ✅ Referrer-Policy: strict-origin-when-cross-origin
- Controla qué información de referencia se envía
- Protege la privacidad del usuario

#### ✅ Permissions-Policy
- Deshabilita APIs sensibles no utilizadas:
  - Geolocalización
  - Micrófono
  - Cámara
  - Pagos
  - USB
  - Sensores de movimiento

#### ✅ Strict-Transport-Security (HSTS)
- Fuerza conexiones HTTPS
- Duración: 1 año
- Incluye subdominios
- Preload habilitado

#### ✅ Content-Security-Policy (CSP)
- `default-src 'self'`: Solo recursos del mismo origen
- `script-src 'self' 'unsafe-inline'`: Scripts propios e inline (necesario para el proyecto)
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`: Estilos propios y Google Fonts
- `font-src 'self' https://fonts.gstatic.com`: Fuentes propias y Google Fonts
- `img-src 'self' data: https:`: Imágenes propias, data URIs y HTTPS
- `frame-ancestors 'none'`: No permite ser embebido en iframes
- `form-action 'self' https://wa.me`: Solo envío de formularios a origen propio y WhatsApp

### 2. Meta Tags de Seguridad (HTML)

#### ✅ X-UA-Compatible
- Asegura compatibilidad con navegadores modernos

#### ✅ Referrer Policy
- Control adicional de información de referencia

#### ✅ Format Detection
- Desactiva detección automática de teléfonos (previene phishing)

### 3. Configuración de Caché Segura

#### ✅ Assets Estáticos (CSS, JS, Imágenes)
- Cache-Control: `public, max-age=31536000, immutable`
- Optimiza rendimiento sin comprometer seguridad
- Los archivos son inmutables (versionados)

### 4. Protección de Archivos Sensibles (.gitignore)

#### ✅ Archivos Excluidos del Repositorio:
- Variables de entorno (.env*)
- Claves privadas (*.key, *.pem)
- Certificados (*.p12, *.pfx)
- Configuraciones locales
- Backups y archivos temporales
- Logs detallados

## 🛡️ Buenas Prácticas Implementadas

### Enlaces Externos Seguros
Todos los enlaces externos usan:
```html
target="_blank" rel="noopener noreferrer"
```
- `noopener`: Previene acceso a window.opener
- `noreferrer`: No envía información de referencia

### HTTPS Forzado
- Vercel proporciona HTTPS automático
- HSTS fuerza el uso de HTTPS
- Redirección automática de HTTP a HTTPS

### Validación de Entrada
- No hay formularios que procesen datos sensibles
- Enlaces de WhatsApp usan URLs oficiales

## 📋 Checklist de Seguridad

- [x] Headers de seguridad HTTP configurados
- [x] CSP (Content Security Policy) implementado
- [x] Protección contra clickjacking (X-Frame-Options)
- [x] Protección XSS activada
- [x] HSTS configurado
- [x] Permissions Policy restrictiva
- [x] Enlaces externos seguros (noopener, noreferrer)
- [x] HTTPS forzado
- [x] Archivos sensibles protegidos (.gitignore)
- [x] Meta tags de seguridad
- [x] Cache seguro para assets estáticos

## 🔍 Verificación de Seguridad

### Herramientas Recomendadas para Auditoría:

1. **Mozilla Observatory**
   - URL: https://observatory.mozilla.org
   - Analiza headers de seguridad

2. **Security Headers**
   - URL: https://securityheaders.com
   - Verifica configuración de headers

3. **SSL Labs**
   - URL: https://www.ssllabs.com/ssltest/
   - Analiza configuración SSL/TLS

4. **Lighthouse (Chrome DevTools)**
   - Auditoría de seguridad integrada
   - Verifica mejores prácticas

## ⚠️ Notas Importantes

### CSP y 'unsafe-inline'
El proyecto usa `'unsafe-inline'` para scripts y estilos porque:
- Es un sitio estático sin backend
- Los scripts son propios y controlados
- No hay contenido generado por usuarios
- Simplifica el desarrollo sin comprometer seguridad significativamente

Para mayor seguridad en el futuro, considera:
- Usar nonces o hashes para scripts inline
- Externalizar todos los estilos inline

### Vercel y Seguridad
Vercel proporciona automáticamente:
- Certificados SSL/TLS gratuitos
- DDoS protection
- Edge network global
- Firewall de aplicaciones web (WAF)

## 🚀 Despliegue Seguro en Vercel

### Pasos para Desplegar:

1. **Conectar Repositorio**
   ```bash
   vercel --prod
   ```

2. **Verificar Headers**
   - Los headers se aplican automáticamente desde vercel.json
   - No requiere configuración adicional

3. **Verificar HTTPS**
   - Vercel activa HTTPS automáticamente
   - El certificado se renueva automáticamente

4. **Monitoreo**
   - Vercel Analytics para monitorear tráfico
   - Logs de acceso disponibles en el dashboard

## 📞 Contacto de Seguridad

Si encuentras alguna vulnerabilidad de seguridad, por favor contacta de manera responsable.

---

**Última actualización:** Abril 2026
**Versión:** 1.0.0

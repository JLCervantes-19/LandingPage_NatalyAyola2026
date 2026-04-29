#!/bin/bash

# ============================================================
# Script de Verificación de Seguridad
# Nataly Ayola Media Kit
# ============================================================

echo "🔒 Verificando Configuración de Seguridad..."
echo ""

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de verificaciones
PASSED=0
FAILED=0

# Función para verificar archivos
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $2"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $2"
        ((FAILED++))
    fi
}

# Función para verificar contenido
check_content() {
    if grep -q "$1" "$2" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $3"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} $3"
        ((FAILED++))
    fi
}

echo "📁 Verificando Archivos de Configuración..."
echo "─────────────────────────────────────────────"
check_file "vercel.json" "vercel.json existe"
check_file ".gitignore" ".gitignore existe"
check_file "SEGURIDAD.md" "Documentación de seguridad existe"
echo ""

echo "🛡️ Verificando Headers de Seguridad en vercel.json..."
echo "─────────────────────────────────────────────────────"
check_content "X-Content-Type-Options" "vercel.json" "X-Content-Type-Options configurado"
check_content "X-Frame-Options" "vercel.json" "X-Frame-Options configurado"
check_content "X-XSS-Protection" "vercel.json" "X-XSS-Protection configurado"
check_content "Referrer-Policy" "vercel.json" "Referrer-Policy configurado"
check_content "Permissions-Policy" "vercel.json" "Permissions-Policy configurado"
check_content "Strict-Transport-Security" "vercel.json" "HSTS configurado"
check_content "Content-Security-Policy" "vercel.json" "CSP configurado"
echo ""

echo "🔐 Verificando Meta Tags de Seguridad en HTML..."
echo "────────────────────────────────────────────────"
check_content "X-UA-Compatible" "index.html" "X-UA-Compatible presente"
check_content "referrer" "index.html" "Referrer policy presente"
check_content "format-detection" "index.html" "Format detection configurado"
echo ""

echo "🔗 Verificando Enlaces Externos Seguros..."
echo "──────────────────────────────────────────"
if grep -q 'target="_blank"' index.html && grep -q 'rel="noopener' index.html; then
    echo -e "${GREEN}✓${NC} Enlaces externos usan noopener/noreferrer"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠${NC} Algunos enlaces externos podrían no ser seguros"
    ((FAILED++))
fi
echo ""

echo "📦 Verificando .gitignore..."
echo "───────────────────────────"
check_content ".env" ".gitignore" "Variables de entorno protegidas"
check_content "*.key" ".gitignore" "Claves privadas protegidas"
check_content "*.pem" ".gitignore" "Certificados protegidos"
check_content "secrets" ".gitignore" "Archivos de secretos protegidos"
echo ""

echo "📊 Resumen de Verificación"
echo "═════════════════════════════════════════════"
echo -e "${GREEN}Verificaciones Exitosas: $PASSED${NC}"
echo -e "${RED}Verificaciones Fallidas: $FAILED${NC}"
echo ""

TOTAL=$((PASSED + FAILED))
PERCENTAGE=$((PASSED * 100 / TOTAL))

if [ $PERCENTAGE -ge 90 ]; then
    echo -e "${GREEN}🎉 Excelente! Seguridad: $PERCENTAGE%${NC}"
elif [ $PERCENTAGE -ge 70 ]; then
    echo -e "${YELLOW}⚠️  Bueno, pero mejorable. Seguridad: $PERCENTAGE%${NC}"
else
    echo -e "${RED}❌ Requiere atención. Seguridad: $PERCENTAGE%${NC}"
fi

echo ""
echo "💡 Recomendaciones:"
echo "   1. Ejecuta este script antes de cada despliegue"
echo "   2. Revisa SEGURIDAD.md para más detalles"
echo "   3. Usa herramientas online para auditoría post-despliegue:"
echo "      - https://observatory.mozilla.org"
echo "      - https://securityheaders.com"
echo ""

exit 0

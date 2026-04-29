#!/bin/bash
# Script de verificación del proyecto
# Verifica que todos los archivos necesarios estén presentes

echo "🔍 Verificando proyecto Nataly Ayola Media Kit..."
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contadores
errors=0
warnings=0

# Función para verificar archivo
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
    else
        echo -e "${RED}✗${NC} $1 - FALTA"
        ((errors++))
    fi
}

# Función para verificar directorio
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
    else
        echo -e "${RED}✗${NC} $1/ - FALTA"
        ((errors++))
    fi
}

echo "📁 Archivos principales:"
check_file "index.html"
check_file "vercel.json"
check_file "README.md"
check_file "DOCUMENTACION-COMPLETA.md"
echo ""

echo "📁 Carpetas:"
check_dir "css"
check_dir "js"
check_dir "assets"
check_dir "assets/images"
echo ""

echo "🎨 Estilos:"
check_file "css/style.css"
echo ""

echo "⚡ JavaScript:"
check_file "js/main.js"
echo ""

echo "📸 Verificando imágenes..."
image_count=0
shopt -s nullglob
for img in assets/images/*.jpg assets/images/*.jpeg assets/images/*.png assets/images/*.webp; do
    if [ -f "$img" ]; then
        ((image_count++))
        echo -e "${GREEN}✓${NC} $(basename "$img")"
    fi
done
shopt -u nullglob

if [ $image_count -eq 0 ]; then
    echo -e "${YELLOW}⚠${NC}  No se encontraron imágenes en assets/images/"
    echo "   Las imágenes actuales están usando URLs de Google Photos"
    echo "   Consulta assets/images/README.md para más información"
    ((warnings++))
else
    echo -e "${GREEN}✓${NC} Se encontraron $image_count imagen(es)"
fi
echo ""

echo "🔗 Verificando enlaces de WhatsApp..."
wa_count=$(grep -o "wa.me/[0-9]*" index.html | wc -l | tr -d ' ')
if [ "$wa_count" -gt 0 ]; then
    wa_number=$(grep -o "wa.me/[0-9]*" index.html | head -1 | cut -d'/' -f2)
    echo -e "${GREEN}✓${NC} Encontrados $wa_count enlaces de WhatsApp"
    echo "   Número actual: $wa_number"
    if [ "$wa_number" = "573246614697" ]; then
        echo -e "${YELLOW}⚠${NC}  Recuerda actualizar el número de WhatsApp"
        ((warnings++))
    fi
else
    echo -e "${RED}✗${NC} No se encontraron enlaces de WhatsApp"
    ((errors++))
fi
echo ""

echo "📊 Resumen:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $errors -eq 0 ] && [ $warnings -eq 0 ]; then
    echo -e "${GREEN}✓ Proyecto verificado correctamente${NC}"
    echo ""
    echo "🚀 Para iniciar el servidor local:"
    echo "   ./start-local.sh"
    echo ""
    echo "🌐 Para desplegar en Vercel:"
    echo "   vercel"
elif [ $errors -eq 0 ]; then
    echo -e "${YELLOW}⚠ Proyecto funcional con $warnings advertencia(s)${NC}"
    echo ""
    echo "Puedes continuar, pero revisa las advertencias arriba."
else
    echo -e "${RED}✗ Se encontraron $errors error(es) y $warnings advertencia(s)${NC}"
    echo ""
    echo "Por favor corrige los errores antes de continuar."
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

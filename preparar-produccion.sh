#!/bin/bash
# Script para preparar el proyecto para producción
# Verifica y lista tareas pendientes antes del despliegue

echo "🔧 Preparando proyecto para producción..."
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Contadores
tasks_pending=0
tasks_done=0

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 CHECKLIST DE PRODUCCIÓN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. Verificar imágenes
echo "1️⃣  Imágenes locales"
image_count=$(find assets/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
if [ "$image_count" -gt 0 ]; then
    echo -e "   ${GREEN}✓${NC} $image_count imagen(es) encontrada(s)"
    ((tasks_done++))
else
    echo -e "   ${YELLOW}⚠${NC} No hay imágenes locales"
    echo "   → Agrega imágenes en assets/images/ o usa URLs externas"
    ((tasks_pending++))
fi
echo ""

# 2. Verificar número de WhatsApp
echo "2️⃣  Número de WhatsApp"
wa_number=$(grep -o "wa.me/[0-9]*" index.html | head -1 | cut -d'/' -f2)
if [ "$wa_number" = "573246614697" ]; then
    echo -e "   ${YELLOW}⚠${NC} Usando número de ejemplo: $wa_number"
    echo "   → Actualiza el número en index.html"
    ((tasks_pending++))
else
    echo -e "   ${GREEN}✓${NC} Número configurado: $wa_number"
    ((tasks_done++))
fi
echo ""

# 3. Verificar enlaces de redes sociales
echo "3️⃣  Enlaces de redes sociales"
social_links=$(grep -c 'href="#"' index.html)
if [ "$social_links" -gt 0 ]; then
    echo -e "   ${YELLOW}⚠${NC} $social_links enlace(s) apuntando a '#'"
    echo "   → Actualiza los enlaces de redes sociales en index.html"
    ((tasks_pending++))
else
    echo -e "   ${GREEN}✓${NC} Enlaces de redes sociales configurados"
    ((tasks_done++))
fi
echo ""

# 4. Verificar meta tags
echo "4️⃣  Meta tags y SEO"
has_og_image=$(grep -c 'og:image' index.html)
if [ "$has_og_image" -eq 0 ]; then
    echo -e "   ${YELLOW}⚠${NC} Falta meta tag og:image"
    echo "   → Agrega una imagen para compartir en redes sociales"
    ((tasks_pending++))
else
    echo -e "   ${GREEN}✓${NC} Meta tags configurados"
    ((tasks_done++))
fi
echo ""

# 5. Verificar archivos críticos
echo "5️⃣  Archivos críticos"
critical_files=("index.html" "css/style.css" "js/main.js" "vercel.json")
all_present=true
for file in "${critical_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "   ${RED}✗${NC} Falta: $file"
        all_present=false
    fi
done
if [ "$all_present" = true ]; then
    echo -e "   ${GREEN}✓${NC} Todos los archivos críticos presentes"
    ((tasks_done++))
else
    ((tasks_pending++))
fi
echo ""

# 6. Verificar sintaxis HTML
echo "6️⃣  Validación de sintaxis"
if command -v tidy &> /dev/null; then
    tidy -q -e index.html 2>&1 | head -5
    echo -e "   ${BLUE}ℹ${NC} Ejecuta 'tidy -e index.html' para ver detalles"
else
    echo -e "   ${BLUE}ℹ${NC} Instala 'tidy' para validar HTML"
fi
echo ""

# 7. Verificar tamaño de imágenes
echo "7️⃣  Optimización de imágenes"
large_images=0
if [ "$image_count" -gt 0 ]; then
    while IFS= read -r img; do
        size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        size_mb=$(echo "scale=2; $size / 1048576" | bc 2>/dev/null || echo "0")
        if (( $(echo "$size > 2097152" | bc -l 2>/dev/null || echo 0) )); then
            ((large_images++))
            echo -e "   ${YELLOW}⚠${NC} $(basename "$img"): ${size_mb}MB (>2MB)"
        fi
    done < <(find assets/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) 2>/dev/null)
    
    if [ "$large_images" -eq 0 ]; then
        echo -e "   ${GREEN}✓${NC} Todas las imágenes están optimizadas"
        ((tasks_done++))
    else
        echo "   → Optimiza imágenes grandes con TinyPNG o Squoosh"
        ((tasks_pending++))
    fi
else
    echo -e "   ${BLUE}ℹ${NC} No hay imágenes locales para verificar"
fi
echo ""

# Resumen final
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RESUMEN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}✓${NC} Tareas completadas: $tasks_done"
echo -e "${YELLOW}⚠${NC} Tareas pendientes: $tasks_pending"
echo ""

if [ "$tasks_pending" -eq 0 ]; then
    echo -e "${GREEN}🎉 ¡Proyecto listo para producción!${NC}"
    echo ""
    echo "Siguiente paso:"
    echo "  vercel --prod"
elif [ "$tasks_pending" -le 2 ]; then
    echo -e "${YELLOW}⚠ Proyecto casi listo${NC}"
    echo ""
    echo "Revisa las advertencias arriba antes de desplegar."
    echo "Puedes desplegar ahora si las advertencias no son críticas."
else
    echo -e "${RED}⚠ Hay tareas pendientes importantes${NC}"
    echo ""
    echo "Completa las tareas pendientes antes de desplegar a producción."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Comandos útiles:"
echo "   ./start-local.sh          → Previsualizar localmente"
echo "   ./verificar-proyecto.sh   → Verificar estado del proyecto"
echo "   vercel                    → Desplegar a preview"
echo "   vercel --prod             → Desplegar a producción"
echo ""

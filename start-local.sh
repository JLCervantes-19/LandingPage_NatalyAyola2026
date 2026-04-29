#!/bin/bash
# Script para iniciar servidor local
# Uso: ./start-local.sh

echo "🚀 Iniciando servidor local para Nataly Ayola Media Kit..."
echo "📂 Directorio: $(pwd)"
echo ""

# Verificar si Python 3 está instalado
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 encontrado"
    echo "🌐 Servidor corriendo en: http://localhost:8000"
    echo "⏹️  Presiona Ctrl+C para detener"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python encontrado"
    echo "🌐 Servidor corriendo en: http://localhost:8000"
    echo "⏹️  Presiona Ctrl+C para detener"
    echo ""
    python -m http.server 8000
else
    echo "❌ Python no está instalado"
    echo "Por favor instala Python desde https://www.python.org/"
    exit 1
fi

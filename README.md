# Spotify Music Downloader Guide

Una guía interactiva para descargar música de Spotify usando spotDL, alojada en GitHub Pages.

## Configuración del Repositorio

1. Crea un nuevo repositorio en GitHub
2. Habilita GitHub Pages:
   - Ve a Settings > Pages
   - En "Source", selecciona "GitHub Actions"

3. Clona este repositorio y sube el código:
```bash
git clone https://github.com/tu-usuario/SPOT.git
cd SPOT
git remote set-url origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

## Uso del Sitio

1. Una vez desplegado, visita `https://tu-usuario.github.io/TU-REPOSITORIO`
2. Pega cualquier URL de Spotify:
   - Canciones: `https://open.spotify.com/track/...`
   - Playlists: `https://open.spotify.com/playlist/...`
   - Álbumes: `https://open.spotify.com/album/...`
3. Sigue las instrucciones que aparecerán para usar spotDL

## Instalación Local de spotDL

Para usar spotDL necesitas:

1. Python 3.7 o superior
2. FFmpeg instalado en tu sistema

Instalar spotDL:
```bash
pip install spotdl
```

## Características

- ✨ Soporte para canciones, playlists y álbumes
- 📥 Descarga en MP3 con metadatos
- 🎵 Incluye carátulas de álbumes
- 🚫 No requiere credenciales de Spotify

## Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
cd TU-REPOSITORIO
```

2. Instala las dependencias:
```bash
pip install -r requirements.txt
```

3. Abre `index.html` en tu navegador

## Estructura del Proyecto

```
├── index.html          # Interfaz web principal
├── script.js           # Lógica de la interfaz
├── download.py         # Script de descarga (opcional para desarrollo)
├── requirements.txt    # Dependencias de Python
└── .github/workflows   # Configuración de GitHub Actions
    └── deploy.yml      # Workflow de despliegue
```

## Advertencia Legal

Este proyecto es una interfaz para spotDL y no almacena ni distribuye contenido protegido por derechos de autor. Los usuarios son responsables de cumplir con las leyes de derechos de autor en su jurisdicción.
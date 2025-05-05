# 🎵 Spotify Music Downloader con GitHub Actions

Un descargador de música de Spotify que utiliza GitHub Actions para procesar las descargas. Descarga canciones, álbumes y playlists completas manteniendo los metadatos y la calidad.

## 📋 Características

- ✨ Descarga canciones individuales, álbumes completos y playlists
- 🎨 Mantiene metadatos: títulos, artistas, carátulas
- 📦 Formato MP3 de alta calidad
- ⚡ Procesamiento en la nube usando GitHub Actions
- 🔒 Seguro: no requiere tus credenciales de Spotify
- 💾 Archivos disponibles por 24 horas
- 🌐 Interfaz web amigable

## 🚀 Configuración Paso a Paso

### 1. Preparación del Repositorio

1. Haz fork de este repositorio usando el botón "Fork" en GitHub
2. Renombra el repositorio si lo deseas en Settings > General > Repository name
3. Asegúrate que el repositorio sea público (necesario para GitHub Pages)

### 2. Configuración de GitHub Actions

1. Ve a la pestaña "Actions" de tu repositorio
2. Si ves un botón verde que dice "I understand my workflows, go ahead and enable them", haz clic en él
3. Ve a Settings > Actions > General
4. En "Workflow permissions":
   - Selecciona "Read and write permissions"
   - Marca "Allow GitHub Actions to create and approve pull requests"
   - Guarda los cambios

### 3. Configuración de GitHub Pages

1. Ve a Settings > Pages
2. En "Source", selecciona "GitHub Actions"
3. Espera unos minutos a que se despliegue tu sitio
4. La URL será: `https://TU-USUARIO.github.io/TU-REPO`

### 4. Crear Token de GitHub

1. Ve a [GitHub Token Settings](https://github.com/settings/tokens?type=beta)
2. Haz clic en "Generate new token"
3. Nombre sugerido: "Spotify Downloader"
4. Selecciona los siguientes permisos:
   - Repository Access: Selecciona "Only select repositories" y elige tu fork
   - Permissions:
     - Actions: Read and write
     - Contents: Read and write
     - Metadata: Read-only
5. Haz clic en "Generate token"
6. ⚠️ IMPORTANTE: Guarda el token generado en un lugar seguro

## 💻 Uso del Descargador

1. Visita tu sitio: `https://TU-USUARIO.github.io/TU-REPO`
2. Primera vez:
   - Haz clic en "Configurar Token de GitHub"
   - Pega el token que guardaste anteriormente
3. Para descargar:
   - Copia una URL de Spotify (ejemplo: https://open.spotify.com/track/...)
   - Pégala en el campo de texto
   - Haz clic en "Descargar"
   - Espera la notificación de que el proceso ha iniciado
   - Haz clic en el enlace para ver el progreso
   - Descarga el archivo ZIP cuando esté listo

## 🔧 Desarrollo Local

### Requisitos Previos

- Python 3.9 o superior
- Node.js 14 o superior
- Git

### Pasos de Instalación

1. Clona tu repositorio:
```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd TU-REPO
```

2. Instala las dependencias de Python:
```bash
pip install -r requirements.txt
```

3. Para probar localmente:
- Abre index.html en tu navegador
- O usa un servidor local como `python -m http.server 8000`

## 📊 Limitaciones y Cuotas

### GitHub Actions
- 2,000 minutos/mes para repos públicos
- Máximo 6 horas por workflow
- Hasta 500 MB de almacenamiento de artefactos
- Retención de artefactos: 90 días máximo

### Descargas
- Tamaño máximo por archivo: 100 MB
- Tamaño máximo por workflow: 500 MB
- Los archivos se eliminan después de 24 horas

## ❗ Solución de Problemas

### Error: "Workflow failed"
- Verifica que el token tenga los permisos correctos
- Asegúrate de que la URL de Spotify sea válida
- Comprueba que no excedas los límites de GitHub Actions

### Error: "Token inválido"
- Genera un nuevo token
- Asegúrate de copiar el token completo
- Verifica los permisos del token

### Error: "URL no válida"
- Usa URLs directas de Spotify (https://open.spotify.com/...)
- No uses URLs acortadas
- Verifica que la canción/álbum esté disponible en tu región

## 📜 Aspectos Legales

Este proyecto:
- Es una interfaz para spotDL, una herramienta de código abierto
- No almacena ni distribuye contenido protegido
- Los usuarios son responsables del uso del contenido
- No está afiliado con Spotify
- Uso personal únicamente

## 🤝 Contribuciones

1. Haz fork del proyecto
2. Crea una rama para tu función: `git checkout -b nueva-funcion`
3. Commit tus cambios: `git commit -m 'Añade nueva función'`
4. Push a la rama: `git push origin nueva-funcion`
5. Abre un Pull Request

## 📱 Contacto y Soporte

- 🐛 Reporta bugs en la sección de Issues
- 💡 Sugiere mejoras en Discussions
- ⭐ Dale una estrella si te fue útil

## 🙏 Agradecimientos

- spotDL por su excelente herramienta
- FFmpeg por el procesamiento de audio
- GitHub por la infraestructura
- Todos los contribuidores
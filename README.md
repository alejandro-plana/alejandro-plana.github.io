# 🎵 Spotify Music Downloader

Descargador de música de Spotify que utiliza GitHub Actions para procesar las descargas.

## ⚡ Configuración Rápida

1. Haz fork de este repositorio
2. Activa GitHub Actions en tu repositorio:
   - Ve a la pestaña "Actions"
   - Haz clic en "I understand my workflows, go ahead and enable them"

3. Habilita GitHub Pages:
   - Ve a Settings > Pages
   - En "Source", selecciona "GitHub Actions"

4. Configura los permisos del workflow:
   - Ve a Settings > Actions > General
   - En "Workflow permissions", selecciona "Read and write permissions"

5. Crea un token de GitHub:
   - Ve a [GitHub Tokens](https://github.com/settings/tokens/new)
   - Dale un nombre descriptivo
   - Selecciona los siguientes permisos:
     - `workflow`
     - `read:packages`
   - Copia el token generado

## 🚀 Uso

1. Ve a la página del proyecto: `https://TU-USUARIO.github.io/TU-REPO`
2. La primera vez:
   - Haz clic en "Configurar Token de GitHub"
   - Pega el token que creaste anteriormente
3. Para descargar música:
   - Pega una URL de Spotify (canción, álbum o playlist)
   - Haz clic en "Descargar"
   - Espera a que el proceso termine
   - Descarga los archivos desde la pestaña Actions

## 📝 Notas Importantes

- Los archivos descargados estarán disponibles por 24 horas
- Las descargas se procesan en GitHub Actions
- Los archivos se guardan como artefactos del workflow
- Necesitas estar autenticado con un token de GitHub para iniciar descargas
- El proceso es completamente serverless

## 🛠️ Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd TU-REPO
```

2. Instala las dependencias de Python (opcional, solo para pruebas):
```bash
pip install -r requirements.txt
```

3. Abre `index.html` en tu navegador

## ⚠️ Limitaciones

- GitHub Actions tiene un límite de tiempo de ejecución de 6 horas por workflow
- Los artefactos tienen un límite de retención de 90 días
- El almacenamiento de artefactos está limitado por repositorio
- Se requiere un token de GitHub con permisos de workflow

## 📜 Advertencia Legal

Este proyecto es una interfaz para spotDL y no almacena ni distribuye contenido protegido por derechos de autor. Los usuarios son responsables de cumplir con las leyes de derechos de autor en su jurisdicción.
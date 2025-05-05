const REPO_PATH = 'alejandro-plana/alejandro-plana.github.io'; // Se debe reemplazar con el repositorio real
const WORKFLOW_NAME = 'Process Downloads and Deploy';
const TOKEN_STORAGE_KEY = 'spotify_dl_token';

async function startDownload() {
    const urlInput = document.getElementById('urlInput');
    const downloadBtn = document.getElementById('downloadBtn');
    const statusDiv = document.getElementById('status');
    
    const url = urlInput.value.trim();
    if (!url) {
        showError('Por favor ingresa una URL de Spotify válida');
        return;
    }

    // Validar que es una URL de Spotify válida
    if (!url.includes('spotify.com')) {
        showError('Por favor ingresa una URL válida de Spotify');
        return;
    }

    downloadBtn.disabled = true;
    statusDiv.innerHTML = `
        <div class="download-status">
            <p>⏳ Iniciando proceso de descarga...</p>
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;

    try {
        const token = localStorage.getItem(TOKEN_STORAGE_KEY);
        if (!token) {
            throw new Error('Se requiere autenticación. Por favor configura tu token de GitHub.');
        }

        // Iniciar el workflow de GitHub Actions
        const response = await fetch(`https://api.github.com/repos/${REPO_PATH}/actions/workflows/${WORKFLOW_NAME}/dispatches`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ref: 'main',
                inputs: {
                    spotify_url: url
                }
            })
        });

        if (!response.ok) {
            throw new Error('Error al iniciar la descarga');
        }

        // Mostrar mensaje de éxito y link para descargar
        statusDiv.innerHTML = `
            <div class="success">
                ✅ Proceso iniciado correctamente
                <p>La descarga se está procesando. Los archivos estarán disponibles en la pestaña "Actions" del repositorio.</p>
                <p>Puedes ver el progreso y descargar los archivos aquí:</p>
                <a href="https://github.com/${REPO_PATH}/actions" target="_blank" class="action-link">
                    Ver progreso y descargar archivos
                </a>
            </div>
        `;
    } catch (error) {
        showError(error.message);
    } finally {
        downloadBtn.disabled = false;
    }
}

function showError(message) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `<p class="error">❌ Error: ${message}</p>`;
}

function setupGithubToken() {
    const token = prompt('Ingresa tu token de GitHub con permisos de workflow:');
    if (token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        alert('Token guardado correctamente');
    }
}

window.onload = () => {
    if (!localStorage.getItem(TOKEN_STORAGE_KEY)) {
        const setupBtn = document.createElement('button');
        setupBtn.textContent = 'Configurar Token de GitHub';
        setupBtn.onclick = setupGithubToken;
        setupBtn.className = 'setup-button';
        document.querySelector('.container').insertBefore(setupBtn, document.querySelector('#status'));
    }
};
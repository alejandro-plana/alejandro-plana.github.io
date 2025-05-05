const API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://TU-APP.herokuapp.com'
    : 'http://localhost:5000';

const GITHUB_REPO = 'TU-USUARIO/TU-REPO'; // Se debe reemplazar con el repositorio real
const WORKFLOW_ID = 'Process Downloads and Deploy';

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
        const token = localStorage.getItem('github_token');
        if (!token) {
            throw new Error('Se requiere autenticación. Por favor configura tu token de GitHub.');
        }

        // Iniciar el workflow de GitHub Actions
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/${WORKFLOW_ID}/dispatches`, {
            method: 'POST',
            headers: {
                'Authorization': `token ${token}`,
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
                <a href="https://github.com/${GITHUB_REPO}/actions" target="_blank" class="action-link">
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

function showInstructions() {
    const urlInput = document.getElementById('urlInput');
    const statusDiv = document.getElementById('status');
    
    const url = urlInput.value.trim();
    if (!url) {
        showError('Please enter a valid Spotify URL');
        return;
    }

    // Show installation and usage instructions
    statusDiv.innerHTML = `
        <div class="instructions">
            <h3>How to download this song/playlist:</h3>
            <ol>
                <li>Make sure you have Python installed on your computer</li>
                <li>Open a terminal or command prompt</li>
                <li>Install spotDL by running: <code>pip install spotdl</code></li>
                <li>Run the following command to download your music:
                    <pre><code>spotdl ${url}</code></pre>
                </li>
                <li>The music will be downloaded in MP3 format with all metadata</li>
            </ol>
            <div class="note">
                <p><strong>Note:</strong> Since this is a static website hosted on GitHub Pages, 
                we cannot perform the downloads directly in the browser. You'll need to use the 
                spotDL command-line tool as shown above.</p>
            </div>
        </div>
    `;
}

function showError(message) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `<p class="error">❌ Error: ${message}</p>`;
}

// Función para configurar el token de GitHub
function setupGithubToken() {
    const token = prompt('Ingresa tu token de GitHub con permisos de workflow:');
    if (token) {
        localStorage.setItem('github_token', token);
        alert('Token guardado correctamente');
    }
}

// Verificar token al cargar
window.onload = () => {
    if (!localStorage.getItem('github_token')) {
        const setupBtn = document.createElement('button');
        setupBtn.textContent = 'Configurar Token de GitHub';
        setupBtn.onclick = setupGithubToken;
        setupBtn.className = 'setup-button';
        document.querySelector('.container').insertBefore(setupBtn, document.querySelector('#status'));
    }
};
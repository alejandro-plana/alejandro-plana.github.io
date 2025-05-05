const API_URL = 'http://localhost:5000';

async function startDownload() {
    const urlInput = document.getElementById('urlInput');
    const downloadBtn = document.getElementById('downloadBtn');
    const statusDiv = document.getElementById('status');
    
    const url = urlInput.value.trim();
    if (!url) {
        showError('Please enter a valid Spotify URL');
        return;
    }

    // Disable button and show loading state
    downloadBtn.disabled = true;
    statusDiv.innerHTML = '<p>Starting download...</p>';

    try {
        const response = await fetch(`${API_URL}/download`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();

        if (data.error) {
            showError(data.error);
            return;
        }

        // Display download results
        let html = '<h3>Download Results:</h3>';
        data.downloads.forEach(item => {
            html += `
                <div class="download-item">
                    ${item.status === 'success' 
                        ? `✅ Downloaded: ${item.title} by ${item.artist}`
                        : `❌ Failed: ${item.title} - ${item.error}`}
                </div>`;
        });
        statusDiv.innerHTML = html;

    } catch (error) {
        showError('Failed to connect to the server. Make sure the Python script is running.');
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
    statusDiv.innerHTML = `<p class="error">Error: ${message}</p>`;
}
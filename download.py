import os
from spotdl import Spotdl
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure spotDL without credentials (they're not required)
spotdl = Spotdl(
    output_format="mp3",
    download_path="dist"
)

@app.route('/download', methods=['POST'])
def download_music():
    try:
        data = request.get_json()
        url = data.get('url')
        
        if not url:
            return jsonify({'error': 'No URL provided'}), 400

        # Search and download the song/playlist
        songs = spotdl.search([url])
        download_info = []
        
        for song in songs:
            try:
                path = spotdl.download(song)
                download_info.append({
                    'title': song.name,
                    'artist': song.artists[0],
                    'status': 'success',
                    'path': path
                })
            except Exception as e:
                download_info.append({
                    'title': song.name,
                    'status': 'failed',
                    'error': str(e)
                })
        
        return jsonify({
            'status': 'success',
            'downloads': download_info
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    os.makedirs('dist', exist_ok=True)
    app.run(debug=True, port=5000)
from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Serve static files (HTML, CSS, JS, images) from the project root directory
@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return "File not found", 404

# Serve CSS files
@app.route('/css/<path:filename>')
def serve_css(filename):
    css_dir = os.path.join(app.static_folder, 'css')
    return send_from_directory(css_dir, filename)

# Serve JS files
@app.route('/js/<path:filename>')
def serve_js(filename):
    js_dir = os.path.join(app.static_folder, 'js')
    return send_from_directory(js_dir, filename)

# Serve images
@app.route('/images/<path:filename>')
def serve_images(filename):
    images_dir = os.path.join(app.static_folder, 'images')
    return send_from_directory(images_dir, filename)

# Sample API endpoint
@app.route('/api/status')
def api_status():
    return jsonify({'status': 'Backend is running'})

if __name__ == '__main__':
    from waitress import serve
    serve(app, host='0.0.0.0', port=5000)

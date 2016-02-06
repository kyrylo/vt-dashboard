import '../css/app.css';

import VisualtracerApp from './visualtracer_app';

const visualtracer_app = new VisualtracerApp();
visualtracer_app.configure(function(config) {
  config.ws_server = 'ws://127.0.0.1:7332/ws';
});

visualtracer_app.start();

import { createServer } from 'node:http';
import { greet } from './app.js';

const PORT = Number(process.env.PORT ?? 3000);

createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  res.end(greet());
}).listen(PORT, '0.0.0.0', () => console.log(`Servidor em http://localhost:${PORT}`));

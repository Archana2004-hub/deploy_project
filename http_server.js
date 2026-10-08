const http = require("http");
const os = require("os");

// Heroku assigns PORT dynamically; locally it falls back to 3000.
// On DigitalOcean run with: PORT=3001 node http_server.js
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
<html><head><title>Deployed App</title></head>
<body style="font-family:sans-serif;text-align:center;margin-top:15vh">
  <h1>My application is running in the cloud!</h1>
  <p>Host: ${os.hostname()}</p>
  <p>Port: ${PORT}</p>
  <p>Time: ${new Date().toISOString()}</p>
</body></html>`);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

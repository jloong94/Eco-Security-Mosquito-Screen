const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.resolve(process.argv[2] || ".");
const port = Number(process.argv[3] || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

http
  .createServer((request, response) => {
    const cleanUrl = decodeURIComponent(request.url.split("?")[0]);
    const pathname = cleanUrl === "/" ? "/index.html" : cleanUrl;
    const file = path.resolve(root, `.${pathname}`);

    if (!file.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(file, (error, data) => {
      if (error) {
        fs.readFile(path.join(root, "404.html"), (fallbackError, fallback) => {
          response.writeHead(404, { "Content-Type": types[".html"] });
          response.end(fallbackError ? "Not found" : fallback);
        });
        return;
      }

      response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
      response.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Preview: http://127.0.0.1:${port}`);
  });

const http = require("http");
const url = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => {
    try {
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;
      const subdomain = req.headers.host.split(".")[0];

      if (subdomain === "subdomain1" && pathname === "/") {
        app.render(req, res, "/subdomain1", parsedUrl.query);
      } else if (subdomain === "subdomain2" && pathname === "/") {
        app.render(req, res, "/subdomain2", parsedUrl.query);
      } else {
        handle(req, res, parsedUrl);
      }
    } catch (error) {
      console.error("Error:", error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(3000, (err) => {
    if (err) {
      console.error("Server startup error:", err);
    } else {
      console.log("> Ready on http://localhost:3000");
    }
  });
});

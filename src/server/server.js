const express = require("express");
const next = require("next");
const customRoutes = require("./customRoutes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const { createProxyMiddleware } = require("http-proxy-middleware");

app.prepare().then(() => {
  const server = express();
  server.use(
    "/images",
    createProxyMiddleware({
      target: "https://storage.googleapis.com/perfect-days",
      changeOrigin: true,
      pathRewrite: {
        "^/images": "/", // rewrite path
      },
    })
  );
  server.use(express.json());
  customRoutes(server);
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

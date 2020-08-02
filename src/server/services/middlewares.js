const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = createProxyMiddleware({
  target: "https://storage.googleapis.com/perfect-days",
  changeOrigin: true,
  pathRewrite: {
    "^/images": "/", // rewrite path
  },
});

module.exports = { proxy };

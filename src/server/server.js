const express = require("express");
const next = require("next");
const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const middlewares = require("./services/middlewares");

app.prepare().then(() => {
  const server = express();
  server
    .use("/images", middlewares.proxy)
    .use(routes)
    .use(express.json())
    .all("*", (req, res) => {
      return handle(req, res);
    });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

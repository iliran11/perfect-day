const { insertNewItem } = require("./database");

const www = (server) => {
  server.post("/day", async (req, res) => {
    await insertNewItem();
    const result = {
      hello: "world",
    };
    res.json(result);
  });
  server.get("/day", async (req, res) => {
    res.json({ hi: "1" });
  });
};

module.exports = www;

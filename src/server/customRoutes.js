const { insertNewItem } = require("./database");
const { v4: uuidv4 } = require("uuid");

const www = (server) => {
  server.post("/day", async (req, res) => {
    const id = uuidv4();
    await insertNewItem({
      id,
      day: req.body.day,
    });
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

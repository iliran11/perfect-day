const database = require("./database");
const { response } = require("express");

const www = (server) => {
  server.post("/day", async (req, res) => {
    const collection = await database.getDaysCollection();
    const result = collection.insert({
      hello: "world",
    });
    console.log(result);
    res.json(result);
  });
  server.get("/day", async (req, res) => {
    res.json({ hi: "1" });
  });
};

module.exports = www;

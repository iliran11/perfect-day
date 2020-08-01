const database = require("./database");

const www = (server) => {
  server.post("/day", async (req, res) => {
    await database.insertNewItem(req.body.day);
    const result = {
      hello: "world",
    };
    res.json(result);
  });
  server.get("/api/day/:dayId", async (req, res) => {
    const result = await database.getSingleDaybyId(req.params.dayId);
    res.json(result);
  });
};

module.exports = www;

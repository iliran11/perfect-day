const database = require("./services/database");
const images = require("./services/images");
const baseUrl = `http://localhost:3000`;

const www = (server) => {
  server.post("/day", async (req, res) => {
    const result = await database.insertNewItem(req.body.day);
    const id = result.insertedId.toString();
    await images.perfectDayToImage(`${baseUrl}/day/${id}`, id);
    res.json(result);
  });
  server.get("/api/day/:dayId", async (req, res) => {
    try {
      const result = await database.getSingleDaybyId(req.params.dayId);
      res.json(result);
    } catch (e) {
      console.log(e);
      res.send(404);
    }
  });
  server.get("/api/days", async (req, res, next) => {
    try {
      const result = await database.getDaysList();
      res.json(result);
    } catch (e) {
      next(e);
    }
  });
};

module.exports = www;

const database = require("./services/database");
const images = require("./services/images");
const storage = require("./services/storage/storage");
const baseUrl = `http://localhost:3000`;
const router = require("express").Router();

router.post("/day", async (req, res) => {
  const result = await database.insertNewItem(req.body.day);
  const id = result.insertedId.toString();
  const imageBase64 = await images.perfectDayToImage(
    `${baseUrl}/day/${id}`,
    id
  );
  storage.uploadFile(`perfect-day-${id}.png`, imageBase64);
  res.json(result);
});
router.get("/api/day/:dayId", async (req, res) => {
  try {
    const result = await database.getSingleDaybyId(req.params.dayId);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.send(404);
  }
});
router.get("/api/days", async (req, res, next) => {
  try {
    const result = await database.getDaysList();
    res.json(result);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

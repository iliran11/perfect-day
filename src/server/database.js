const config = require("../../next.config");
const { ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(config.db.mongoUri, { useNewUrlParser: true });

const connect = () =>
  new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) reject(err);
      console.log("client success");
      resolve(client);
    });
  });

const insertNewItem = async (day) => {
  const client = await connect();
  const collection = client.db("perfect-days").collection("days");
  const result = await collection.insertOne(day);
  client.close();
  return result;
};

const getSingleDaybyId = async (dayId) => {
  const client = await connect();
  const collection = client.db("perfect-days").collection("days");
  const result = await (
    await collection.find({ _id: ObjectId(dayId) })
  ).toArray();
  return result[0];
};

const getDaysList = async () => {
  const client = await connect();
  const collection = client.db("perfect-days").collection("days");
  const result = await (await collection.find({})).toArray();
  return result;
};
module.exports = { insertNewItem, getSingleDaybyId, getDaysList };

const mongoose = require("mongoose");
const config = require("../../next.config");
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
  return result;
};
module.exports = { insertNewItem };

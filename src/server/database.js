const mongoose = require("mongoose");
const config = require("../../config.next");
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

const insertNewItem = async () => {
  const client = await connect();
  const collection = client.db("perfect-days").collection("days");
  return collection.insertOne({
    hello: "liran",
  });
};
module.exports = { insertNewItem };

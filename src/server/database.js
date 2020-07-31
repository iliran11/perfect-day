const mongoose = require("mongoose");
const pass = "nOY7oWySkKToOghR";
const mongourl = `mongodb+srv://admin:${pass}@perfect-day.fsgfs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const mongoOptions = {
  useNewUrlParser: true, // avoid deprecation warning
  useCreateIndex: true, // avoid deprecation warning
  useFindAndModify: false, // avoid deprecation warning
  connectTimeoutMS: 10000, // when to give up initial connection. defaults to 30000
  keepAlive: true, // default is true
  autoReconnect: true, // should mongodb driver will try to reconnect automatically
  reconnectTries: 100,
};

console.log("database", mongourl);
mongoose.connect(`${mongourl}/perfect-days`, mongoOptions);

mongoose.connection.on("connecting", () => {
  logger.info("MongoDB connecting...");
});

const close = () => {
  return mongoose.connection.close();
  // return mongoose.connections[0].close();
};

const getDaysCollection = async () => {
  return mongoose.connection.collection("days");
  // return mongoose.connection.db("perfect-days");
};

module.exports = {
  getDaysCollection,
};

module.exports = {
  db: {
    mongoUri:
      process.env.MONGO_URI ||
      "mongodb+srv://admin:93MVscFXrfr@perfect-day.fsgfs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority",
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    serverUrl: process.env.SERVER_URL || "http://localhost:3000",
  },
};

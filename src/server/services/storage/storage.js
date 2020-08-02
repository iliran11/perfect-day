//https://github.com/googleapis/nodejs-storage/issues/954

const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

async function uploadFile(filename, base64) {
  storage.bucket("perfect-days").file(filename).save(Buffer.from(base64));
}
// https://cloud.google.com/appengine/docs/standard/nodejs/serving-static-files
// https://storage.googleapis.com/perfect-days/perfect-day-5f26498f7c6f6326d6f4414e.png

async function readFile() {}

module.exports = { uploadFile };

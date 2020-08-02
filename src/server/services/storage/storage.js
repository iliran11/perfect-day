//https://github.com/googleapis/nodejs-storage/issues/954

const { Storage } = require("@google-cloud/storage");

const storage = new Storage();

async function uploadFile(filename, base64) {
  storage.bucket("perfect-days").file(filename).save(Buffer.from(base64));
}

module.exports = { uploadFile };
const puppeteer = require("puppeteer");

const perfectDayToImage = async (url, filename) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const perfectDayElement = await page.$("#perfect-day");
  return perfectDayElement.screenshot();
};

module.exports = {
  perfectDayToImage,
};

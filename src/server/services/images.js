const puppeteer = require("puppeteer");

const perfectDayToImage = async (url, filename) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const perfectDayElement = await page.$("#perfect-day");
  console.log(perfectDayElement);
  await perfectDayElement.screenshot({ path: `${filename}.png` });
  return;
};

module.exports = {
  perfectDayToImage,
};

import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";

const args = process.argv.slice(2);
function getArg(name, def) {
  const idx = args.indexOf(`--${name}`);
  if (idx !== -1 && idx + 1 < args.length) return args[idx + 1];
  return def;
}

const url = getArg("url", "http://localhost:3000");
const out = getArg("out", "screenshots/home-375x812.png");
const width = parseInt(getArg("width", "375"), 10);
const height = parseInt(getArg("height", "812"), 10);

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
    await fs.mkdir(path.dirname(out), { recursive: true });
    await page.screenshot({ path: out });
    console.log(`Saved screenshot to ${out}`);
  } finally {
    await browser.close();
  }
})();

import { chromium } from "playwright-core";

const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" });
const routes = [["home", "/"], ["job-tracker", "/work/job-tracker"], ["examgenie", "/work/examgenie"], ["course-system", "/work/course-management-system"]];
const sizes = [["desktop", 1440, 1000], ["mobile", 390, 844]];
const report = [];

for (const [size, width, height] of sizes) {
  const context = await browser.newContext({ viewport: { width, height }, colorScheme: "dark", reducedMotion: "no-preference" });
  for (const [name, route] of routes) {
    const page = await context.newPage();
    const errors = [];
    page.on("console", message => { if (message.type() === "error") errors.push(`console: ${message.text()}`); });
    page.on("pageerror", error => errors.push(`page: ${error.message}`));
    const response = await page.goto(`http://127.0.0.1:3007${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(500, innerHeight * .75)) {
        window.scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    await page.screenshot({ path: `C:\\tmp\\qa-${name}-${size}.png`, fullPage: true });
    const audit = await page.evaluate(() => ({
      title: document.title,
      statusText: document.body.innerText.length,
      horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      h1Count: document.querySelectorAll("h1").length,
      unlabeledButtons: [...document.querySelectorAll("button")].filter(el => !el.textContent?.trim() && !el.getAttribute("aria-label")).length,
      imagesWithoutAlt: [...document.images].filter(el => !el.hasAttribute("alt")).length,
      linksWithoutName: [...document.querySelectorAll("a")].filter(el => !(el.textContent?.trim() || el.getAttribute("aria-label"))).length,
    }));
    report.push({ route, size, status: response?.status(), errors, ...audit });
    await page.close();
  }
  await context.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 2));

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.cnn.com/');
  await page.locator('#pageHeader').getByRole('link', { name: 'US', exact: true }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();
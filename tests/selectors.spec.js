import { test, expect } from '@playwright/test';

test('selectors demo', async ({page})=>{
await page.goto('https://www.saucedemo.com')

await page.click('id=user-name')
await page.locator('id=user-name').fill('Edison')

//using x-path
await page.locator('xpath=//input[@name="password"]').fill('Faraday')
await page.locator('xpath=//input[@name="password"]').fill('Raday')
//using css selector
await page.pause()
await page.locator('#login-button').click()

//using text
await page.locator('text=LOGIN').click()

//for dynamic text
await page.locator('input:has-text("LOGIN")').click();

});

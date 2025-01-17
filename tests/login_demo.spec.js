import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async({page})=>{
await page.goto('https://demo.applitools.com/')

await page.pause()
await page.getByPlaceholder('Enter your username').fill('rinad')
await page.getByPlaceholder('Enter your password').fill('12345')
//await page.waitForSelector('link', { name: 'Sign in' },{timeout:5000})
await page.getByRole('link', { name: 'Sign in' }).click()
await page.getByPlaceholder('')

})

test.only('Demo Login Test 2', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
    

  await page.getByPlaceholder('Username').click()
  await page.getByPlaceholder('Username').fill('Admin')
  await page.getByPlaceholder('Password').click()
  await page.getByPlaceholder('Password').fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.locator('xpath=//li[@class="oxd-userdropdown"]').click()
 await page.pause()
  await page.getByRole('menuitem', { name: 'Logout' }).click();
})

test('demo login test 3', async({page})=>{
    await page.pause()
    
      await page.goto('https://admin-demo.nopcommerce.com/login');
      await page.getByRole('button', { name: 'Log in' }).click();
      await page.getByRole('link', { name: 'Logout' }).click();

    })
    

   
  
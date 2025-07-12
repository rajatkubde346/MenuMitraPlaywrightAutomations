// const { test, expect } = require('@playwright/test');

// test('POS App', async ({ page }) => {
//   await page.goto('http://192.168.1.47:3000/#/login');
//   await page.getByPlaceholder('Enter your mobile number').fill('8787987898');

//   await page.locator('//button[normalize-space()="Send OTP"]').click();

//   // Wait for OTP input fields to be visible
//   await page.waitForSelector('input[type="text"]');
//   const otp = "1234";
//   const otpInputs = await page.$$('input[type="text"]');
//   for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
//     await otpInputs[i].fill(otp[i]);
//     await page.waitForTimeout(1000);
//   }

//   await page.locator('//button[normalize-space()="Verify OTP"]').click();

//   await page.locator('//button[normalize-space()="Tables"]').click();

//   await page.waitForTimeout(1000);
//   await page.locator('//button[normalize-space()="Tables"]').click();

//   await page.locator('//h1[contains(@class,"text-sm font-bold")]').click();

  

//   await page.waitForTimeout(1000);

// //   await page.locator('//h3[normalize-space()="Menu"]').click();

// //   await page.locator('//button[@class="w-8 h-8 rounded-full flex items-center justify-center bg-green-600 text-white hover:bg-green-700"]').click();

// //   await page.locator('//input[@placeholder="Enter menu name"]').fill('Test Menu');

// //   await page.locator('//input[@placeholder="Enter menu description"]').fill('Test Description');

// //   await page.locator('//button[normalize-space()="Create"]').click();

 
//   await page.waitForTimeout(1000);
  
  
  
// }); 
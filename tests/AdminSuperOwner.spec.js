// const { test, expect } = require("@playwright/test");
// const { allure } = require('allure-playwright');

// test.describe('Admin Super Owner Test Suite', () => {
//   test.beforeEach(async ({ page }, testInfo) => {
//     await allure.attachment('Environment', {
//       URL: 'https://mm-v2-admin.netlify.app/',
//       Browser: testInfo.project.name,
//       Viewport: '1366x768'
//     }, 'application/json');
//   });

//   test("Admin Super Owner Login @smoke", async ({ page }, testInfo) => {
//     await allure.description('Test to verify Admin Super Owner login functionality');
//     await allure.severity('blocker');
//     await allure.epic('Admin Portal');
//     await allure.feature('Super Owner Authentication');

//     await allure.step('Navigate to Admin Portal', async () => {
//       await page.goto("https://mm-v2-admin.netlify.app/");
//       const screenshot = await page.screenshot();
//       await testInfo.attach('initial-page', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Enter mobile number and request OTP', async () => {
//       await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
//       await page.getByRole("button", { name: "Get OTP" }).click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('after-otp-request', { body: screenshot, contentType: 'image/png' });
//     });
  
//     await allure.step('Enter OTP', async () => {
//       await page.waitForSelector('input[type="text"]');
//       const otp = "1234";
//       const otpInputs = await page.$$('input[type="text"]');
//       for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
//         await otpInputs[i].fill(otp[i]);
//         await page.waitForTimeout(100);
//       }
//       const screenshot = await page.screenshot();
//       await testInfo.attach('otp-filled', { body: screenshot, contentType: 'image/png' });
//     });
  
//     await allure.step('Verify OTP and complete login', async () => {
//       await page.locator("//button[normalize-space()='Verify OTP']").click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('after-verification', { body: screenshot, contentType: 'image/png' });

//       await page.locator('//span[contains(@class,"whitespace-nowrap")][normalize-space()="Super Owners"]').click();

//       await page.locator('//span[normalize-space()="Create"]',{state: 'visible'}).click();

//       await page.locator('//input[contains(@placeholder,"Enter name")]').fill("Rajat Kumar");
//       await page.locator('//input[@placeholder="Enter mobile number"]').fill("8908890891");
//       await page.locator('//input[@placeholder="Enter email address"]').fill("test@gmail.com");
//       await page.locator('//input[@placeholder="Enter Aadhar number"]').fill("123456789012");
//       await page.locator('//textarea[@placeholder="Enter address"]').fill("baner");

//       await page.locator('//span[normalize-space()="Create"]').click();

//     });
//   });
// });

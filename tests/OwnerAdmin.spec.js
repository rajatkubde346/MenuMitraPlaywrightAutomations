// const { test, expect } = require("@playwright/test");
// const { allure } = require('allure-playwright');

// test.describe('Owner Admin Test Suite', () => {
//   test.beforeEach(async ({ page }, testInfo) => {
//     await page.setViewportSize({ width: 1366, height: 768 });
//     await allure.attachment('Environment', {
//       URL: 'https://mm-v2-admin.netlify.app/',
//       Browser: testInfo.project.name,
//       Viewport: '1366x768'
//     }, 'application/json');
//   });

//   test("Owner Dashboard Management @regression", async ({ page }, testInfo) => {
//     await allure.description('Test to verify Owner Dashboard management functionality');
//     await allure.severity('critical');
//     await allure.epic('Admin Portal');
//     await allure.feature('Owner Management');
    
//     await allure.step('Login to Admin Portal', async () => {
//       await page.goto("https://mm-v2-admin.netlify.app/");
//       await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
//       await page.getByRole("button", { name: "Get OTP" }).click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('login-page', { body: screenshot, contentType: 'image/png' });
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
  
//     await allure.step('Access Owner Dashboard', async () => {
//       await page.locator("//button[normalize-space()='Verify OTP']").click();
//       await page.waitForURL(/dashboard/);
//       await page.locator('//span[contains(@class,"whitespace-nowrap")][normalize-space()="Owners"]').click();
//       await page.waitForURL(/owners/);
//       const screenshot = await page.screenshot();
//       await testInfo.attach('owners-section', { body: screenshot, contentType: 'image/png' });
//     });
  
//     await allure.step('Add New Owner', async () => {
//       await page.locator('//div[contains(@class,"flex items-center justify-end order-3")]').click();
//       await page.waitForSelector('//input[@placeholder="Enter full name"]');

//       const ownerDetails = {
//         name: "rajat kumar",
//         mobile: "8908890891",
//         email: "test@gmail.com",
//         dob: "2025-07-07",
//         aadhar: "123456789012",
//         address: "baner,pune"
//       };

//       await allure.attachment('Owner Details', ownerDetails, 'application/json');
  
//       await page.locator('//input[@placeholder="Enter full name"]').fill(ownerDetails.name);
//       await page.locator('//input[@placeholder="Enter mobile number"]').fill(ownerDetails.mobile);
//       await page.locator('//input[@placeholder="Enter email address"]').fill(ownerDetails.email);
//       await page.locator('//input[@placeholder="Select date of birth"]').fill(ownerDetails.dob);
//       await page.locator('//input[@placeholder="Enter 12-digit Aadhar number"]').fill(ownerDetails.aadhar);
//       await page.locator('//textarea[@placeholder="Enter complete address"]').fill(ownerDetails.address);
      
//       const screenshot = await page.screenshot();
//       await testInfo.attach('owner-form-filled', { body: screenshot, contentType: 'image/png' });
//     });
  
//     await allure.step('Submit Owner Creation', async () => {
//       const createButton = page.locator('//span[normalize-space()="Create"]');
//       await createButton.waitFor({ state: 'visible' });
//       const screenshot = await page.screenshot();
//       await testInfo.attach('owner-creation', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Edit Owner', async () => {
//       await page.locator('(//button[@title="Edit Owner"])[17]').click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('owner-edit', { body: screenshot, contentType: 'image/png' });
//     });
//   });
// });
  
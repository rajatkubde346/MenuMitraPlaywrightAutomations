// const { test, expect } = require("@playwright/test");
// const { allure } = require('allure-playwright');

// test.describe('Admin Dashboard Test Suite', () => {
//   test.beforeEach(async ({ page }, testInfo) => {
//     await allure.attachment('Environment', {
//       URL: 'https://mm-v2-admin.netlify.app/',
//       Browser: testInfo.project.name,
//       Viewport: '1366x768'
//     }, 'application/json');
//   });

//   test("Admin Dashboard Creation @smoke", async ({ page }, testInfo) => {
//     await allure.description('Test to verify admin creation functionality');
//     await allure.severity('critical');
//     await allure.epic('Admin Portal');
//     await allure.feature('Admin Management');

//     await allure.step('Navigate to Create Admin Page', async () => {
//       await page.goto("https://mm-v2-admin.netlify.app/create-admin");
//       const screenshot = await page.screenshot();
//       await testInfo.attach('create-admin-page', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Enter Mobile Number and Request OTP', async () => {
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
  
//     await allure.step('Access Admins Section', async () => {
//       await page.locator("//button[normalize-space()='Verify OTP']").click();
//       await page.locator('//span[contains(@class,"whitespace-nowrap")][normalize-space()="Admins"]').click();
//       await page.waitForURL(/admins/);
//       const screenshot = await page.screenshot();
//       await testInfo.attach('admins-section', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Create New Admin', async () => {
//       await page.locator('//div[contains(@class,"flex items-center justify-end order-3")]').click();
//       await page.waitForSelector('//input[contains(@placeholder,"Enter admin name")]');

//       const adminDetails = {
//         name: "rajat kumar",
//         mobile: "8908890891",
//         email: "test@gmail.com",
//         password: "123456"
//       };

//       await allure.attachment('Admin Details', adminDetails, 'application/json');

//       await page.locator('//input[contains(@placeholder,"Enter admin name")]').fill(adminDetails.name);
//       await page.locator('//input[contains(@placeholder,"Enter mobile number")]').fill(adminDetails.mobile);
//       await page.locator('//input[contains(@placeholder,"Enter email address")]').fill(adminDetails.email);
//       await page.locator('//input[contains(@placeholder,"Enter password")]').fill(adminDetails.password);
      
//       const screenshot = await page.screenshot();
//       await testInfo.attach('admin-form-filled', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Submit Admin Creation', async () => {
//       await page.locator('//span[normalize-space()="Create"]').click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('admin-created', { body: screenshot, contentType: 'image/png' });
//     });
//   });
// });
// const { test, expect } = require("@playwright/test");
// const { allure } = require('allure-playwright');

// test.describe('Admin Outlet Test Suite', () => {
//   test.beforeEach(async ({ page }, testInfo) => {
//     await allure.attachment('Environment', {
//       URL: 'https://mm-v2-admin.netlify.app/',
//       Browser: testInfo.project.name,
//       Viewport: '1366x768'
//     }, 'application/json');
//   });

//   test("Admin Outlet Creation @regression", async ({ page }, testInfo) => {
//     await allure.description('Test to verify outlet creation functionality');
//     await allure.severity('critical');
//     await allure.epic('Admin Portal');
//     await allure.feature('Outlet Management');

//     await allure.step('Navigate to Outlets Page', async () => {
//       await page.goto("https://mm-v2-admin.netlify.app/outlets");
//       const screenshot = await page.screenshot();
//       await testInfo.attach('outlets-page', { body: screenshot, contentType: 'image/png' });
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
  
//     await allure.step('Access Outlets Section', async () => {
//       await page.locator("//button[normalize-space()='Verify OTP']").click();
//       await page.locator("//span[normalize-space()='Outlets']").click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('outlets-section', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Create New Outlet', async () => {
//       await page.locator("//span[normalize-space()='Create']").click();
      
//       const outletDetails = {
//         name: "TEST OUTLET",
//         mobile: "8282828282",
//         email: "test@gmail.com",
//         upi: "8237438741@upi",
//         outlet_type: "Hotel",
//         veg_nonveg: "Veg",
//         outlet_mode: "Online",
//         address: "Pune"
//       };

//       await allure.attachment('Outlet Details', outletDetails, 'application/json');
      
//       await page.locator("//input[contains(@name,'name')]").fill(outletDetails.name);
      
//       await page.locator("//div[@role='combobox']").click();
//       await page.locator('//input[@placeholder="Search by name, mobile or email..."]').fill("rajat");
//       await page.locator('//input[@type="checkbox"]').click();
//       await page.waitForSelector('//input[@type="checkbox"]');
//       await page.waitForTimeout(2000);
      
//       await page.locator("//input[@name='mobile']").fill(outletDetails.mobile);
//       await page.locator("//input[@placeholder='Enter Email Address']").fill(outletDetails.email);
//       await page.locator("//input[@placeholder='username@bankname']").fill(outletDetails.upi);
//       await page.selectOption("//select[@name='outlet_type']", outletDetails.outlet_type);
//       await page.selectOption("//select[@name='veg_nonveg']", outletDetails.veg_nonveg);
//       await page.selectOption("//select[@name='outlet_mode']", outletDetails.outlet_mode);
//       await page.locator("//input[@placeholder='Enter Address']").fill(outletDetails.address);
      
//       const screenshot = await page.screenshot();
//       await testInfo.attach('outlet-form-filled', { body: screenshot, contentType: 'image/png' });
//     });

//     await allure.step('Submit Outlet Creation', async () => {
//       await page.locator("//span[normalize-space()='Create']").click();
//       const screenshot = await page.screenshot();
//       await testInfo.attach('outlet-created', { body: screenshot, contentType: 'image/png' });
//     });
//   });
// });

// test.describe('Admin Roles Test Suite', () => {
//   test.beforeEach(async ({ page }, testInfo) => {
//     await allure.attachment('Environment', {
//       URL: 'https://mm-v2-admin.netlify.app/',
//       Browser: testInfo.project.name,
//       Viewport: '1366x768'
//     }, 'application/json');
//   });

//   test("Admin Roles Access @smoke", async ({ page }, testInfo) => {
//     await allure.description('Test to verify admin roles access functionality');
//     await allure.severity('critical');
//     await allure.epic('Admin Portal');
//     await allure.feature('Role Management');

//     await allure.step('Navigate to Admin Portal', async () => {
//       await page.goto("https://mm-v2-admin.netlify.app/");
//       const screenshot = await page.screenshot();
//       await testInfo.attach('initial-page', { body: screenshot, contentType: 'image/png' });
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
  
//     await allure.step('Access Roles Section', async () => {
//       await page.locator("//button[normalize-space()='Verify OTP']").click();
//       await page.locator("//span[normalize-space()='Roles']").click();
//       await page.locator("//span[normalize-space()='Create']").click();

//       await page.locator("//input[@id='roleName']").fill("Test Role");

//       await page.locator("//button[contains(text(),'Create')]").click();

//       const screenshot = await page.screenshot();
//       await testInfo.attach('roles-section', { body: screenshot, contentType: 'image/png' });
//     });
//   });
// });
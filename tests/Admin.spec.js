// // const { test, expect } = require("@playwright/test");
// // const { allure } = require("allure-playwright");

// test("Admin login", async function ({ page }) {
//     // Add test description and severity
//     allure.description("Test to verify admin login and create new admin functionality");
//     allure.severity("critical");
    
//     // Add test steps with Allure
//     await allure.step("Navigate to admin creation page", async () => {
//         await page.goto("https://mm-v2-admin.netlify.app/create-admin");
//     });

//     await allure.step("Enter mobile number", async () => {
//         await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
//     });

//     await allure.step("Click Get OTP button", async () => {
//         await page.getByRole("button", { name: "Get OTP" }).click();
//     });

//     await allure.step("Enter OTP", async () => {
//         await page.waitForSelector('input[type="text"]');
//         const otp = "1234";
//         const otpInputs = await page.$$('input[type="text"]');
//         for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
//             await otpInputs[i].fill(otp[i]);
//             await page.waitForTimeout(100);
//         }
//     });

//     await allure.step("Verify OTP", async () => {
//         await page.locator("//button[normalize-space()='Verify OTP']").click();
//         // Add screenshot after OTP verification
//         const screenshot = await page.screenshot();
//         await allure.attachment("After OTP verification", screenshot, {
//             contentType: "image/png"
//         });
//     });

//     await allure.step("Navigate to Admins section", async () => {
//         await page.locator("//span[normalize-space()='Admins']").click();
//     });

//     await allure.step("Click Create button", async () => {
//         await page.locator("//span[normalize-space()='Create']").click();
//     });

//     await allure.step("Fill admin details", async () => {
//         await page.locator("//input[contains(@placeholder,'Enter admin name')]").fill("Test Admin");
//         await page.locator("//input[@placeholder='Enter mobile number']").fill("9000000000");
//         await page.locator("//input[@placeholder='Enter email address']").fill("testadmin@gmail.com");
//         await page.locator("//input[@placeholder='Enter password']").fill("1234");
        
//         // Add screenshot of filled form
//         const screenshot = await page.screenshot();
//         await allure.attachment("Admin form filled", screenshot, {
//             contentType: "image/png"
//         });
//     });

//     await allure.step("Submit admin creation form", async () => {
//         await page.locator("//span[normalize-space()='Create']").click();
//     });
// });
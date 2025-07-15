// const { test, expect } = require("@playwright/test");

// test("Fuctionalities", async function ({ page }) {
//     await page.goto("https://mm-v2-admin.netlify.app/");
//     await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
//     await page.getByRole("button", { name: "Get OTP" }).click();

//     //Wait for OTP input fields and fill OTP
//     await page.waitForSelector('input[type="text"]');
//     const otp = "1234";
//     const otpInputs = await page.$$('input[type="text"]');
//     for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
//       await otpInputs[i].fill(otp[i]);
//       await page.waitForTimeout(100);
//     }
  
//     // Verify OTP and wait for navigation
//     await page.locator("//button[normalize-space()='Verify OTP']").click();
    

//     await page.locator("//span[contains(@class,'whitespace-nowrap')][normalize-space()='Functionalities']").click();

//     await page.locator("//span[normalize-space()='Create']").click();

//     await page.locator("//input[contains(@placeholder,'e.g., manage_orders')]").fill("Test Functionality");
// });
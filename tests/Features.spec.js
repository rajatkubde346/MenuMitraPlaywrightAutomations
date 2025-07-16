const { test, expect } = require("@playwright/test");
const { allure } = require('allure-playwright');

test.describe('Features Test Suite', () => {
    test('Features @smoke @regression', async ({ page }, testInfo) => {
        allure.description("Test to verify admin login and create new Features");
        allure.severity("critical");
        
        // Add test steps with Allure
        await allure.step("Navigate to admin creation page", async () => {
            await page.goto("https://mm-v2-admin.netlify.app/features");
        });
    
        await allure.step("Enter mobile number", async () => {
            await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
        });
    
        await allure.step("Click Get OTP button", async () => {
            await page.getByRole("button", { name: "Get OTP" }).click();
        });
    
        await allure.step("Enter OTP", async () => {
            await page.waitForSelector('input[type="text"]');
            const otp = "1234";
            const otpInputs = await page.$$('input[type="text"]');
            for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
                await otpInputs[i].fill(otp[i]);
                await page.waitForTimeout(100);
            }
        });
    
        await allure.step("Verify OTP", async () => {
            await page.locator("//button[normalize-space()='Verify OTP']").click();
            // Add screenshot after OTP verification
            const screenshot = await page.screenshot();
            await allure.attachment("After OTP verification", screenshot, {
                contentType: "image/png"
            });
        });
    
        await allure.step("Navigate to Features section", async () => {
            await page.locator("//span[contains(@class,'whitespace-nowrap')][normalize-space()='Features']").click();
        });
    
        await allure.step("Click Create button", async () => {
            await page.locator("//span[normalize-space()='Create']",{state: 'visible'}).click();
        });
    
        await allure.step("Fill admin details", async () => {
            await page.locator('//input[@id="featureName"]').fill("Test Feature");
            
            
            // Add screenshot of filled form
            const screenshot = await page.screenshot();
            await allure.attachment("Admin form filled", screenshot, {
                contentType: "image/png"
            });
        });
    
        await allure.step("Submit admin creation form", async () => {
            await page.locator("//button[contains(text(),'Create')]").click();
        });
    });
});
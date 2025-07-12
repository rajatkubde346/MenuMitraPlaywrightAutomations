const { test, expect } = require("@playwright/test");

test("Owner DashBoard", async function ({ page }) {
    // Set viewport size
    await page.setViewportSize({ width: 1366, height: 768 });
    
    // Login flow
    await page.goto("https://mm-v2-admin.netlify.app/");
    await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
    await page.getByRole("button", { name: "Get OTP" }).click();
  
    // Wait for OTP input fields and fill OTP
    await page.waitForSelector('input[type="text"]');
    const otp = "1234";
    const otpInputs = await page.$$('input[type="text"]');
    for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
      await otpInputs[i].fill(otp[i]);
      await page.waitForTimeout(100);
    }
  
    // Verify OTP and wait for navigation
    await page.locator("//button[normalize-space()='Verify OTP']").click();
    await page.waitForURL(/dashboard/);
  
    // Navigate to Owners section and wait for the page to load
    await page.locator('//span[contains(@class,"whitespace-nowrap")][normalize-space()="Owners"]').click();
    await page.waitForURL(/owners/);
  
    // Click add owner button and wait for form
    await page.locator('//div[contains(@class,"flex items-center justify-end order-3")]').click();
    await page.waitForSelector('//input[@placeholder="Enter full name"]');
  
    // Fill owner details
    await page.locator('//input[@placeholder="Enter full name"]').fill("rajat kumar");
    await page.locator('//input[@placeholder="Enter mobile number"]').fill("8908890891");
    await page.locator('//input[@placeholder="Enter email address"]').fill("test@gmail.com");
    await page.locator('//input[@placeholder="Select date of birth"]').fill("2025-07-07");
    await page.locator('//input[@placeholder="Enter 12-digit Aadhar number"]').fill("123456789012");
    await page.locator('//textarea[@placeholder="Enter complete address"]').fill("baner,pune");
  
    // Submit form and wait for response
    const createButton = page.locator('//span[normalize-space()="Create"]');
    await createButton.waitFor({ state: 'visible' });
    // await Promise.all([
    //   page.waitForResponse(response => response.url().includes('/owners')),
    //   createButton.click()
    // ]);
  
    // // Verify owner creation
    // await page.waitForURL(/owners/);
    // await page.waitForSelector('//td[contains(text(),"rajat kumar")]');
  });
  
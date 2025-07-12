const { test, expect } = require("@playwright/test");

test("Admin DashBoard login", async function ({ page }) {
//Maximize the browser window
await page.setViewportSize({ width: 1366, height: 768 });
  
await page.goto("https://mm-v2-admin.netlify.app/");
  await page.getByPlaceholder("Enter your mobile number").fill("9999999999");
  await page.getByRole("button", { name: "Get OTP" }).click();

  // Wait for OTP input fields to be visible
  await page.waitForSelector('input[type="text"]');

  const otp = "1234";
  // Get all OTP input fields
  const otpInputs = await page.$$('input[type="text"]');

  // Fill each OTP digit
  for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
    await otpInputs[i].fill(otp[i]);
    // Add a small delay to simulate human typing
    await page.waitForTimeout(100);
  }

  await page
    .getByRole("button", { xpath: '//button[normalize-space()="Verify OTP"]' })
    .click();

  // Wait for navigation and ensure elements are loaded
  await page.waitForURL(/dashboard/);

  // Click menu and logout with the original selectors
  //   await page.getByAltText('//button[@class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"]//*[name()="svg"]').click();
  //   await page.locator('//button[normalize-space()="Logout"]').click();

  await page.locator('//span[normalize-space()="Partners"]').click();

  // Click add partner button and wait for form
  await page
    .locator('//div[contains(@class,"flex items-center justify-end order-3")]')
    .click();
  await page.waitForSelector('//input[@placeholder="Enter full name"]');

  // Fill partner details
  await page
    .locator('//input[@placeholder="Enter full name"]')
    .fill("rajat");
  await page
    .locator('//input[@placeholder="Enter mobile number"]')
    .fill("8908890892");
  await page
    .locator('//input[@placeholder="Enter email address"]')
    .fill("test@gmail.com");
  await page
    .locator('//input[@placeholder="Select date of birth"]')
    .fill("2025-07-07");
  await page
    .locator('//input[@placeholder="Enter 12-digit Aadhar number"]')
    .fill("123456789012");
  await page
    .locator('//textarea[@placeholder="Enter complete address"]')
    .fill("baner,pune");

  await page.locator('//input[@value="33"]').check();
  await page.locator('//input[@value="25"]').check();
  await page.locator('//input[@value="24"]').check();
  await page.locator('//input[@value="21"]').check();
  await page.locator('//input[@value="20"]').check();
  await page.locator('//input[@value="19"]').check();
 

  
  await page.waitForTimeout(1000);

  // Submit form and wait for response
  await page.locator('//span[normalize-space()="Create"]').click();

  await page.waitForTimeout(1000);

  await page.locator('//tbody/tr[4]/td[5]/div[1]/button[2]').click();


  await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
});






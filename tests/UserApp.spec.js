// const { test, expect } = require("@playwright/test");

// test("User App", async function ({ page }) {
//     await page.goto("https://testing-menumitra-customer-v2.netlify.app/");
//     await page.locator('//i[@class="fa-solid fa-user"]').click();
//     await page.locator('//button[normalize-space()="Login"]').click();
//     await page.locator('//input[@placeholder="Enter your phone number"]').fill("8669103741");
//     await page.locator('//button[normalize-space()="Get OTP"]').click();

//     await page.waitForSelector('input[type="text"]');
//     const otp = "1234";
//     const otpInputs = await page.$$('input[type="text"]');
//     for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
//         await otpInputs[i].fill(otp[i]);
//     }
//     await page.locator("//button[normalize-space()='SUBMIT']").click();

//     await page.locator("//a[normalize-space()='All Outlets']").click();

//     await page.locator("//body[1]/div[1]/div[6]/div[1]/div[2]/div[4]/div[1]").click();

//     await page.locator("//a[normalize-space()='Jeera Rice']").click();

//     await page.locator("//button[normalize-space()='ADD TO CART']").click();

//     await page.locator("//span[normalize-space()='Extra spicy']").click();

//     await page.locator("//span[normalize-space()='No onions']").click();

//     await page.locator("//span[normalize-space()='No garlic']").click();

//     await page.locator("//span[normalize-space()='Extra sauce']").click();

//     await page.locator("//button[normalize-space()='Add to Cart']").click();

//     await page.locator("//i[@class='fa-solid fa-cart-shopping']").click();

//     await page.locator("//div[@class='d-flex justify-content-center mb-4']//button[@class='btn']").click();



    

    

    


    
    
// });
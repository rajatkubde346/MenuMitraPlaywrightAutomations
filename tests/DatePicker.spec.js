// import { test, expect } from '@playwright/test';

// test('Select date from datepicker', async ({ page }) => {
//     // Navigate to your page - replace with your actual URL
//     await page.goto('https://jqueryui.com/datepicker/');

//     // Wait for frame to be attached (adjust the frame selector as needed)
//     const frame = await page.frameLocator('iframe').first();
    
//     // Click the date input field to open the datepicker
//     await frame.locator('input[type="text"]').click();

//     // Target date components
//     const targetDay = '25';
//     const targetMonth = 'July';
//     const targetYear = '2040';
    
//     // Keep clicking the next button until we reach July 2028
//     while (true) {
//         // Get the current month and year displayed
//         const currentMonth = await frame.locator('.ui-datepicker-month').textContent();
//         const currentYear = await frame.locator('.ui-datepicker-year').textContent();
        
//         // If we reached our target month and year, break the loop
//         if (currentMonth === targetMonth && currentYear === targetYear) {
//             break;
//         }
        
//         // Click the next button
//         await frame.locator('a.ui-datepicker-next').click();
//         // await page.waitForTimeout(100); // Small delay to prevent rapid clicking
//     }

//     // Click on day 25
//     await frame.locator(`//a[text()="${targetDay}"]`).click();

//     // Optional: Verify the selected date
//     const selectedDate = await frame.locator('input[type="text"]').inputValue();
//     expect(selectedDate).toBe('07/25/2028'); // Updated expected date format
// });
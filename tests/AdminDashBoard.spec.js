const { test,expect} = require('@playwright/test');
const { allure } = require('allure-playwright');


  test('Admin Dashboard Login and Partner Management @smoke @regression', async ({ page }, testInfo) => {
    await allure.description('Test to verify admin login and partner management functionality');
    await allure.severity('critical');
    await allure.epic('Admin Dashboard');
    await allure.feature('Partner Management');

    // Navigate to Admin Portal
    await page.goto('https://mm-v2-admin.netlify.app/');
    await allure.step('Navigate to Admin Portal', async () => {
      await page.screenshot({ path: 'screenshots/initial-page.png' });
      await testInfo.attach('initial-page', { path: 'screenshots/initial-page.png', contentType: 'image/png' });
    });

    // Login Process
    await allure.step('Enter mobile number and request OTP', async () => {
      await page.getByPlaceholder('Enter your mobile number').fill('9999999999');
      await page.getByRole('button', { name: 'Get OTP' }).click();
      await page.screenshot({ path: 'screenshots/after-otp-request.png' });
      await testInfo.attach('after-otp-request', { path: 'screenshots/after-otp-request.png', contentType: 'image/png' });
    });

    // Handle OTP
    await allure.step('Enter OTP', async () => {
      await page.waitForSelector('input[type="text"]');
      const otp = '1234';
      const otpInputs = await page.$$('input[type="text"]');
      for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
        await otpInputs[i].fill(otp[i]);
        await page.waitForTimeout(100);
      }
      await page.screenshot({ path: 'screenshots/otp-filled.png' });
      await testInfo.attach('otp-filled', { path: 'screenshots/otp-filled.png', contentType: 'image/png' });
    });

    // Verify OTP and Access Dashboard
    await allure.step('Verify OTP and access dashboard', async () => {
      await page.getByRole('button', { name: 'Verify OTP' }).click();
      await page.waitForURL(/dashboard/);
      await page.screenshot({ path: 'screenshots/dashboard-access.png' });
      await testInfo.attach('dashboard-access', { path: 'screenshots/dashboard-access.png', contentType: 'image/png' });
    });

    // Navigate to Partners Section
    await allure.step('Navigate to Partners section', async () => {
      await page.locator('//span[normalize-space()="Partners"]').click();
      await page.screenshot({ path: 'screenshots/partners-section.png' });
      await testInfo.attach('partners-section', { path: 'screenshots/partners-section.png', contentType: 'image/png' });
    });

    // Add New Partner
    await allure.step('Add new partner', async () => {
      await page.locator('//div[contains(@class,"flex items-center justify-end order-3")]').click();
      await page.waitForSelector('//input[@placeholder="Enter full name"]');
      
      const partnerDetails = {
        name: 'rajat',
        mobile: '8908890898',
        email: 'test@gmail.com',
        dob: '2025-07-07',
        aadhar: '123456789012',
        address: 'baner,pune'
      };

      await allure.attachment('Partner Details', partnerDetails, 'application/json');

      await page.locator('//input[@placeholder="Enter full name"]').fill(partnerDetails.name);
      await page.locator('//input[@placeholder="Enter mobile number"]').fill(partnerDetails.mobile);
      await page.locator('//input[@placeholder="Enter email address"]').fill(partnerDetails.email);
      await page.locator('//input[@placeholder="Select date of birth"]').fill(partnerDetails.dob);
      await page.locator('//input[@placeholder="Enter 12-digit Aadhar number"]').fill(partnerDetails.aadhar);
      await page.locator('//textarea[@placeholder="Enter complete address"]').fill(partnerDetails.address);
      
      await page.screenshot({ path: 'screenshots/partner-form-filled.png' });
      await testInfo.attach('partner-form-filled', { path: 'screenshots/partner-form-filled.png', contentType: 'image/png' });
    });

    // Select Partner Categories
    await allure.step('Select partner categories', async () => {
      const categories = ['33', '25', '24', '21', '20', '19'];
      for (const category of categories) {
        await page.locator(`//input[@value="${category}"]`).check();
      }
      await page.screenshot({ path: 'screenshots/categories-selected.png' });
      await testInfo.attach('categories-selected', { path: 'screenshots/categories-selected.png', contentType: 'image/png' });
    });

    // Submit Partner Creation
    await allure.step('Submit partner creation', async () => {
      await page.locator('//span[normalize-space()="Create"]').click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'screenshots/partner-created.png' });
      await testInfo.attach('partner-created', { path: 'screenshots/partner-created.png', contentType: 'image/png' });
    });

    // Verify Partner Actions
    await allure.step('Verify partner actions', async () => {
      await page.locator('//tbody/tr[4]/td[5]/div[1]/button[2]').click();
      await page.screenshot({ path: 'screenshots/final-state.png' });
      await testInfo.attach('final-state', { path: 'screenshots/final-state.png', contentType: 'image/png' });
    });
  });

  test.describe('Admin Outlet Test Suite', () => {
    test.beforeEach(async ({ page }, testInfo) => {
      await allure.attachment('Environment', {
        URL: 'https://mm-v2-admin.netlify.app/',
        Browser: testInfo.project.name,
        Viewport: '1366x768'
      }, 'application/json');
    });
  
    test("Admin Outlet Creation @regression", async ({ page }, testInfo) => {
      await allure.description('Test to verify outlet creation functionality');
      await allure.severity('critical');
      await allure.epic('Admin Portal');
      await allure.feature('Outlet Management');
  
      await allure.step('Navigate to Outlets Page', async () => {
        await page.goto("https://mm-v2-admin.netlify.app/outlets");
        const screenshot = await page.screenshot();
        await testInfo.attach('outlets-page', { body: screenshot, contentType: 'image/png' });
      });
  
      await allure.step('Enter Mobile Number and Request OTP', async () => {
        await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
        await page.getByRole("button", { name: "Get OTP" }).click();
        const screenshot = await page.screenshot();
        await testInfo.attach('after-otp-request', { body: screenshot, contentType: 'image/png' });
      });
    
      await allure.step('Enter OTP', async () => {
        await page.waitForSelector('input[type="text"]');
        const otp = "1234";
        const otpInputs = await page.$$('input[type="text"]');
        for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
          await otpInputs[i].fill(otp[i]);
          await page.waitForTimeout(100);
        }
        const screenshot = await page.screenshot();
        await testInfo.attach('otp-filled', { body: screenshot, contentType: 'image/png' });
      });
    
      await allure.step('Access Outlets Section', async () => {
        await page.locator("//button[normalize-space()='Verify OTP']").click();
        await page.locator("//span[normalize-space()='Outlets']").click();
        const screenshot = await page.screenshot();
        await testInfo.attach('outlets-section', { body: screenshot, contentType: 'image/png' });
      });
  
      await allure.step('Create New Outlet', async () => {
        await page.locator("//span[normalize-space()='Create']").click();
        
        const outletDetails = {
          name: "TEST OUTLET",
          mobile: "8282828282",
          email: "test@gmail.com",
          upi: "8237438741@upi",
          outlet_type: "Hotel",
          veg_nonveg: "Veg",
          outlet_mode: "Online",
          address: "Pune"
        };
  
        await allure.attachment('Outlet Details', outletDetails, 'application/json');
        
        await page.locator("//input[contains(@name,'name')]").fill(outletDetails.name);
        
        await page.locator("//div[@role='combobox']").click();
        await page.locator('//input[@placeholder="Search by name, mobile or email..."]').fill("rajat");
        await page.locator('//input[@type="checkbox"]').click();
        await page.waitForSelector('//input[@type="checkbox"]');
        await page.waitForTimeout(2000);
        
        await page.locator("//input[@name='mobile']").fill(outletDetails.mobile);
        await page.locator("//input[@placeholder='Enter Email Address']").fill(outletDetails.email);
        await page.locator("//input[@placeholder='username@bankname']").fill(outletDetails.upi);
        await page.selectOption("//select[@name='outlet_type']", outletDetails.outlet_type);
        await page.selectOption("//select[@name='veg_nonveg']", outletDetails.veg_nonveg);
        await page.selectOption("//select[@name='outlet_mode']", outletDetails.outlet_mode);
        await page.locator("//input[@placeholder='Enter Address']",outletDetails.address);
        
        const screenshot = await page.screenshot();
        await testInfo.attach('outlet-form-filled', { body: screenshot, contentType: 'image/png' });
      });
  
      await allure.step('Submit Outlet Creation', async () => {
        await page.locator("//span[normalize-space()='Create']").click();
        const screenshot = await page.screenshot();
        await testInfo.attach('outlet-created', { body: screenshot, contentType: 'image/png' });
      });
    });
  });

  test("Admin login", async function ({ page }) {
    // Add test description and severity
    allure.description("Test to verify admin login and create new admin functionality");
    allure.severity("critical");
    
    // Add test steps with Allure
    await allure.step("Navigate to admin creation page", async () => {
        await page.goto("https://mm-v2-admin.netlify.app/create-admin");
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

    await allure.step("Navigate to Admins section", async () => {
        await page.locator("//span[normalize-space()='Admins']").click();
    });

    await allure.step("Click Create button", async () => {
        await page.locator("//span[normalize-space()='Create']").click();
    });

    await allure.step("Fill admin details", async () => {
        await page.locator("//input[contains(@placeholder,'Enter admin name')]").fill("Test Admin");
        await page.locator("//input[@placeholder='Enter mobile number']").fill("9000000000");
        await page.locator("//input[@placeholder='Enter email address']").fill("testadmin@gmail.com");
        await page.locator("//input[@placeholder='Enter password']").fill("1234");
        
        // Add screenshot of filled form
        const screenshot = await page.screenshot();
        await allure.attachment("Admin form filled", screenshot, {
            contentType: "image/png"
        });
    });

    await allure.step("Submit admin creation form", async () => {
        await page.locator("//span[normalize-space()='Create']").click();
    });
});

  test('Owner Dashboard Management @regression', async ({ page }, testInfo) => {
    await allure.description('Test to verify owner dashboard management functionality');
    await allure.severity('critical');
    await allure.epic('Admin Dashboard');
    await allure.feature('Owner Management');

    // Navigate to Admin Portal
    await allure.step('Navigate to Admin Portal', async () => {
      await page.goto('https://mm-v2-admin.netlify.app/');
      await page.screenshot({ path: 'screenshots/owner-initial-page.png' });
      await testInfo.attach('owner-initial-page', { path: 'screenshots/owner-initial-page.png', contentType: 'image/png' });
    });

    // Login Process
    await allure.step('Enter mobile number and request OTP', async () => {
      await page.getByPlaceholder('Enter your mobile number').fill('7676766767');
      await page.getByRole('button', { name: 'Get OTP' }).click();
      await page.screenshot({ path: 'screenshots/owner-after-otp-request.png' });
      await testInfo.attach('owner-after-otp-request', { path: 'screenshots/owner-after-otp-request.png', contentType: 'image/png' });
    });

    // Handle OTP
    await allure.step('Enter OTP', async () => {
      await page.waitForSelector('input[type="text"]');
      const otp = '1234';
      const otpInputs = await page.$$('input[type="text"]');
      for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
        await otpInputs[i].fill(otp[i]);
        await page.waitForTimeout(100);
      }
      await page.screenshot({ path: 'screenshots/owner-otp-filled.png' });
      await testInfo.attach('owner-otp-filled', { path: 'screenshots/owner-otp-filled.png', contentType: 'image/png' });
    });

    // Access Owner Section
    await allure.step('Access Owner section', async () => {
      await page.locator('//button[normalize-space()="Verify OTP"]').click();
    //   await page.waitForURL(/dashboard/);
      await page.locator('//span[contains(@class,"whitespace-nowrap")][normalize-space()="Owners"]').click();
      await page.waitForURL(/owners/);
      await page.screenshot({ path: 'screenshots/owners-section.png' });
      await testInfo.attach('owners-section', { path: 'screenshots/owners-section.png', contentType: 'image/png' });
    });

    // Add New Owner
    await allure.step('Add new owner', async () => {
      await page.locator('//div[contains(@class,"flex items-center justify-end order-3")]').click();
      await page.waitForSelector('//input[@placeholder="Enter full name"]');

      const ownerDetails = {
        name: 'rajat kumar',
        mobile: '8908890891',
        email: 'test@gmail.com',
        dob: '2025-07-07',
        aadhar: '123456789012',
        address: 'baner,pune'
      };

      await allure.attachment('Owner Details', ownerDetails, 'application/json');

      await page.locator('//input[@placeholder="Enter full name"]').fill(ownerDetails.name);
      await page.locator('//input[@placeholder="Enter mobile number"]').fill(ownerDetails.mobile);
      await page.locator('//input[@placeholder="Enter email address"]').fill(ownerDetails.email);
      await page.locator('//input[@placeholder="Select date of birth"]').fill(ownerDetails.dob);
      await page.locator('//input[@placeholder="Enter 12-digit Aadhar number"]').fill(ownerDetails.aadhar);
      await page.locator('//textarea[@placeholder="Enter complete address"]').fill(ownerDetails.address);
      
      await page.screenshot({ path: 'screenshots/owner-form-filled.png' });
      await testInfo.attach('owner-form-filled', { path: 'screenshots/owner-form-filled.png', contentType: 'image/png' });
    });

    // Submit Owner Creation
    await allure.step('Submit owner creation', async () => {
      const createButton = page.locator('//main[contains(@class,"flex-1 overflow-auto p-4 lg:p-6")]//button[1]');
      await createButton.waitFor({ state: 'visible' });
      await page.screenshot({ path: 'screenshots/owner-final-state.png' });
      await testInfo.attach('owner-final-state', { path: 'screenshots/owner-final-state.png', contentType: 'image/png' });
    });
  });


test("Fuctionalities", async function ({ page }) {
    await page.goto("https://mm-v2-admin.netlify.app/");
    await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
    await page.getByRole("button", { name: "Get OTP" }).click();

    //Wait for OTP input fields and fill OTP
    await page.waitForSelector('input[type="text"]');
    const otp = "1234";
    const otpInputs = await page.$$('input[type="text"]');
    for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
      await otpInputs[i].fill(otp[i]);
      await page.waitForTimeout(100);
    }
  
    // Verify OTP and wait for navigation
    await page.locator("//button[normalize-space()='Verify OTP']").click();
    

    await page.locator("//span[contains(@class,'whitespace-nowrap')][normalize-space()='Functionalities']").click();

    await page.locator("//span[normalize-space()='Create']").click();

    await page.locator("//input[contains(@placeholder,'e.g., manage_orders')]").fill("Test Functionality");
});

test.describe('Admin Super Owner Test Suite', () => {
    test.beforeEach(async ({ page }, testInfo) => {
      await allure.attachment('Environment', {
        URL: 'https://mm-v2-admin.netlify.app/',
        Browser: testInfo.project.name,
        Viewport: '1366x768'
      }, 'application/json');
    });
  
    test("Admin Super Owner Login @smoke", async ({ page }, testInfo) => {
      await allure.description('Test to verify Admin Super Owner login functionality');
      await allure.severity('blocker');
      await allure.epic('Admin Portal');
      await allure.feature('Super Owner Authentication');
  
      await allure.step('Navigate to Admin Portal', async () => {
        await page.goto("https://mm-v2-admin.netlify.app/");
        const screenshot = await page.screenshot();
        await testInfo.attach('initial-page', { body: screenshot, contentType: 'image/png' });
      });
  
      await allure.step('Enter mobile number and request OTP', async () => {
        await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
        await page.getByRole("button", { name: "Get OTP" }).click();
        const screenshot = await page.screenshot();
        await testInfo.attach('after-otp-request', { body: screenshot, contentType: 'image/png' });
      });
    
      await allure.step('Enter OTP', async () => {
        await page.waitForSelector('input[type="text"]');
        const otp = "1234";
        const otpInputs = await page.$$('input[type="text"]');
        for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
          await otpInputs[i].fill(otp[i]);
          await page.waitForTimeout(100);
        }
        const screenshot = await page.screenshot();
        await testInfo.attach('otp-filled', { body: screenshot, contentType: 'image/png' });
      });
    
      await allure.step('Verify OTP and complete login', async () => {
        await page.locator("//button[normalize-space()='Verify OTP']").click();
        const screenshot = await page.screenshot();
        await testInfo.attach('after-verification', { body: screenshot, contentType: 'image/png' });
      });
    });
  });


test.describe('Admin Dashboard Test Suite', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await allure.attachment('Environment', {
      URL: 'https://mm-v2-admin.netlify.app/',
      Browser: testInfo.project.name,
      Viewport: '1366x768'
    }, 'application/json');
  });

  test("Admin Dashboard Creation @smoke", async ({ page }, testInfo) => {
    await allure.description('Test to verify admin creation functionality');
    await allure.severity('critical');
    await allure.epic('Admin Portal');
    await allure.feature('Admin Management');

    await allure.step('Navigate to Create Admin Page', async () => {
      await page.goto("https://mm-v2-admin.netlify.app/create-admin");
      const screenshot = await page.screenshot();
      await testInfo.attach('create-admin-page', { body: screenshot, contentType: 'image/png' });
    });

    await allure.step('Enter Mobile Number and Request OTP', async () => {
      await page.getByPlaceholder("Enter your mobile number").fill("7676766767");
      await page.getByRole("button", { name: "Get OTP" }).click();
      const screenshot = await page.screenshot();
      await testInfo.attach('after-otp-request', { body: screenshot, contentType: 'image/png' });
    });
  
    await allure.step('Enter OTP', async () => {
      await page.waitForSelector('input[type="text"]');
      const otp = "1234";
      const otpInputs = await page.$$('input[type="text"]');
      for (let i = 0; i < Math.min(otp.length, otpInputs.length); i++) {
        await otpInputs[i].fill(otp[i]);
        await page.waitForTimeout(100);
      }
      const screenshot = await page.screenshot();
      await testInfo.attach('otp-filled', { body: screenshot, contentType: 'image/png' });
    });
  
    await allure.step('Access Admins Section', async () => {
      await page.locator("//button[normalize-space()='Verify OTP']").click();
      await page.locator('//span[contains(@class,"whitespace-nowrap")][normalize-space()="Admins"]').click();
      await page.waitForURL(/admins/);
      const screenshot = await page.screenshot();
      await testInfo.attach('admins-section', { body: screenshot, contentType: 'image/png' });
    });

    await allure.step('Create New Admin', async () => {
      await page.locator('//div[contains(@class,"flex items-center justify-end order-3")]').click();
      await page.waitForSelector('//input[contains(@placeholder,"Enter admin name")]');

      const adminDetails = {
        name: "rajat kumar",
        mobile: "8908890891",
        email: "test@gmail.com",
        password: "123456"
      };

      await allure.attachment('Admin Details', adminDetails, 'application/json');

      await page.locator('//input[contains(@placeholder,"Enter admin name")]').fill(adminDetails.name);
      await page.locator('//input[contains(@placeholder,"Enter mobile number")]').fill(adminDetails.mobile);
      await page.locator('//input[contains(@placeholder,"Enter email address")]').fill(adminDetails.email);
      await page.locator('//input[contains(@placeholder,"Enter password")]').fill(adminDetails.password);
      
      const screenshot = await page.screenshot();
      await testInfo.attach('admin-form-filled', { body: screenshot, contentType: 'image/png' });
    });

    await allure.step('Submit Admin Creation', async () => {
      await page.locator('//span[normalize-space()="Create"]').click();
      const screenshot = await page.screenshot();
      await testInfo.attach('admin-created', { body: screenshot, contentType: 'image/png' });
    });
  });
});
  



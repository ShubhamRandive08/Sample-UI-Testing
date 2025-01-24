const { test, expect } = require('@playwright/test');

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Replace with the actual URL where your login page is hosted
    await page.goto('http://127.0.0.1:5500');
  });

  test('should render the login page correctly', async ({ page }) => {
    // Check for the presence of key elements
    await expect(page.locator('h4')).toHaveText("Hello ADMIN ! let's get started");
    await expect(page.locator('#Email')).toBeVisible();
    await expect(page.locator('#Pass')).toBeVisible();
    await expect(page.locator('input[value="SIGN IN"]')).toBeVisible();
  });

  test('should display validation errors when fields are empty', async ({ page }) => {
    await page.locator('input[value="SIGN IN"]').click();
    const emailInput = await page.locator('#Email');
    const passwordInput = await page.locator('#Pass');

    await expect(emailInput).toHaveAttribute('required', '');
    await expect(passwordInput).toHaveAttribute('required', '');
  });

  test('should allow the user to fill in the form and submit', async ({ page }) => {
    const emailInput = page.locator('#Email');
    const passwordInput = page.locator('#Pass');

    // Fill in the form
    await emailInput.fill('admin@example.com');
    await passwordInput.fill('password123');

    // Simulate form submission
    await page.locator('input[value="SIGN IN"]').click();

    // Validate the action after submission (mock response or page navigation)
    // Example: Check if it navigates to a new page or shows a success message
    // await expect(page).toHaveURL('/dashboard');
  });
});

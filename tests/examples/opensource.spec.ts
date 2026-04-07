import { test, expect } from '@playwright/test';

test("opensource", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const username = page.getByPlaceholder("Username");
    await username.fill('Admin');
    await page.getByPlaceholder("password").fill('admin123');
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/dashboard/);
    await page.getByText('Recruitment', { exact: true }).click();
    await expect(page).toHaveURL(/viewCandidates/);
});

test.only("opensourcetest", async ({ page }) => {
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill('Admin');
    await page.getByPlaceholder("password").fill('admin123');
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByText('Recruitment', { exact: true }).click();
    await page.waitForTimeout(5000);
   
    await page.locator('.oxd-input-group')
        .filter({ hasText: 'Job Title' })
        .locator('.oxd-select-text')
        .click();

    await page.locator('.oxd-select-dropdown')
        .getByText('QA Engineer', { exact: true })
        .click();
    await page.getByRole('button', { name: 'Search' }).click();


    await page.getByText('Dashboard', { exact: true }).click();
    await expect(page).toHaveURL(/dashboard/);

    await page.locator('p.oxd-userdropdown-name').click();
    await page.waitForTimeout(5000);

    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForTimeout(5000);


});
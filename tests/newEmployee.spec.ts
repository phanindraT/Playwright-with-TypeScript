import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/pimPage';
import { HeaderComponent } from '../pages/components/HeaderComponent';


test("new employee", async ({ page }) => {

  // login flow
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  const header = new HeaderComponent(page);
  const randomNumber = randomNumberGenerator(); 

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await expect(page).toHaveURL(/dashboard/);

  await pimPage.clickOnPim();
  await pimPage.clickOnAddbutton();
  await pimPage.fillEmployeeDetails("google", "google Inc",randomNumber);
  await pimPage.saveEmployeeDetails();
  await pimPage.verifyEmployeeCreated("google",randomNumber);

  await header.logout();
  await expect(page).toHaveURL(/login/);


  
  /*

  // clicking on PIM and clicking on add button
  await page.getByText('PIM', { exact: true }).click();
  await expect(page).toHaveURL(/pim\/viewEmployeeList/);
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page).toHaveURL(/pim\/addEmployee/);


  await page.getByRole('textbox', { name: 'First Name' }).fill("google");
  await page.getByRole('textbox', { name: 'Last Name' }).fill("google Inc");

  // await page.locator('.oxd-input').nth(4).fill(randomNumber.toString());
  const employeeId = page.locator('.oxd-input-group')
    .filter({ hasText: 'Employee Id' })
    .getByRole('textbox');
   const randomNumber = randomNumberGenerator(); 
  await employeeId.fill(randomNumber);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber/);
  await expect(page.getByPlaceholder('First Name')).toHaveValue("google");

  const employeeIdField = page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Employee Id' })
    .getByRole('textbox');
  await expect(employeeIdField).toHaveValue(randomNumber);

  await page.locator('p.oxd-userdropdown-name').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
*/

})

function randomNumberGenerator(): string {

  const min: number = 10000;
  const max: number = 99999;
  const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
}
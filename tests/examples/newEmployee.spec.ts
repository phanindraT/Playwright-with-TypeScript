import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { PimPage } from '../../pages/PimPage';
import { HeaderComponent } from '../../pages/components/HeaderComponent';
import { randomNumberGenerator } from '../../utils/RandomUtils';



test("new employee", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  const header = new HeaderComponent(page);
  const randomNumber =  randomNumberGenerator();

  // login flow
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await expect(page).toHaveURL(/dashboard/);

  // Add employee flow
  await pimPage.clickOnPim();
  await pimPage.clickOnAddbutton();
  await pimPage.fillEmployeeDetails("google", "google Inc",randomNumber);
  await pimPage.saveEmployeeDetails();
  await pimPage.verifyEmployeeCreated("google",randomNumber);

  //logout flow
  await header.logout();
  await expect(page).toHaveURL(/login/);

})


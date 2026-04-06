import {test , expect} from '../fixtures/baseTest.ts';
import {randomNumberGenerator} from '../utils/RandomUtils.ts';

test("new employee add from fixtures", async({loginpage,pimpage,header,page}) =>{

    const randomNumber = randomNumberGenerator();

    // login flow
    await loginpage.goto();
    await loginpage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);

    // Add employee flow
    await pimpage.clickOnPim();
    await pimpage.clickOnAddbutton();
    await pimpage.fillEmployeeDetails('google','google Inc',randomNumber);
    await pimpage.saveEmployeeDetails();
    await pimpage.verifyEmployeeCreated('google',randomNumber)

    //logout flow
    await header.openUsermenu();
    await header.logout();
    await expect(page).toHaveURL(/login/);

})
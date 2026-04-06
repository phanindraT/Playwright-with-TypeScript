import {test , expect} from '../fixtures/baseTest.ts';
import {randomNumberGenerator} from '../utils/RandomUtils.ts';
import { employee } from '../test-data/employeeData.ts';

test("new employee add from fixtures", async({loginpage,pimpage,header,page}) =>{

    const randomNumber = randomNumberGenerator();

    // login flow
    await loginpage.goto();
    await loginpage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);

    // Add employee flow
    await pimpage.clickOnPim();
    await pimpage.clickOnAddbutton();
    await pimpage.fillEmployeeDetails(employee.firstName,employee.lastname,randomNumber);
    await pimpage.saveEmployeeDetails();
    await pimpage.verifyEmployeeCreated(employee.firstName,randomNumber)

    //logout flow
    await header.openUsermenu();
    await header.logout();
    await expect(page).toHaveURL(/login/);

})
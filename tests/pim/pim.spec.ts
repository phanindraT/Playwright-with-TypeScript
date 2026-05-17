import {test , expect} from '../../fixtures/baseTest';
import {randomNumberGenerator} from '../../utils/RandomUtils';
import { Employee } from '../../types/Employee';
import { EmployeeFactory } from '../../factories/EmployeeFactory';


test("new employee add from fixtures", async({pimflows,pimpage,header,page}) =>{

    // login flow
    // await loginpage.goto();
    // await loginpage.login('Admin', 'admin123');
    // await expect(page).toHaveURL(/dashboard/);
    // const randomNumber = randomNumberGenerator();
    
    //  const employeeInfo : Employee ={
    //     firstname : employeeData.firstName,
    //     lastname :employeeData.lastname,
    //     employeeId: randomNumber
    //  }
  

    // Add employee flow
  /* 
    await pimpage.navigate();
    await pimpage.clickOnPim();
    await pimpage.clickOnAddbutton();
    await pimpage.fillEmployeeDetails(employee.firstName,employee.lastname,randomNumber);
    await pimpage.saveEmployeeDetails();
    await pimpage.verifyEmployeeCreated(employee.firstName,randomNumber)
     */

    // Add employee flow using flows.
    // const PimFlow = new PimFlows(pimpage);
       const  employeeInfo : Employee  = EmployeeFactory.create();
       const input: Employee  = await pimflows.addEmployee(employeeInfo);
      const employeeIdField = pimpage.getEmployeeIdInput();
      await expect(employeeIdField).toHaveValue(input.employeeId);
      await expect(pimpage.getFirstNameInput()).toHaveValue(input.firstname);


    //logout flow
    await header.openUsermenu();
    await header.logout();
    await expect(page).toHaveURL(/login/);

})


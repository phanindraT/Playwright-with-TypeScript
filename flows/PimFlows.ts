import { PimPage } from "../pages/PimPage";
import { Employee } from "../types/Employee"



export class PimFlows{

    constructor(private pimpage: PimPage){}

    async addEmployee(employee :Employee)  : Promise<Employee>{

            await this.pimpage.navigate();
            await this.pimpage.clickOnPim();
            await this.pimpage.clickOnAddbutton();
            await this.pimpage.fillEmployeeDetails(employee.firstname,employee.lastname,employee.employeeId);
            await this.pimpage.saveEmployeeDetails();

            // const firstname =employee.firstname;
            // const employeeId  = employee.employeeId;
            // return {firstname,employeeId};

            return employee
    }
    

}
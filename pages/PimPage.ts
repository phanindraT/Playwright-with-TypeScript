import { Page, expect,Locator } from '@playwright/test';

export class PimPage {
    readonly pimMenu : Locator;
    readonly addButton : Locator;
    readonly firstNameField : Locator;
    readonly lastNameField : Locator;
    readonly employeeIdLocator :Locator;

    constructor(private page: Page) {
    // this.pimMenu  = this.page.getByText('PIM', { exact: true });
     this.pimMenu =this.page.locator('span').filter({ hasText: 'PIM' }).first();
     this.addButton = this.page.getByRole('button', { name: 'Add' });
     this.firstNameField = this.page.getByRole('textbox', { name: 'First Name' });
     this.lastNameField = this.page.getByRole('textbox', { name: 'Last Name' });
     this.employeeIdLocator = this.page.locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .getByRole('textbox');
 }

     async navigate(){
       await this.page.goto('web/index.php/pim/viewEmployeeList');
     }

    async clickOnPim() {
        await Promise.all([
                     this.page.waitForURL(/pim\/viewEmployeeList/),
                         this.pimMenu.click()

        ]);
    }

    async clickOnAddbutton() {
        await this.addButton.click();
        await expect(this.page).toHaveURL(/pim\/addEmployee/);

    }
    async fillEmployeeDetails(firstName: string, lastName: string, employeeId: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.employeeIdLocator.fill(employeeId);
    }
    async saveEmployeeDetails() {
        await Promise.all([
            this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber/),
            this.page.getByRole('button', { name: 'Save' }).click()
        ])
    }

    // async verifyEmployeeCreated(firstName: string, randomNumber: string) {
    //     await expect(this.page.getByPlaceholder('First Name')).toHaveValue(firstName);
    //     const employeeIdField = this.page
    //         .locator('.oxd-input-group')
    //         .filter({ hasText: 'Employee Id' })
    //         .getByRole('textbox');
    //     await expect(employeeIdField).toHaveValue(randomNumber);

    // }

    getEmployeeIdInput() {
         
        return this.employeeIdLocator;
    }
    getFirstNameInput(){
    return this.page.getByPlaceholder('First Name');
    }
 

}


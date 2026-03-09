import { Page, expect } from '@playwright/test';

export class PimPage {
    constructor(private page: Page) {

    }
    async clickOnPim() {
        await Promise.all([
                     this.page.waitForURL(/pim\/viewEmployeeList/),
                             this.page.getByText('PIM', { exact: true }).click()

        ]);
    }

    async clickOnAddbutton() {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await expect(this.page).toHaveURL(/pim\/addEmployee/);

    }
    async fillEmployeeDetails(firstName: string, lastName: string, employeeId: string) {
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
        const employeeIdLocator = this.page.locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .getByRole('textbox');
        await employeeIdLocator.fill(employeeId);
    }
    async saveEmployeeDetails() {
        await Promise.all([
            this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber/),
            this.page.getByRole('button', { name: 'Save' }).click()
        ])
    }

    async verifyEmployeeCreated(firstName: string, randomNumber: string) {
        await expect(this.page.getByPlaceholder('First Name')).toHaveValue(firstName);
        const employeeIdField = this.page
            .locator('.oxd-input-group')
            .filter({ hasText: 'Employee Id' })
            .getByRole('textbox');
        await expect(employeeIdField).toHaveValue(randomNumber);

    }


}


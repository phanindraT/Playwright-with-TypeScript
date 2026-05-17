import { expect, Page } from '@playwright/test';
import { Locator } from '@playwright/test'

export class AdminPage {

    readonly adminButton: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;

    constructor(private page: Page) {
        this.adminButton = this.page.locator('span').filter({ hasText: 'Admin' }).first();
     //   this.searchBox = this.page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
    this.searchBox = this.page
   .locator('.oxd-input-group')
   .filter({ hasText: 'Username' })
   .getByRole('textbox');
     //   this.searchBox = this.page.getByText('Username', { exact: true })
       this.searchButton = this.page.getByRole('button', { name: 'Search' });

    }

    async navigate(){
    await this.page.goto('/web/index.php/admin/viewSystemUsers');

    }
    async clickOnAdminButton() {
        await this.adminButton.click();

    }

    async searchEmployee(firstName: string) {
        await this.searchBox.fill(firstName);
        await this.searchButton.click();
    }

     getResultText() {
        return this.page.getByText('(1) Record Found', { exact: true });
    }
}

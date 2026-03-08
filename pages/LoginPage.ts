import {  Page } from '@playwright/test'
export class LoginPage {
    constructor(private page: Page) {

    }
    async goto(){
     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username: string, password: string) {
        const usernameLocator = this.page.getByPlaceholder("Username");
        await usernameLocator.fill(username);
        await this.page.getByPlaceholder("Password").fill(password);
        await Promise.all([
            this.page.waitForURL(/dashboard/),
            this.page.getByRole("button", { name: "Login" }).click()
        ]);
    }


}


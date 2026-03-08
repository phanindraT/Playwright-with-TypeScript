import { Locator, Page } from '@playwright/test';

export class HeaderComponent{
    private userMenu : Locator;
    constructor (private page : Page){
        this.userMenu = page.locator('.oxd-userdropdown-name');

    }

    async openUsermenu(){
        await this.userMenu.click();
    }

    async logout(){
      await  this.openUsermenu();
      await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    }
}
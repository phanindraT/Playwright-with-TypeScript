import {test as setup, expect} from '@playwright/test';
import { ENV } from '../config/env.ts'

setup.use({ storageState: undefined });  // setup.use({ storageState: undefined }) ensures the authentication setup runs in a clean browser context without reusing any previous session, guaranteeing a fresh and reliable login state for all tests.

setup("authenticate", async ({page})=>{
     await page.goto("/web/index.php/auth/login");
 const usernameLocator = page.getByPlaceholder("Username");
        await usernameLocator.fill(ENV.USERNAME);
        await page.getByPlaceholder("Password").fill(ENV.PASSWORD);
        await Promise.all([
            page.waitForURL(/dashboard/),
            page.getByRole("button", { name: "Login" }).click()
        ]);

        await page.context().storageState({path : 'playwright/.auth/user.json'});

});
import {test,expect} from '../../fixtures/baseTest'
//import { AdminPage } from '../pages/AdminPage';



test("should search employee by username in admin page", async({adminpage,page})=>{
   // const adminPage = new AdminPage(page);
    await adminpage.navigate();
    await adminpage.searchEmployee('Admin');
    await expect(adminpage.getResultText()).toBeVisible();

})
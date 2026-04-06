import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/pimPage';
import { HeaderComponent } from '../pages/components/HeaderComponent';


type myFixtures ={
    loginpage : LoginPage;
    pimpage : PimPage;
    header : HeaderComponent;
};

export const test = base.extend<myFixtures>({
    loginpage : async({page},use)=>{
        await use(new LoginPage(page));
    },
    pimpage : async({page},use)=>{
        await use(new PimPage(page));
    },
    header : async({page},use)=>{
        await use(new HeaderComponent(page));
    }
});

export {expect} from '@playwright/test';
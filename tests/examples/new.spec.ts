import { test, expect, Locator } from '@playwright/test';


test("new",async ({page})=> {   
/*
await page.goto('https://playwright.dev/docs/test-typescript');
  
// const logo : Locator =page.getByAltText('Playwright logo').first();
// await expect(logo).toBeVisible();

await page.getByAltText('Playwright logo').first().click();

await page.goto('https://playwright.dev/docs/locators#locate-by-alt-text');

const locatorTitle: Locator = page.getByTitle('Locator', { exact: true }).first();

const locatorText : Locator = page.getByText('page.getByTitle()', { exact: true }).first();

await expect(locatorTitle).toBeVisible();

await expect(locatorText).toBeVisible();

await page.getByRole('link', { name: 'Best Practices' }).first().click();

//await page.waitForTimeout(10000);

*/


/* getByRole : Role locators include buttons, checkboxes, headings, links, lists, tables, and many more and follow W3C specifications for ARIA role, ARIA attributes and accessible name.
Note that many html elements like <button> have an implicitly defined role that is recognized by the role locator. 
Note that role locators do not replace accessibility audits and conformance tests, but rather give early feedback about the ARIA guidelines.
For interactive elements like button, a, input, etc. use role locators
*/
await page.goto('https://practice.expandtesting.com/locators');
const contact = page.getByRole('link', { name: 'Contact' });
await contact.waitFor({state : 'visible'});
await contact.click();   
await expect(page).toHaveURL(/contact/);

await page.goto('https://practice.expandtesting.com/locators');
const email = page.getByRole('textbox', { name: 'Email for newsletter' });
//await email.waitFor({ state: 'visible' });
await email.fill('playwright@typescript.com');
//await page.getByRole('link', { name: 'Contact' }).click();


/* getByTitle : Use this locator when your element has the title attribute. */
await page.goto('https://practice.expandtesting.com/locators');
const refresh : Locator = page.getByTitle('Refresh content');
await expect(refresh).toHaveText('Reload');

/* getByText:  Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.
Use text locators to find non interactive elements like div, span, p, etc. For interactive elements like button, a, input, etc. use role locators.
*/
const text : Locator =page.getByText('Latest news and updates', { exact: true });
await expect (text).toBeVisible();

/*  getByLabel :Use this locator when locating form fields. */
const emailNew : Locator =page.getByLabel('Email for newsletter', { exact: true });
await email.fill('typescript.com');

/*  getByPlaceholder : Use this locator when locating form elements that do not have labels but do have placeholder texts.*/
await page.getByPlaceholder('Search the site').fill('typescript');

/* getByAltText : Use this locator when your element supports alt text such as img and area elements. */
await page.getByAltText('User avatar').click();
//await page.getByRole('img', { name: 'User avatar' }).click();

/* getByTestId : You can also use test ids when you choose to use the test id methodology or when you can't locate by role or text. */
//await expect(page.getByTestId('status-message')).toHaveText('All systems operationalAutomation testing tools');


/* relative xpath */
await page.locator("//input[@placeholder='Filter by tag']").fill('playwright');


/* full xpath */
await expect(page.locator('xpath=/html[1]/body[1]/main[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[4]/input[1]')).toBeVisible();

await page.waitForTimeout(10000);

}); 




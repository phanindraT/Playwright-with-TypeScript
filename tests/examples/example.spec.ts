import { test, expect, Locator } from '@playwright/test';

test('google page', async({page}) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('google page new', async({page}) => {
  await page.goto('https://playwright.dev/docs/test-typescript');
  await expect(page).toHaveTitle('TypeScript | Playwright');
});

test('test', async({page}) => {
  await page.goto('https://playwright.dev/docs/test-typescript');
  const textlocator = page.locator('//*[@id="tsconfig-resolution"]');
  await expect(textlocator).toHaveText('tsconfig resolution');
});

test('new', async({page}) => {
  await page.goto('https://playwright.dev/docs/test-typescript');  
  const textlocator: Locator = page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/aside/div/div/nav/ul/li[6]/ul/li[5]/a');
  await expect(textlocator).toHaveText('API testing');
});





test('test coin.zerodha', async ({ page }) => {
  await page.goto('https://coin.zerodha.com/');
  await page.getByRole('link', { name: 'Explore' }).click();
  await page.getByText('Equity', { exact: true }).click();
  await page.getByText('Large & Mid Cap').click();
  await page.locator('div').filter({ hasText: /^AUM$/ }).first().click();
  await page.locator('div').filter({ hasText: /^CAGR$/ }).first().click();
  await page.getByText('5 Yrs').click();
  await page.locator('div:nth-child(2) > .vue-slider-mark-step').click();
  await page.locator('.vue-slider-dot-handle').click();
  await page.locator('.vue-slider-dot-handle').click();
// await page.getByText('1 resultsEquity✕Large & Mid').click();
  await page.getByRole('link', { name: 'Motilal Oswal Large and' }).click();
  await page.getByRole('combobox').selectOption('fiveYearPercent');
});










test('test new', async ({ page }) => {
  await page.goto('https://coin.zerodha.com/');
  await page.getByRole('link', { name: 'Explore' }).click();
  await page.getByText('Equity', { exact: true }).click();
  await page.getByText('Equity', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Equity$/ }).click();
  await page.getByText('Large & Mid Cap').click();
  await page.getByRole('listitem').filter({ hasText: 'SBI Large & Midcap FundAUM₹37,044.60 Cr.GrowthEquityLarge & Mid Cap' }).getByRole('link').click();
  await page.getByRole('combobox').selectOption('twoYearPercent');
  await page.getByRole('combobox').selectOption('threeYearPercent');
  await page.getByRole('combobox').selectOption('fourYearPercent');
  await page.getByRole('combobox').selectOption('fiveYearPercent');
  await page.getByRole('combobox').selectOption('oneYearPercent');
  await page.getByRole('link', { name: 'Invest' }).click();
});







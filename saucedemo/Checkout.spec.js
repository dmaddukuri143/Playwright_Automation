const {test, expect}= require('@playwright/test');
const url = 'https://www.saucedemo.com';
const valid_login = 'standard_user';
const valid_pwd = 'secret_sauce';
const First_Name = 'Jane';
const Last_Name = 'Doe';
const Zip_Code = '12345';
test ('checkout', async({page})=> {
    await page.goto(url);
    await page.getByPlaceholder('Username').fill(valid_login);
    await page.getByPlaceholder('Password').fill(valid_pwd);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.getByText('Swag labs')).toBeVisible();
    await page.locator('[data-test= "add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_badge').click();
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByPlaceholder('First Name').fill(First_Name);
    await page.getByPlaceholder('Last Name').fill(Last_Name);
    await page.getByPlaceholder('Zip/Postal Code').fill(Zip_Code);
    await page.getByRole('button',{name: 'Continue'}).click();
    await page.getByRole('button', {name: 'Finish'}).click();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();





})
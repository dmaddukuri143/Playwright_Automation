const {test, expect} = require ('@playwright/test');
const url = 'https://www.saucedemo.com';
const valid_login = 'standard_user';
const valid_pwd = 'secret_sauce';
const locked_user = 'locked_out_user';
const locked_pwd = 'secret_sauce';
const invalid_pwd = 'password123';


test ('login tests', async({page})=> {
    await page.goto(url);
    await page.getByPlaceholder('Username').fill(valid_login);
    await page.getByPlaceholder('Password').fill(valid_pwd);
    await page.getByRole('button', {name : 'Login'}).click();
    await expect(page).toHaveURL(url + '/inventory.html');
    await expect(page.getByText('Swag Labs')).toBeVisible();
})

test ('locked user', async({page}) => {
    await page.goto(url);
    await page.getByPlaceholder('Username').fill(locked_user);
    await page.getByPlaceholder('Password').fill(locked_pwd);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
}) 

test ('invalid pwd', async({page})=> {
    await page.goto(url);
    await page.getByPlaceholder('Username').fill(valid_login);
    await page.getByPlaceholder('Password').fill(invalid_pwd);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
})
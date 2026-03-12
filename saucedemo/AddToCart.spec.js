const {test, expect} = require ('@playwright/test');
const url = 'https://www.saucedemo.com';
const valid_login = 'standard_user';
const valid_pwd = 'secret_sauce';

test('AddToCart Test', async({page})=> {
    await page.goto(url);
    await page.getByPlaceholder('Username').fill(valid_login);
    await page.getByPlaceholder('Password').fill(valid_pwd);
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL(url + '/inventory.html');
    await expect(page.getByText('Swag labs')).toBeVisible();
    await expect(page.getByText('Products')).toBeVisible();
    await page.locator('[data-test="product-sort-container"]').selectOption('Price (low to high)');
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Onesie');
    await page.locator('[data-test= "add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
})

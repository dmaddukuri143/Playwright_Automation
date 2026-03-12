const {test, expect} = require('@playwright/test')
const {hello, helloworld}=require('./hello')

console.log (hello());
console.log (helloworld());

const env = 'www.google';

const url = 'https://' + env + '.com';

const neatUrl = `https://${env}.com`;

const base_url = 'https://google.com';
const valid_users = ['test@test.com', 'test2@test.com', 'test3@test.com'];
const password = 'pass123@';

test ('google page lands', async ({page})=> {
    for (const email of valid_users){
        await page.goto(base_url);
        await page.getByLabel('EMAIL').fill(email);
        await page.getByLabel('PASSWORD').fill(password);
        await page.getByRole('button', {name : 'Log in'}).click();
        await expect(page).toHaveURL('/dashboard');
        await expect(page).getByText('Welcome').toBeVisible();

    }
});


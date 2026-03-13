# Playwright Automation — SauceDemo

Regression test suite for [saucedemo.com](https://www.saucedemo.com) built with Playwright and JavaScript.

## What's Being Tested

- **Login** — valid login, locked out user, invalid password
- **Products** — add to cart, multiple items, sort by price
- **Checkout** — full end-to-end checkout flow, missing form fields

## Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript
- Node.js

## How To Run

1. Clone the repo
   git clone https://github.com/dmaddukuri143/playwright-automation.git

2. Install dependencies
   npm install

3. Install browsers
   npx playwright install

4. Run all tests
   npx playwright test

5. Run a specific file
   npx playwright test tests/saucedemo/login.spec.js

6. See visual report
   npx playwright show-report

## Test Files

| File | What It Tests |
|------|--------------|
| login.spec.js | Valid login, locked user, invalid password |
| products.spec.js | Add to cart, sorting, multiple items |
| checkout.spec.js | Full checkout flow, form validation |

## Author
Dora

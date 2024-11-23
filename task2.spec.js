
const {chromium,test, expect} = require('@playwright/test');
test('bro',async()=>{
    const bros = await chromium.launch({
        headless : false,
    });
    const page = await bros.newPage();
    await page.goto('https://www.facebook.com/');
   const pagetesx = await page.locator('h2._8eso').textContent();

   console.log(pagetesx);
    const username = await page.locator('#email');
    await expect(username).toBeVisible();
    await username.fill("name");
    await page.getByTestId('royal_login_button').click();

    await page.close();
});

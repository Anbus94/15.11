const {chromium,test, expect} = require('@playwright/test');
test('browser',async()=>{
    const brows = await chromium.launch(
        {
        headless : false,
        });
        const page = await brows.newPage();
        await page.goto('https://www.google.com/');
        const tit = await page.title();
        
        console.log(tit);
        await page.goto('https://github.com/');
        await page.waitForNavigation();
        await expect(page).toHaveTitle(tit);


        
});
